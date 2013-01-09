function onLoad() {
    var content = new Content();
    content.getPreviewButtons();
    content.getContent(content, 6, "dark");
}

function onClick(index, colorProfile) {
    var content = new Content();
    content.getContent(content ,index, colorProfile);
}

function showLoader(index) {
    dynamicInterface = new Interface(index);
    dynamicInterface.showLoader();
}
