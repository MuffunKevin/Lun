// This function returns false if the browser is not zoomed.
// Otherwise it returns the zoom ratio.
function zoomDetector() {
    if(screen.deviceXDPI){
        return screen.deviceXDPI !== screen.logicalXDPI ? screen.logicalXDPI / screen.deviceXDPI : false;
    }
    if(window.innerWidth !== window.outerWidth) {
        return window.innerWidth / window.outerWidth;
    }
    return false;
}