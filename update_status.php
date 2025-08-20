<?php
// update_status.php

$conn = new mysqli("localhost", "root", "", "onusiloni");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$id = $_POST['id'];
$status = $_POST['status'];

$valid_statuses = ['new', 'pending', 'resolved'];
if (!in_array($status, $valid_statuses)) {
  die("Invalid status");
}

$sql = "UPDATE complaints SET status=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $status, $id);

if ($stmt->execute()) {
  echo "Status updated successfully!";
} else {
  echo "Error updating status.";
}

$conn->close();
?>
