function onLoad() {
    var content = new Content();
    content.drawPreviewButtons();
    content.getContent(content, 1, "light");
}

function onClick(index, colorProfile) {
    var content = new Content();
    content.getContent(content ,index, colorProfile);
}

function showLoader(index) {
    dynamicInterface = new Interface(index);
    dynamicInterface.showLoader();
}
