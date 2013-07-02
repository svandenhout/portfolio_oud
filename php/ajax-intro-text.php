<?php
/*
 * retrieves the intro text from the database
 */
 
include_once "database.php";

$db = __connectDatabase();
$result = $db->query(
    "SELECT intro-text FROM subject WHERE (id='" . $_GET['index'] . "')"
);
$row = $result->fetch_assoc();

//TODO: echo afmaken
echo "<div class='empty-space'></div>";
echo "<div class='empty-space'></div>";
echo "<p>" . $row['intro-text'] . "</p>";
?>