//ajaxrequest function to pass the argument for the type/amount of data i want (preview or full)
function ajaxRequest(type) {
	var xmlhttp;
	
	// code for IE7+, Firefox, Chrome, Opera, Safari
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
		
	// code for IE6, IE5
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function() {
	  	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	  		//console.log(xmlhttp.responseText);
	    	document.getElementById("right-block").innerHTML=xmlhttp.responseText;
	    }
  	}
  	
	xmlhttp.open("GET","php/database.php/?type=" + type,true);
	xmlhttp.send();
}