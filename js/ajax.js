/*
 * retrieves the preview buttons from the ajax request
 * i also use this function to retrieve the first page i want people to see
 */
function getPreviewButtons() {
    request({type: "preview-buttons"}, function(response) {
        document.getElementById("preview-buttons").innerHTML = response;
    });
    
    // get the content for the first page
    getContent(1, "dark");
}

function getContent(index, colorprofile) {
    var content = {}
    
    // request({type: "background", index: index}, function(response) {
        // // document.getElementById("container").style.backgroundImage =
            // // 'url(' + response + ')'
        // loadedContent.background = response;
        // // if(_.size(loadedContent))
        // if(_.size(loadedContent) === 4) {
            // fillPage(loadedContent);
        // }
    // });
   
    request({type: "background", index: index}, function(response) {
        content.background = response;
        if(_.size(content) === 4) {
            fillPage(content);
            buildGraphicInteractions(index, colorprofile)
        }
    });
    
    request({type: "header", index: index}, function(response) {
        content.header = response;
        if(_.size(content) === 4) {
            fillPage(content);
            buildGraphicInteractions(index, colorprofile)
        }
    });
    
    request({type: "intro-text", index: index}, function(response) {
        content.introText = response;
        if(_.size(content) === 4) {
            fillPage(content);
            buildGraphicInteractions(index, colorprofile)
        }
    });
    
    request({type: "main-text", index: index}, function(response) {
        content.mainText = response;
        if(_.size(content) === 4) {
            fillPage(content);
            buildGraphicInteractions(index, colorprofile)
        }
    });
}

function fillPage(content) {
    var string;
    
    // background
    document.getElementById("container").style.backgroundImage =
            'url(' + content.background + ')'
    
    // header        
    document.getElementById("header").innerHTML = content.header;
    
    // intro-text
    string = makeSeperateTags(content.introText);
    document.getElementById("intro-text").innerHTML = string;
    
    // main-text
    string = makeSeperateTags(content.mainText);
    document.getElementById("main-text").innerHTML = string;
}

/*
 * all of the interactive interface functionallity is added here
 */
function buildGraphicInteractions(index, colorProfile) {
   
    $("p").mouseover(function() {
        $(this).toggleClass("mouseover");
    }).mouseout(function() {
        $(this).toggleClass("mouseover");
    });
    
    // TODO: change stuff when everything is loaded
    if(colorProfile) {
        changeColorProfile("p", colorProfile);
        changeColorProfile("h2", colorProfile);
        changeColorProfile("a", colorProfile);
        changeColorProfile("#header", colorProfile);
    }
    
    // add the active class to the preview button
    addActiveClass("preview-button-" + index);
    hideLoader(index);
}

/*
 * retrieves the background from the ajax request
 */
function getBackground(index) {
    request({type: "background", index: index}, function() {
        document.getElementById("container").style.backgroundImage =
            'url(' + this + ')'
    });
}

/*
 * retrieves the header from the ajax request
 */
function getHeader(index, colorProfile) {
    request({type: "header", index: index}, function() {
        document.getElementById("header").innerHTML = this;
        
        if(colorProfile) {
            
        }
    });
}

function getIntroText(index, colorProfile) {
    request({type: "intro-text", index: index}, function() {
        var string = makeSeperateTags(this);
        document.getElementById("intro-text").innerHTML = string;
    });
}

/*
 * retrieves the main text from the ajax request, also changes the 
 * color profile to fit the active theme.
 */
function getMainText(index, colorProfile) {
    var mainText = "";
    
    request({type: "main-text", index: index}, function() {
        var string = makeSeperateTags(this);
        document.getElementById("main-text").innerHTML = string;
        
        /*
         * mouseover tekenfunctionaliteit is gaaf
         */
        $("p").mouseover(function() {
            $(this).toggleClass("mouseover");
        }).mouseout(function() {
            $(this).toggleClass("mouseover");
        });
        
        // TODO: change stuff when everything is loaded
        if(colorProfile) {
            changeColorProfile("p", colorProfile);
            changeColorProfile("h2", colorProfile);
            changeColorProfile("a", colorProfile);
        }
        
        // add the active class to the preview button
        addActiveClass("preview-button-" + index);
        hideLoader(index);
        
        mainText = this;
    });
    if(mainText != "") {
    console.log("2");
    return mainText;
    }
}

/*
 * ajaxrequest function to pass the argument for the datatype
 */
function request(actions, callback) {
    //initiate all function variables
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
    
    //returns the right response to the right element
    xmlhttp.onload = function() {
        if(callback) {
             callback(xmlhttp.responseText);
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