<?php
// login.php

// Enable CORS for frontend-backend communication
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Read JSON body from request
$data = json_decode(file_get_contents('php://input'), true);

// Validate JSON input
if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Invalid input data received']);
    exit;
}

// Extract and sanitize inputs
$email = trim($data['email'] ?? '');
$password = $data['password'] ?? '';

// Basic validation
if (!$email || !$password) {
    echo json_encode(['success' => false, 'message' => 'ইমেইল এবং পাসওয়ার্ড দিন']);
    exit;
}

// DB connection config
$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbname = "onusiloni";

// Create connection
$conn = new mysqli($servername, $username, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'ডাটাবেস কানেকশনে সমস্যা: ' . $conn->connect_error]);
    exit;
}

// Fetch user by email
$sql = "SELECT id, name, email, password, role, institution FROM registration WHERE email = ?";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'ইউজার চেক করতে ব্যর্থ: ' . $conn->error]);
    $conn->close();
    exit;
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    // ✅ Password match
    echo json_encode([
        'success' => true,
        'message' => 'লগইন সফল হয়েছে',
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'role' => $user['role'],
            'institution' => $user['institution']
        ]
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'ইমেইল অথবা পাসওয়ার্ড সঠিক নয়']);
}

$stmt->close();
$conn->close();
?>
