var x = 0;
var x2 = screen.availWidth;
var imgCave;
function loadBackground(){
    imgCave = new Image();
    imgCave.src="assets/cavebg.png";
}
function drawCaveBackground(){
    var speed = 1.25;
    x -= speed;  
    if (Math.abs(x) + screen.availWidth + speed > imgCave.width){
        x2 -= speed;
        ctx.drawImage(imgCave, x2, 0);
        if (x2 <= 0){
            x = 0;
            x2 = screen.availWidth;
        };
    };
    ctx.drawImage(imgCave, x, 0);
}
set_size_variables();