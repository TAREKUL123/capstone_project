<?php
// counts.php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "onusiloni"; 

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Count institutions (unique institution)
$institution_sql = "SELECT COUNT(DISTINCT institution) AS total_institution FROM registration";
$institution_result = $conn->query($institution_sql);
$institution = $institution_result->fetch_assoc()['total_institution'];

// Count teachers
$teacher_sql = "SELECT COUNT(*) AS total_teacher FROM registration WHERE role = 'teacher'";
$teacher_result = $conn->query($teacher_sql);
$teacher = $teacher_result->fetch_assoc()['total_teacher'];

// Count students
$student_sql = "SELECT COUNT(*) AS total_student FROM registration WHERE role = 'student'";
$student_result = $conn->query($student_sql);
$student = $student_result->fetch_assoc()['total_student'];

// Count total members
$total_sql = "SELECT COUNT(*) AS total_member FROM registration";
$total_result = $conn->query($total_sql);
$total = $total_result->fetch_assoc()['total_member'];

// Send JSON response
echo json_encode([
  "institution" => $institution,
  "teacher" => $teacher,
  "student" => $student,
  "member" => $total
]);

$conn->close();
?>
