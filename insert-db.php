<?php 
include_once "php/database.php";

$db = __connectDatabase();
$result = $db->query("SELECT * FROM login");

while($row = $result->fetch_assoc()) {
    print_r($_POST);
    if($_POST[name] != $row[name] && $_POST[password] != $row[password]) {
        continue;
    }else {
        echo 
        "<form name='submit' action='submit.php' method='post'>
            <h2>input INPUT</h2></br>
            THEMA: <input type='text' name='color-profile'/><br>
            TITEL: <input type='text' name='title'/></br>
            AFBEELDING: <input type='file' name='image-large'/></br>
            INTRO-TEXT: <input type='text' name='text-intro'/></br>
            INTRO-TEXT: <input type='text' name='text-body'/></br>
            
            submit: <input type='submit' value='submit'/>
        </form>";
    }
}
?>