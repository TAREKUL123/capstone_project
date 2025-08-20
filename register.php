<?php
// register.php

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
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$password = $data['password'] ?? '';
$confirmPassword = $data['confirmPassword'] ?? '';
$institution = trim($data['institution'] ?? '');
$role = $data['role'] ?? '';

// Basic validation
if (!$name || !$email || !$password || !$confirmPassword || !$institution || !$role) {
    echo json_encode(['success' => false, 'message' => 'সব ফিল্ড পূরণ করুন']);
    exit;
}

if ($password !== $confirmPassword) {
    echo json_encode(['success' => false, 'message' => 'পাসওয়ার্ড মিলছে না']);
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

// Check if email already exists
$sql_check = "SELECT id FROM registration WHERE email = ?";
$stmt = $conn->prepare($sql_check);
if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'ইমেইল চেক করতে ব্যর্থ: ' . $conn->error]);
    $conn->close();
    exit;
}

$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'ইমেইল আগে থেকেই নিবন্ধিত']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert into database
$sql_insert = "INSERT INTO registration (name, email, password, institution, role) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql_insert);

if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'ইনসার্ট প্রিপেয়ার করতে ব্যর্থ: ' . $conn->error]);
    $conn->close();
    exit;
}

$stmt->bind_param("sssss", $name, $email, $hashed_password, $institution, $role);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'রেজিস্ট্রেশন সফল হয়েছে']);
} else {
    echo json_encode(['success' => false, 'message' => 'রেজিস্ট্রেশন ব্যর্থ হয়েছে: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
