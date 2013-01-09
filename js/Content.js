/*
 * the constructor
 */
function Content() {
    this.background = null;
    this.header = null;
    this.introText = null;
    this.mainText = null; 
}

/*
 * retrieves the preview buttons from the ajax request
 * previewbuttons are written to the page immediately unlike other elements 
 * which are stored inside an object first
 */
Content.prototype.getPreviewButtons = function() {
    var ajax = new Ajax();
    ajax.getXMLhttpObject();
    ajax.request({type: "preview-buttons"}, function(response) {
        document.getElementById("preview-buttons").innerHTML = response;
    });
}

/*
 * retrieves the content from the database via an ajax call
 * the method checks if all of the other content is loaded via checkContent, 
 * draws the content and then builds all of the interactive elements of the 
 * interface.
 */

Content.prototype.getContent = function(content, index, colorprofile) {
    
    var loaded = false;
    
    var ajax = new Ajax();
    ajax.getXMLhttpObject();
    ajax.request({type: "background", index: index}, function(response) {
        content.background = response;
        loaded = content.checkContent();
        if(loaded) {
            content.drawPage(content);
            content.buildDynamicInterface(index, colorprofile);
        }
    });
    
    ajax.getXMLhttpObject();
    ajax.request({type: "header", index: index}, function(response) {
        content.header = response;
        loaded = content.checkContent();
        if(loaded) {
            content.drawPage(content);
            content.buildDynamicInterface(index, colorprofile);
        }
    });
    
    ajax.getXMLhttpObject();
    ajax.request({type: "intro-text", index: index}, function(response) {
        content.introText = response;
        loaded = content.checkContent();
        if(loaded) {
            content.drawPage(content);
            content.buildDynamicInterface(index, colorprofile);
        }
    });
    
    ajax.getXMLhttpObject();
    ajax.request({type: "main-text", index: index}, function(response) {
        content.mainText = response;
        loaded = content.checkContent();
        if(loaded) {
            content.drawPage(content);
            content.buildDynamicInterface(index, colorprofile);
        }
    });
}

Content.prototype.checkContent = function(content) {
    if(
        this.background !== null &&
        this.header !== null &&
        this.introText !== null &&
        this.mainText !== null
    ) {
        return true;
    }else {
        return false;
    }
}

Content.prototype.drawPage = function(content) {
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

Content.prototype.buildDynamicInterface = function(index, colorProfile) {
    var dynamicInterface = new Interface(index, colorProfile);
    
    $("p").mouseover(function() {
        $(this).toggleClass("mouseover");
    }).mouseout(function() {
        $(this).toggleClass("mouseover");
    });
    
    if(colorProfile) {
        dynamicInterface.changeColorProfile("p");
        dynamicInterface.changeColorProfile("h2");
        dynamicInterface.changeColorProfile("a");
        dynamicInterface.changeColorProfile("#header");
    }
    
    // add the active class to the preview button
    dynamicInterface.addActiveClass(index);
    dynamicInterface.hideLoader(index);
}