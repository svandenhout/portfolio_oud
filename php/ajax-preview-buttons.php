<?php
/* 
 * retrieves the preview buttons out of the database 
 */
include_once "database.php";

$db = __connectDatabase();
$result = $db->query("SELECT * FROM subject");
$count = 0;

// empty space div is necessary for dynamic styling purposes
// TODO: find neater sollution
echo "<div class='empty-space'></div>";

// every database row is a subject represented by a preview button
while ($row = $result->fetch_assoc()) {
	$count++;
	
	// the html button that appears on the page as "preview button"
	echo 
	"<button 
        class=\"preview-button\" 
        id=\"preview-button-" . (string) $count . "\"
        
		onclick=\"
		    getContent(" . $count . ", '" . $row["color_profile"] . "');
		    showLoader(" . $count . ");
        \"
    >
	<img id='loader-" . $count . "' class=\"hidden\" src=\"img/loading.gif\">
	<h2>" . $row["title"] . "</h2>
	</button>";
}
?>