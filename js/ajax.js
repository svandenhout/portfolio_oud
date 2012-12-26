/*
 * retrieves the preview buttons from the ajax request
 */
function getPreviewButtons() {
    request({type: "preview-buttons"}, function() {
        document.getElementById("preview-buttons").innerHTML = this;
    })
}

/*
 * adds the active class to the clicked preview button
 * for unique css properties when a preview-button is active
 */
function addActiveClass(id) {
    // checks for the active class and removes it
    if($(".active")) {
        $(".active").removeClass("active");
    }
    
    // adds a new active class
    $("#" + id).addClass("active");
}

/*
 * retrieves the background from the ajax request
 */
function getBackground(index) {
        request({type: "background", index: index}, function() {
        document.getElementById("container").style.backgroundImage =
            'url(' + this + ')'
    })
}

/*
 * retrieves the header from the ajax request
 */
function getHeader(index) {
    request({type: "header", index: index}, function() {
        document.getElementById("header").innerHTML = this;
    })
}

/*
 * retrieves the main text from the ajax request, also changes the 
 * color profile to fit the active theme.
 */
function getMainText(index, profile) {
    request({type: "main-text", index: index}, function() {
        document.getElementById("main-text").innerHTML = this;
        
        // change the color profile 
        if(profile) {
            // if there is a current class it will be removed
            var current = $("h2").attr('class');
            
            // p tag is used for all the project content
            $("p").removeClass(current).addClass(profile);
            
            // h2 is used for all the preview buttons
            $("h2").removeClass(current).addClass(profile);
        }
    })
}

/*
 * ajaxrequest function to pass the argument for the datatype
 * i want
 */
function request(actions, callback) {
    
    //initiate alll function variables
    var type = actions.type,
        index = actions.index,
        xmlhttp,
        contentDiv;
    
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
            if(callback) {
                callback.call(xmlhttp.responseText);
            }
        }
    }
    
    // the php file is named after the type of content
    // requested with "ajax-" in front of it
    xmlhttp.open(
        "GET",
        "php/ajax-" + type + ".php/?type=" + type + "&index=" + index,
        true
    );
    
    xmlhttp.send();
}