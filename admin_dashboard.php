<?php
// admin_dashboard.php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "root", "", "onusiloni");
if ($conn->connect_error) {
  die(json_encode(["error" => "Connection failed"]));
}

// Fetch Registration data
$registration_sql = "SELECT id, name, role, institution FROM registration";
$registration_result = $conn->query($registration_sql);
$registrations = [];
while($row = $registration_result->fetch_assoc()) {
  $registrations[] = $row;
}

// Fetch Complaint data
$complaints_sql = "SELECT * FROM complaints ORDER BY id DESC";
$complaints_result = $conn->query($complaints_sql);
$complaints = [];
while($row = $complaints_result->fetch_assoc()) {
  $complaints[] = $row;
}

echo json_encode([
  "registrations" => $registrations,
  "complaints" => $complaints
]);

$conn->close();
?>
