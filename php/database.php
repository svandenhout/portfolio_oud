<?php 
include_once "settings.php";

// the type of content requested from the page
switch ($_GET['type']) {
	case 'preview':
	previewContent();
	break;
	case 'full':
	fullContent();
	break;
}

	
//connects to the database and returns the database object
function __connectDatabase() {
	$mysqli = mysqli_connect(DB_URL, DB_USERNAME, DB_PASSWORD, DB_NAME);
	
	if ($mysqli->connect_errno) {
   		echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	}
	
	return $mysqli;
}

//gets the preview out of the database
function previewContent() {
	$db = __connectDatabase();
	$result = $db->query("SELECT * FROM subject");
	while ($row = $result->fetch_assoc()) {
		echo 	"<div class='preview-block'> 
				<div class='title'>".$row['title']."</div>
				
				</div>";
	}
}

//gets the full page out of the database
function fullContent() {
	$db = __connectDatabase();
}
?>