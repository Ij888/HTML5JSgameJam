var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

imgIjFace = new Image();
imgIjFace.src = "images/8btf.png";
imgIjFace.addEventListener("load", init, false);

var requestAnimFrame = 
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback){
                window.setTimeout(callback, 1000/60);
            };
    
function init() {
    requestAnimFrame(update);
}

function update(){
    context.fillRect( 10, 10, 40, 380, "#000000")
}

