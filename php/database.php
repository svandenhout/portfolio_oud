<?php 
include_once "settings.php";

previewContent();

// if($_GET['type'] == "preview") {
		// preview();
// }

	
//connects to the database
function __connectDatabase() {
	$mysqli = mysqli_connect(DB_URL, DB_USERNAME, DB_PASSWORD, DB_NAME);
	
	if ($mysqli->connect_errno) {
   		echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	}
	
	$result = $mysqli->query("SELECT * FROM subject");
	$row = $result->fetch_assoc();
	
	return $row;
}

//gets the preview out of the database
function previewContent() {
	$db = __connectDatabase();
	//print_r($db) ;
	echo $db["title"];
	echo $db["text_intro"];
}

//gets the full story out of the database
function fullContent() {
	
}
?>