<?php
/*
 * retrieves the background image url out of the database
 */
 
include_once "database.php";

$db = __connectDatabase();
$result = $db->query(
    "SELECT background FROM subject WHERE (id='" . $_GET['index'] . "')"
);
    
$row = $result->fetch_assoc();
echo $row['background'];
?>