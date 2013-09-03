/*
 * all of the interactive interface elements are made here, most of these are
 * expirimental and subject to change
 */
function Interface(index, colorProfile) {
    this.index = index;
    this.colorProfile = colorProfile;
}

/*
 * shows the loader 
 */
Interface.prototype.showLoader = function() {
    // remove current class from loader
    var current = $("#loader-" + this.index).attr('class');
    
    // adds a new visible class, so loader is visible
    $("#loader-" + this.index).removeClass(current).addClass("visible");
}

/*
 * hides the loader 
 */
Interface.prototype.hideLoader = function() {
    // remove current class from loader
    var current = $("#loader-" + this.index).attr('class');

    // adds a new visible class, so loader is visible
    $("#loader-" + this.index).removeClass(current).addClass("hidden");
}

/*
 * adds the active class to the clicked preview button
 * for unique css properties when a preview-button is active
 */
Interface.prototype.addActiveClass = function() {
    // checks for the active class and removes it
    if($(".active")) {
        $(".active").removeClass("active");
    }
    
    // adds a new active class
    $("#preview-button-" + this.index).addClass("active");
}

Interface.prototype.changeColorProfile = function(element) {
    // if there is a current class it will be removed
    var current = $(element).attr('class');
    
    if(element !== "#header") {
        $(element).removeClass(current).addClass(
            "text-" + this.colorProfile
        );
    } else {
        $(element).removeClass(current).addClass(
            "header-" + this.colorProfile
        );
    }
}


/*
 * function that completely pulls apart the string and makes gives every word a
 * paragraph tag so i can highlight different words
 * 
 * also makes sure all the div sections are preserved
 * 
 * TODO: if i want this to happen it should happen in the model......
 * ^ doen dmv splitten en overnieuw in elkaar zetten
 */
// function makeSeperateTags(str) {
    // var firstIndex;
    // var secondIndex;
//     
    // // strings
    // var divs = "";
    // var movieStr = "";
//     
    // // check for div sections at the start and remove them from the string
    // if(str.indexOf("<div") != -1) {
        // secondIndex = str.lastIndexOf("</div>") + 6;
        // divs = str.substr(0, secondIndex);
        // str = str.slice(secondIndex, str.length);
    // }
//     
    // firstIndex = str.indexOf("<iframe");
    // if(firstIndex != -1) {
        // secondIndex = str.lastIndexOf("</a>") + 4;
        // movieStr = str.substr(firstIndex, secondIndex);
        // str = str.slice(0, firstIndex);
        // str = str + "</p>"
    // }
// 
    // str = str.replace(/ /g, "\ </p><p>");
//     
//     
    // var bigString = divs + str + movieStr;
    // return bigString;
// }