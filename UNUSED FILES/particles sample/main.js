var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();
// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//-------------------- Don't modify anything above here

// some variables to calculate the Frames Per Second (FPS - this tells use
// how fast our game is running, and allows us to make the game run at a 
// constant speed)
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;

var DEBUG = 1;		// set to 0 to turn off drawing debug information

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var keyboard = new Keyboard();

var burstEmitter = createBurstEmitter("spark.png", SCREEN_WIDTH/4, SCREEN_HEIGHT/2);
var fireEmitter = createFireEmitter("fire.png", (SCREEN_WIDTH/4)*3, SCREEN_HEIGHT-100);
var starEmitter = createFlyingStarsEmitter("star.png", SCREEN_WIDTH/2, 250);

var spiralEmitter = createSpiralEmitter("spark.png", SCREEN_WIDTH/4, SCREEN_HEIGHT-100);






var myText = canvas.getContext("2d");
var totalTime = 0;
var waveVal = 0;


var myNum = Math.floor(Math.random() * 3 - 1);

var buffer;
var fg;

function run()
{
	context.fillStyle = "#000";		
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var deltaTime = getDeltaTime();
	totalTime = totalTime + deltaTime;
	
	//burstEmitter.update(deltaTime);
	fireEmitter.update(deltaTime*2);
	//starEmitter.update(deltaTime);
	//spiralEmitter.update(deltaTime);
	
	//fireEmitter.x = fireEmitter.x + (50 * Math.sin(totalTime));
	fireEmitter.position.y = 400 + (80*(Math.cos(totalTime*3)));;
	//fireEmitter.x = fireEmitter.x + (Math.sin(totalTime*100));
	fireEmitter.position.x = 320 + (80*(Math.sin(totalTime*3))); /// 1.125*Math.cos(totalTime/2)));
	
	//starEmitter.position.x = starEmitter.position.x + (10 * (Math.sin(totalTime*2)) )
	
	
	//starEmitter.draw();
	//burstEmitter.draw();
	fireEmitter.draw();
	//spiralEmitterEmitter.draw();
			
	if(DEBUG == 1)
	{	
			// update the frame counter 
		fpsTime += deltaTime;
		fpsCount++;
		if(fpsTime >= 1)
		{
			fpsTime -= 1;
			fps = fpsCount;
			fpsCount = 0;
		}		
		
		// draw the FPS
		context.fillStyle = "#f00";
		context.font="14px Arial";
		context.fillText("FPS: " + fps, 5, 20, 100);
				
		myText.fillStyle = "#00f";
		myText.font="14px Arial";
		myText.fillText("Time: " + totalTime, 520, 20, 100);
		myText.fillStyle = "#060";
		myText.fillText("Val: " + (Math.sin(totalTime)), 520, 40, 100);
		myText.fillStyle = "#606";
		myText.fillText("Val: " + (myNum), 520, 60, 100);
		
		
		
	}
}


//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);
