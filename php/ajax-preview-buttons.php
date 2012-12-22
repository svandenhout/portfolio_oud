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
	"<div 
        class=\"preview-block\" 
        id=\"preview-block-" . (string) $count . "\"
        
		onclick=\"
    		getBackground(" . $count . "); 
    		getHeader(" . $count . ");
    		getMainText(" . $count . ");
        \"
    >
     
    <script>
    
    </script>
	
	<h2>" . $row["title"] . "</h2>
	</div>";
}
?>