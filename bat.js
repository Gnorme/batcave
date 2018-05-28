var imgBat;
var batX = 20;

var dead;

var maxE = 100;

var origwidth = 24.0;
var origheight = 32.0;

var gravity = 0.05;
var velocity = 0;
var position = 250;
var rotation = 0;
var jump = -2;
var energy;

var glide;
var state;
var frame;

var timeoutid = 0;
function loadBat(){
    imgBat = new Image();
    imgBat.src = "assets/bat.png";
    state = 0;
    frame = 0;
    energy = maxE;
    glide = false;    
}
function drawBat(){

    if (glide) {
        gravity = 0.02;
        state = state;
        energy += 0.3;
        if (energy > maxE){energy = maxE};
    } else {     
        frame += 2;
        if (frame > 15){state = 1};
        if (frame > 30){state = 2};
        if (frame > 45){state = 3};
        if (frame > 60){
            frame = 0;
            state = 0;
        };
        if (!(dead)) energy -= 0.15;
        if (energy < 0) playerDead();
    }
    velocity += gravity;
    position += velocity;
    if (dead) position = -50;
    ctx.drawImage(imgBat, state * 32, 0, 32, 32, batX, position,32,32); 
    if (position > screen.availHeight) playerDead();
}
function HitCheck(i)
{
    var boxLeft = spikes[i].x + (spikes[i].width / 2) - 18;
    var boxRight = spikes[i].x + (spikes[i].width / 2);
    if (spikes[i].dir > 0){
        if (batX > boxLeft && batX < boxRight){
            if (position + 16 > screen.availHeight - spikes[i].height) playerDead();}
    } else if(spikes[i].dir < 0){
        if (batX> boxLeft && batX < boxRight){
            if (position + 6 < spikes[i].height) playerDead();}   
    }
}
function playerJump()
{
    velocity = jump;
    glide = false;
    energy -= 2;
    if (state > 3){state = 0};   
    timeoutid = setTimeout(startGlide, 300);
    
    if (splashUp) startGame();
    if (dead) {dead = false; splashUp = true};
}

function startGlide()
{
    glide = true;
}
function endGlide()
{
    glide = false;
    gravity = 0.05;
    clearTimeout(timeoutid);
}