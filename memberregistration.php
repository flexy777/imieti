<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');

include_once '../includes/connect_to_db.php';

session_start();

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Rate limiting (basic example using session)
if (!isset($_SESSION['last_request_time'])) {
    $_SESSION['last_request_time'] = time();
} elseif (time() - $_SESSION['last_request_time'] < 2) {
    http_response_code(429);
    echo json_encode(['status' => 429, 'message' => 'Too Many Requests']);
    exit();
}
$_SESSION['last_request_time'] = time();

function sendResponse($status, $message, $data = []) {
    http_response_code($status);
    echo json_encode([
        'status' => $status,
        'message' => $message,
        'data' => $data
    ]);
    exit();
}

// Validate CSRF token
$csrf_token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
if (!hash_equals(session_id(), $csrf_token)) {
    sendResponse(403, 'Invalid CSRF token');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(405, 'Method Not Allowed');
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    sendResponse(400, 'Invalid JSON input');
}

// Validate required fields
$required_fields = ['regfee', 'disksize', 'accounttype', 'gig', 'gender', 'username', 'phone', 'country', 'state', 'email', 'password'];
foreach ($required_fields as $field) {
    if (!isset($input[$field]) || empty(trim($input[$field]))) {
        sendResponse(400, "Missing or empty required field: $field");
    }
}

// Input validation
$regfee = filter_var($input['regfee'], FILTER_VALIDATE_FLOAT);
$disksize = filter_var($input['disksize'], FILTER_VALIDATE_INT);
$accounttype = filter_var($input['accounttype'], FILTER_SANITIZE_STRING);
$gig = filter_var($input['gig'], FILTER_SANITIZE_STRING);
$gender = filter_var($input['gender'], FILTER_SANITIZE_STRING);
$username = filter_var(trim($input['username']), FILTER_SANITIZE_STRING);
$tel = filter_var($input['phone'], FILTER_SANITIZE_STRING);
$country = filter_var($input['country'], FILTER_SANITIZE_STRING);
$state = filter_var($input['state'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$password = $input['password'];
$referer = isset($input['referer']) ? filter_var($input['referer'], FILTER_SANITIZE_STRING) : '';
$Imietin = isset($input['Imietin']) ? filter_var($input['Imietin'], FILTER_VALIDATE_EMAIL) : '';

if (!$regfee || !$disksize || !$email) {
    sendResponse(400, 'Invalid input format for regfee, disksize, or email');
}

// Validate account type
$valid_account_types = ['Basic Package', 'Starter Package', 'Business Package', 'Ultimate Package'];
if (!in_array($accounttype, $valid_account_types)) {
    sendResponse(400, 'Invalid account type');
}

// Validate username (alphanumeric, 3-20 characters)
if (!preg_match('/^[a-zA-Z0-9]{3,20}$/', $username)) {
    sendResponse(400, 'Username must be 3-20 alphanumeric characters');
}

// Validate password (minimum 8 characters, at least one letter and one number)
if (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/', $password)) {
    sendResponse(400, 'Password must be at least 8 characters with at least one letter and one number');
}

$date = new DateTime('now', new DateTimeZone('Africa/Lagos'));
$dateOfReg = $date->format('d-m-Y H:i:s a');
$day = idate("d");
$week = idate("W");
$month = idate("m");
$year = idate("Y");
$verify = idate("U");
$version = 2020;

// Hash password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Check for duplicate submission
$stmt = $conn->prepare("SELECT * FROM accounts WHERE username = ? AND passw = ? AND email = ?");
$stmt->bind_param("sss", $username, $hashed_password, $email);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    sendResponse(200, 'User already registered', ['username' => $username]);
}
$stmt->close();

// Check if username exists
$stmt = $conn->prepare("SELECT * FROM accounts WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    $acctype = match ($accounttype) {
        'Basic Package' => 1,
        'Starter Package' => 2,
        'Business Package' => 3,
        'Ultimate Package' => 4,
        default => 0
    };
    sendResponse(409, 'Username already taken', ['error_code' => 1, 'acctype' => $acctype]);
}
$stmt->close();

// Check if phone number exists
$stmt = $conn->prepare("SELECT * FROM accounts WHERE tel = ?");
$stmt->bind_param("s", $tel);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    $acctype = match ($accounttype) {
        'Basic Package' => 1,
        'Starter Package' => 2,
        'Business Package' => 3,
        'Ultimate Package' => 4,
        default => 0
    };
    sendResponse(409, 'Phone number already registered', ['error_code' => 2, 'acctype' => $acctype]);
}
$stmt->close();

// Check if email exists
$stmt = $conn->prepare("SELECT * FROM accounts WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    $acctype = match ($accounttype) {
        'Basic Package' => 1,
        'Starter Package' => 2,
        'Business Package' => 3,
        'Ultimate Package' => 4,
        default => 0
    };
    sendResponse(409, 'Email already registered', ['error_code' => 7, 'acctype' => $acctype]);
}
$stmt->close();

// Check if state is valid
if ($state === 'nil') {
    $acctype = match ($accounttype) {
        'Basic Package' => 1,
        'Starter Package' => 2,
        'Business Package' => 3,
        'Ultimate Package' => 4,
        default => 0
    };
    sendResponse(400, 'State is required', ['error_code' => 8, 'acctype' => $acctype]);
}

// Insert new account
$stmt = $conn->prepare("INSERT INTO accounts (tel, email, username, passw, gig, country, mystate, dateofreg, yearofreg, monthofreg, weekofreg, dayofreg, versionofreg, accounttype, accountstatus, verify, verifystatus, officestatus, amount, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, 'pending', 'no', ?, ?)");
$stmt->bind_param("ssssssssiiiisdis", $tel, $email, $username, $hashed_password, $gig, $country, $state, $dateOfReg, $year, $month, $week, $day, $version, $accounttype, $verify, $regfee, $gender);
if (!$stmt->execute()) {
    sendResponse(500, 'Failed to create account');
}
$last_id = $conn->insert_id;
$stmt->close();

// Create bank account
$stmt = $conn->prepare("INSERT INTO bankaccount (username) VALUES (?)");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->close();

// Create chat account
$stmt = $conn->prepare("INSERT INTO chataccounts (username, accounttype) VALUES (?, 'member')");
$stmt->bind_param("s", $username);
$stmt->execute();
$chatid = $conn->insert_id;
$stmt->close();

// Handle Imietin signup
if (!empty($Imietin)) {
    $stmt = $conn->prepare("INSERT INTO Imietinsignups (email, assettype, assetemail, yearofreg, month, week, day, statuss) VALUES (?, 'provider', ?, ?, ?, ?, ?, 'pending')");
    $stmt->bind_param("ssiiii", $Imietin, $email, $year, $month, $week, $day);
    $stmt->execute();
    $stmt->close();
}

// Allocate disk space
$stmt = $conn->prepare("INSERT INTO diskspace (username, disksize) VALUES (?, ?)");
$stmt->bind_param("si", $username, $disksize);
$stmt->execute();
$stmt->close();

// Handle referrals
if (!empty($referer)) {
    $stmt = $conn->prepare("SELECT username FROM accounts WHERE id = ?");
    $stmt->bind_param("s", $referer);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        $referer_username = $row['username'];
        $stmt->close();
        
        $stmt = $conn->prepare("INSERT INTO referals (referer, referee) VALUES (?, ?)");
        $stmt->bind_param("ss", $referer_username, $username);
        $stmt->execute();
        $stmt->close();
        
        $stmt = $conn->prepare("INSERT INTO follow (follower, followee) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $referer_username);
        $stmt->execute();
        $stmt->close();
    } else {
        $stmt->close();
    }
}

// Insert online status
$stmt = $conn->prepare("INSERT INTO online (username, statuss) VALUES (?, ?)");
$stmt->bind_param("si", $username, $verify);
$stmt->execute();
$stmt->close();

// Send welcome email
include '../includes/mailWelcomeMember.php';

// Set secure cookies
$cookie_options = [
    'expires' => time() + 86400 * 30,
    'path' => '/',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
];
setcookie("imietipro", $username, $cookie_options);
$cookie_options['expires'] = time() + 86400 * 90;
setcookie("imietiChat", $chatid, $cookie_options);

// Set session
$_SESSION['username'] = $username;

sendResponse(201, 'Registration successful', [
    'username' => $username,
    'chat_id' => $chatid,
    'account_id' => $last_id,
    'successMessage' => 'We sent you a confirmation mail. Click on the link in the email to verify your email address. Kindly check your Spam folder for this email if it does not appear in your inbox',
    'accountOfficer' => 'Your account officer is Ms Gift (+234 904 984 5019)'
]);
?>