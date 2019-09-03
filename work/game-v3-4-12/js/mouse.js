function fullScreen() {
    var element = document.documentElement;
    //IE 10
    if (window.ActiveXObject) {
        var WsShell = new ActiveXObject('WScript.Shell')
        WsShell.SendKeys('{F11}');
    }
    //HTML W3C 
    else if (element.requestFullScreen) {
        element.requestFullScreen();
    }
    //IE11  
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)  
    else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
    // Firefox (works in nightly)  
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
}