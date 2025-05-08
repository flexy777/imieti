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
if (!isset($_SESSION['last_payment_request_time'])) {
    $_SESSION['last_payment_request_time'] = time();
} elseif (time() - $_SESSION['last_payment_request_time'] < 2) {
    http_response_code(429);
    echo json_encode(['status' => 429, 'message' => 'Too Many Requests']);
    exit();
}
$_SESSION['last_payment_request_time'] = time();

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
$required_fields = ['verification', 'amount', 'email', 'username'];
foreach ($required_fields as $field) {
    if (!isset($input[$field]) || empty(trim($input[$field]))) {
        sendResponse(400, "Missing or empty required field: $field");
    }
}

// Input validation
$verification = filter_var($input['verification'], FILTER_SANITIZE_STRING);
$amount = filter_var($input['amount'], FILTER_VALIDATE_FLOAT);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$username = filter_var($input['username'], FILTER_SANITIZE_STRING);
$coupon = isset($input['coupon']) ? filter_var($input['coupon'], FILTER_SANITIZE_STRING) : '';

if (!$amount || !$email || !$verification || !$username) {
    sendResponse(400, 'Invalid input format for verification, amount, email, or username');
}

// Validate coupon format (if provided, alphanumeric, 5-20 characters)
if (!empty($coupon) && !preg_match('/^[a-zA-Z0-9]{5,20}$/', $coupon)) {
    sendResponse(400, 'Invalid coupon format: must be 5-20 alphanumeric characters');
}

// Handle coupon if provided
if (!empty($coupon)) {
    $stmt = $conn->prepare("SELECT * FROM coupons WHERE code = ? AND username = ''");
    $stmt->bind_param("s", $coupon);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $stmt->close();
        $stmt = $conn->prepare("UPDATE accounts SET accountstatus = 'paid', username = ? WHERE verify = ?");
        $stmt->bind_param("ss", $username, $verification);
        if ($stmt->execute()) {
            $stmt->close();
            // Set session for payment status
            $_SESSION['payment_status'] = 'free';
            sendResponse(200, 'Account activated with coupon', ['status' => 'free']);
        } else {
            $stmt->close();
            sendResponse(500, 'Failed to activate account with coupon');
        }
    } else {
        $stmt->close();
        sendResponse(400, 'Invalid or used coupon code');
    }
}

// Initialize payment
$customer_email = $email;
$currency = "NGN";
$txref = $verification;
$PBFPubKey = "FLWPUBK-158062c3648b9b2c9ac56d389e5ef6bc-X";
$redirect_url = "https://imieti.com.ng/returnPaidMembership.php?ref=$txref";
$payment_plan = "pass the plan id"; // For recurring payments

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => json_encode([
        'amount' => $amount,
        'customer_email' => $customer_email,
        'currency' => $currency,
        'txref' => $txref,
        'PBFPubKey' => $PBFPubKey,
        'redirect_url' => $redirect_url,
        'payment_plan' => $payment_plan
    ], JSON_THROW_ON_ERROR),
    CURLOPT_HTTPHEADER => [
        "content-type: application/json",
        "cache-control: no-cache"
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
    sendResponse(500, 'Failed to contact payment API', ['error' => $err]);
}

$transaction = json_decode($response, true);

if (!isset($transaction['data']['link'])) {
    sendResponse(500, 'Payment API error', ['error' => $transaction['message'] ?? 'Unknown error']);
}

// Set session for payment initiation
$_SESSION['payment_ref'] = $txref;

sendResponse(200, 'Payment initiation successful', ['payment_link' => $transaction['data']['link']]);
?>