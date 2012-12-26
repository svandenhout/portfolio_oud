<?php
/*
 * retrieves the main written content out of the database:
 * the intro and body of the text I wrote about a project
 */
 
include_once "database.php";

$db = __connectDatabase();
$result = 
    $db->query("SELECT * FROM subject WHERE (id='" . $_GET['index'] . "')");
$row = $result->fetch_assoc();

//TODO: echo afmaken
echo "<div class='empty-space'></div>";
echo "<div class='empty-space'></div>";
echo "<div id='text-intro-box'><p>" . $row['text_intro'] . "</p></div>"; 
echo "<div id='text-body-box'><p>" . $row['text_body'] . "</p></div>";
?>