function animate(element) {
    var ani1 = {type: 'fontSize', from: 12, to: 72, step: 1, delay: 20};
    $fx(element).fxAdd(ani1).fxRun();
}