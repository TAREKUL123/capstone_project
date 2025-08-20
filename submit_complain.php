<?php
// submit_complain.php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "onusiloni"; 

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$chapter = $_POST['chapter'];
$topic = $_POST['topic'];
$experiment = $_POST['experiment'];
$email = $_POST['email'];
$complain = $_POST['complain'];

$sql = "INSERT INTO complaints (chapter, topic, experiment, email, complain)
        VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $chapter, $topic, $experiment, $email, $complain);

if ($stmt->execute()) {
  echo "অভিযোগ সফলভাবে জমা হয়েছে!";
} else {
  echo "সমস্যা হয়েছে: " . $conn->error;
}

$conn->close();
?>
