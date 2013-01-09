/*
 * constructor of Ajax()
 */
function Ajax() {
    this.xmlhttp;
}

Ajax.prototype.getXMLhttpObject = function() {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
        
    // code for IE6, IE5
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    this.xmlhttp = xmlhttp;
}

/*
 * ajaxrequest function to pass the argument for the datatype
 */
Ajax.prototype.request = function(actions, callback) {
    //initiate all function variables
    var type = actions.type,
        index = actions.index;
        
    //returns the right response to the right element
    this.xmlhttp.onload = function() {
        if(callback) {
             callback(this.responseText);
        }
    }
    
    // the php file is named after the type of content
    // requested with "ajax-" in front of it
    this.xmlhttp.open(
        "GET",
        "php/ajax-" + type + ".php/?type=" + type + "&index=" + index,
        true
    );
    
    this.xmlhttp.send();
}