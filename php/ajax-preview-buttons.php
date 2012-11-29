<?php
/* 
 * retrieves the preview buttons out of the database 
 */
 
include_once "database.php";

$db = __connectDatabase();
$result = $db->query("SELECT * FROM subject");
$count = 0;

//empty space div is necessary for dynamic styling purposes
//TODO: find neater sollution
echo "<div class='empty-space'></div>";

//every database row is a subject represented by a preview button
while ($row = $result->fetch_assoc()) {
	$count++;
	
	//the html block that appears on the page as "preview button"
	echo 
	"<div class=\"preview-block\" 
		onclick=\"
		ajaxRequest('background', " . $count . "); 
		ajaxRequest('full-text', " . $count . ");
		ajaxRequest('header', " . $count . ");
	\">
	<h2>" . $row["title"] . "</h2> 
	
	</div>";
}
?>

