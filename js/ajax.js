//ajaxrequest function to pass the argument for the type/amount of data i want (preview or full)
function ajaxRequest(type) {
	var xmlhttp;
	var contentDiv;
	
	//gives the name of the div where the content is supposed to be
	if(type = "preview") {
		contentDiv = "right-block";
	}else if(type = "full"){
		contentDiv = "left-block";
	}
	
	// code for IE7+, Firefox, Chrome, Opera, Safari
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
		
	// code for IE6, IE5
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function() {
	  	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    	document.getElementById(contentDiv).innerHTML=xmlhttp.responseText;
	    }
  	}
  	
	xmlhttp.open("GET","php/database.php/?type=" + type,true);
	xmlhttp.send();
}