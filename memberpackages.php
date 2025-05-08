<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

session_start();

function sendResponse($status, $message, $data = []) {
    http_response_code($status);
    echo json_encode([
        'status' => $status,
        'message' => $message,
        'data' => $data
    ], JSON_THROW_ON_ERROR);
    exit();
}

// Rate limiting (basic example using session)
if (!isset($_SESSION['last_packages_request_time'])) {
    $_SESSION['last_packages_request_time'] = time();
} elseif (time() - $_SESSION['last_packages_request_time'] < 2) {
    sendResponse(429, 'Too Many Requests');
}
$_SESSION['last_packages_request_time'] = time();

// Validate CSRF token
$csrf_token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
if (!hash_equals(session_id(), $csrf_token)) {
    sendResponse(403, 'Invalid CSRF token');
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendResponse(405, 'Method Not Allowed');
}

// Define packages data
$packages = [
    [
        'name' => 'Basic Registration Package',
        'acctype' => 1,
        'price' => '₦10,000',
        'features' => [
            'Clients hire you directly from the website',
            'We do not call you for jobs',
            'You get paid ₦100 when your profile is visited',
            'You get paid ₦100 when your Diary Sessions is visited',
            'You get paid minimum of ₦20,000 per job we call you for'
        ]
    ],
    [
        'name' => 'Starter Registration Package',
        'acctype' => 2,
        'price' => '₦50,000/Year',
        'features' => [
            'Clients hire you directly from the website',
            'We call you for jobs',
            'You get paid ₦250 each time someone visits your profile',
            'You get paid ₦500 each time someone visits your diary room',
            'You get paid minimum of ₦50,000 per job we call you for'
        ]
    ],
    [
        'name' => 'Business Registration Package',
        'acctype' => 3,
        'price' => '₦100,000/Year',
        'recommended' => true,
        'features' => [
            'Clients hire you directly from the website',
            'We call you for jobs',
            'You can work as a Brand Ambassador for local and international firms',
            'You get paid ₦2,000 each time someone visits your profile',
            'You get paid ₦4,000 each time someone visits your diary room',
            'Choose your payment up to a maximum of ₦1,000,000',
            'Get recommended to prospective clients'
        ]
    ],
    [
        'name' => 'Ultimate Registration Package',
        'acctype' => 4,
        'price' => '₦300,000/Year',
        'features' => [
            'Everything in Business Package',
            'We provide you with an agent to manage your career',
            'Set your Fee per Profile View (Up to ₦10,000)',
            'Choose your Payment per Job/Service.',
            'Get recommended to prospective clients',
            'Get featured on all digital media'
        ]
    ]
];

// Generate package selection URLs (mimicking the PHP logic in the HTML)
$ref = filter_input(INPUT_GET, 'ref', FILTER_SANITIZE_STRING) ?? '';
$imietian = filter_input(INPUT_GET, 'imietian', FILTER_SANITIZE_STRING) ?? '';

foreach ($packages as &$package) {
    if (!empty($ref)) {
        $package['selection_url'] = "registerNew.php?acctype={$package['acctype']}&ref=" . urlencode($ref);
    } elseif (!empty($imietian)) {
        $package['selection_url'] = "registerNew.php?acctype={$package['acctype']}&imietian=" . urlencode($imietian);
    } else {
        $package['selection_url'] = "registerNew.php?acctype={$package['acctype']}";
    }
}
unset($package);

sendResponse(200, 'Packages retrieved successfully', ['packages' => $packages]);
?>