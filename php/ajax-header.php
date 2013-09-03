<?php
/*
 * retrieves the header out of the database (the project title)
 */
 
include_once "database.php";

$db = __connectDatabase();
$result = $db->query(
    "SELECT * FROM subject WHERE (id='" . $_GET['index'] . "')"
);
    
$row = $result->fetch_assoc();
echo "<h1>" . $row['header'] . "</h1>";

?>