var padding = 80;
var spikeSpan = 160;
var spikes;
var mite;
var tite;
var spikeheight;
var dir;
var delay = 0;
function loadSpikes()
{
    spikes = new Array();
    mite = new Image();
    mite.src = "assets/mite.png";

    tite = new Image();
    tite.src = "assets/tite.png";
    
    spikeheight = Math.floor(screen.availHeight / 3.5);
    dir = 1;
}
function drawSpikes()
{
    if (spikes[0] == null){
        newSpike();
    }
    for(i=0;i<spikes.length;i++)
    {
        /*if(spikes[i].rotate > -1){
            var orientation = top;
        } else {
            orientation = botttom;
        }*/
        if (spikes[i].x > -200){
            if (spikes[i].dir > 0) {            
                ctx.drawImage(mite, spikes[i].x, screen.availHeight - spikes[i].height, spikes[i].width, spikes[i].height);
            } else if (spikes[i].dir < 0){
                ctx.drawImage(tite, spikes[i].x,0,spikes[i].width, spikes[i].height);
            };
            HitCheck(i);
        }
        spikes[i].x -= 1.5;
        if (spikes[i].x < -400) delSpike();
    }
    delay += 1; 
    if (delay > spikeSpan){
        newSpike();
        delay = 0;
    }
}
function newSpike()
{    
    var constraint = (screen.availHeight/2) + spikeheight - (padding * 2);
    var tHeight = Math.floor((Math.random()*constraint) + padding);
    var tWidth = tHeight / 2;
    
    var bHeight = (screen.availHeight/2) + spikeheight - tHeight;
    var bWidth = bHeight / 2;
    var tSpike = {
        x: 400,
        height: tHeight,
        width: tWidth,
        dir: -1,
    };
    var bSpike = {
        x: 400,
        height: bHeight,
        width: bWidth,
        dir: 1,
    };
    spikes.push(tSpike);
    spikes.push(bSpike);
}
function delSpike()
{
    spikes.shift();
}
function clearSpikes()
{
    spikes = [];
    delay = 0;
}