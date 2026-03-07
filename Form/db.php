<?php
$host = "sql108.infinityfree.com";
$user = "if0_41326950";
$password = "bsmTeVSWDE4CwY";
$dbname = "if0_41326950_feedback";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>