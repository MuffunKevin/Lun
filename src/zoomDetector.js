// This function returns false if the browser is not zoomed.
// Otherwise it returns the zoom ratio.
function zoomDetector() {
    //Firefox
    if(window.devicePixelRatio){
        return window.devicePixelRatio !== 1 ? window.devicePixelRatio : false;
    }
    // IE8+
    if(screen.deviceXDPI){
        return screen.deviceXDPI !== screen.logicalXDPI ? screen.deviceXDPI / screen.logicalXDPI : false;
    }
    //Webkit
    if(window.innerWidth !== window.outerWidth) {
        return window.outerWidth / window.innerWidth;
    }
    return false;
}