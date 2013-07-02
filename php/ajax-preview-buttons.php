<?php
/* 
 * retrieves the preview buttons out of the database 
 */
include_once "database.php";

$db = __connectDatabase();
$result = $db->query("SELECT id color-profile header FROM subject");

print_r($result);

// empty space div is necessary for dynamic styling purposes
echo "<div class='empty-space'></div>";

// every database row is a subject represented by a preview button
while ($row = $result->fetch_assoc()) {
	
	// the html button that appears on the page as "preview button"
	echo
	"<button 
        class=\"preview-button\" 
        id=\"preview-button-" . (string) $row["id"] . "\"
        
		onclick=\"
		    onClick(" . $row["id"] . ", '" . $row["color_profile"] . "');
		    showLoader(" . $row["id"] . ");
        \"
    >
	<img id='loader-" . $row["id"] . "' class=\"hidden\" src=\"img/loading.gif\">
	<h2>" . $row["header"] . "</h2>
	</button>";
}
?>