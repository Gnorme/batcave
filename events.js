var splash;
var scoreBoard;

var splashUp;
var started;

var startTime;

var score;
var finalScore;
function loadEvents()
{
    splash = new Image();
    splash.src = "assets/splash.png";
    
    scoreBoard = new Image();
    scoreBoard.src = "assets/scoreboard.png";
    
    splashUp = true;
    started = false;
}
function drawEvents()
{
    if (splashUp){showSplash()};
    if (started){
        updateScore();
        updateEnergy();
    }
    if (dead){showScoreboard()};
}
function startGame()
{
    startTime = new Date();
    dead = false;
    splashUp = false;
    score = 0;
    started = true;
    finalScore = 0;
}
function showSplash()
{
    splashUp = true;
    started = false;
    score = 0;
    velocity = 0;
    position = 250;
    rotation = 0;
    finalScore = 0;
    energy = maxE;
    
    clearSpikes();
    ctx.drawImage(splash, (screen.availWidth / 2) - (splash.width / 2), 50);
}
function showScoreboard()
{
    splashUp = false;
    started = false;
    finalScore = score;
    ctx.drawImage(scoreBoard, (screen.availWidth / 2) - (scoreBoard.width / 2), 50);
    
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.font = "18px Arial";
    ctx.fillText(finalScore, (screen.availWidth / 2) + (scoreBoard.width / 4) - finalScore.toString().length * 1.5, (scoreBoard.height / 2.3) + 50);
}
function updateScore()
{
    var elapsed = parseInt((new Date() - startTime)/10).toString();
    elapsed = elapsed.splice(elapsed.length - 2, 0, ".");
    score = elapsed;
    
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.font = "24px Arial"; 
    ctx.fillText(score, (screen.availWidth / 2) - 12, 50);
}
function updateEnergy()
{
    ctx.fillStyle = "#63b8ff";
    ctx.fillRect(screen.availWidth - 120,10,energy,16);
}
function playerDead()
{
    dead = true;
}
String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};