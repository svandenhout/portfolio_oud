<?php
/*
 * retrieves the main text body from the database
 */
 
include_once "database.php";

$db = __connectDatabase();
$result = $db->query(
    "SELECT * FROM subject WHERE (id='" . $_GET['index'] . "')"
);
$row = $result->fetch_assoc();

echo "<p>" . $row['main-text'] . "</p>";
?>
