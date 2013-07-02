<?php
/*
 * retrieves video embed code from the database 
 * TODO: give the ability to upload my own mp4 video's
 */
include_once "database.php";

$db = __connectDatabase();
$result = 
    $db->query("SELECT video FROM subject WHERE (id='" . $_GET['index'] . "')");
$row = $result->fetch_assoc();
    
echo $row['video'];
?>