<?php 
include_once "settings.php";

//connects to the database and returns the database object
function __connectDatabase() {
	$mysqli = mysqli_connect(DB_URL, DB_USERNAME, DB_PASSWORD, DB_NAME);
	
	if ($mysqli->connect_errno) {
   		echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	}
	
	return $mysqli;
}
?>