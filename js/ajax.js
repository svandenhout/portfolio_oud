//ajaxrequest function to pass the argument for the type/amount of data i want (preview or full)
function ajaxRequest(type, index) {
	var xmlhttp;
	var contentDiv;
	
	// code for IE7+, Firefox, Chrome, Opera, Safari
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
		
	// code for IE6, IE5
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//TODO build system with a php page for every ajax call
	//returns the right response to the right element
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			switch(type) {
			case 'preview-buttons':
			document.getElementById("inner-right-half").innerHTML = xmlhttp.responseText;
			break;
			case 'background':
			document.getElementById("container").style.backgroundImage = 'url(' + xmlhttp.responseText + ')';
			break;
			case 'main-text':
			document.getElementById("inner-left-half").innerHTML = xmlhttp.responseText;
			break;
			case 'header':
			document.getElementById("header").innerHTML = xmlhttp.responseText;
			break;
			}
		}
	}
  	
  	//the php file is named after the type of content requested with ajax- in front of it
	xmlhttp.open("GET","php/ajax-" + type + ".php/?type=" + type + "&index=" + index ,true);
	xmlhttp.send();
}