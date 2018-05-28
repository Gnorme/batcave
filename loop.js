FPS = 60;
var x = 0;

var iClock;
var gameLoopTimeout;
var boolGameLoopStarted = false;
var calculatedFPS = FPS; 

//the canvas context variable
var ctx;
if (ctx == null) {
  var ctx = AppMobi.canvas.getContext("2d");
}

//This sample app uses AGI in HTML5 compatibility Mode
try {
  ctx.HTML5CompatibilityMode = true;
} catch(e){}

//This sample app uses AGI in HTML5 compatibility Mode
try {
  ctx.HTML5CompatibilityMode = true;
} catch(e){}

//the draw loop timeout used to stop the animation loop if necessary
var timeout;

//this function will initialize all the animations for the app and preload all the sounds within the AGI view
function init()
{
    loadBackground();
    loadBat();
    loadEvents();
    loadSpikes();
   //get the highscore
   /*var savedscore = getCookie("highscore");
   if(savedscore != "")
      highscore = parseInt(savedscore);*/
   
   //start with the splash screen
   //showSplash();
}
function gameloop() {
   //var player = $("#bird");
    //clear the screen
    ctx.fillRect(0,0,w,h);

    drawCaveBackground();
    
    drawSpikes();
    
    drawEvents();
    
    drawBat();

    ctx.present();

    //calculate FPS and queue up the next animation frame
    throttle();
}
//this function throttles back the animation if it is running too fast, and tracks the actual number of frames per second 
function throttle()
{
  //animation loop complete, now calcluate the frames per second
  var iDiff = new Date() - iClock;
  calculatedFPS = Math.round(1000/iDiff);   
  
  if (calculatedFPS > FPS) { calculatedFPS = FPS; }  //if we are *faster* than FPS, just report FPS

  //write the immediate FPS reading out to the screen
  dbg("FPS: " + calculatedFPS,0); 

  //reset the throttle for the next iteration of the animation loop
  iClock = new Date();
  
  //calculate the number of milliseconds until the next frame is ready
  var nextFrame = Math.round((1000/FPS) - iDiff);
  if (nextFrame <= 0) { 
    //the processing has taken too long, no need for a pause redraw immediately
    if (boolGameLoopStarted==true) {
      gameloop();
    }
  }
  else
  {
    //run the next game loop after a number of milliseconds such that we keep a steady frame rate
    if (boolGameLoopStarted==true) {
      gameLoopTimeout = setTimeout(gameloop,nextFrame);
    }
  } 
}
//gets a random integer between 0 and MAX
function rnd(max) {
 return Math.floor(Math.random()*max);
}


//set up the animation as soon as it is loaded
init();
iClock = new Date();