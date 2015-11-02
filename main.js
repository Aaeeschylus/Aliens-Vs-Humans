var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime() {
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

var livesImage = document.createElement("img");
livesImage.src = "ship01small.png";

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var player = new Player();
var keyboard = new Keyboard();

//intersection function
function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(y2 + h2 < y1 ||
		x2 + w2 < x1 ||
		x2 > x1 + w1 ||
		y2> y1 + h1)
	{
		return false;
	}
	return true;
}

//random number function. Call with rand(lowest, highest)
function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor);
}

// some variables to calculate the Frames Per Second (FPS - this tells use
// how fast our game is running, and allows us to make the game run at a 
// constant speed)
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;

var enemies = [];
var bullets = [];

var deltaTime = getDeltaTime();

var PLAYER_SPEED = 4;

var DEBUG = 1;

var stateManager = new StateManager();

stateManager.pushState( new SplashState() );

function playerShoot()
{
	if(player.shootSet <= 9){		
		var bullet = new Bullet(player.position.x , player.position.y);
		bullets.push(bullet);
		var bullet = new Bullet(player.position.x, player.position.y - bullet.height);
		bullets.push(bullet);
		player.shootSet += 1;
	}
	else{
		player.shootSet = 4;
	}
}

function NenemySpawn()
{
	var Nenemy = new NormEnemy();
	enemies.push(Nenemy);
}

function NenemySpawnZigZag()
{
	var NZZenemy = new NormEnemy ();
	NZZenemy.position.set(SCREEN_WIDTH/2, 10);
	NZZenemy.ZigZagMovement = true;
	enemies.push(NZZenemy);
}


function run() {
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var deltaTime = getDeltaTime();
	
	stateManager.update(deltaTime);
	
	stateManager.draw();
	

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
	}
}

//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
		var onEachFrame;
		if(window.requestAnimationFrame) {
			onEachFrame = function(cb) {
				var _cb = function() {
					cb();
					window.requestAnimationFrame(_cb);
				}
				_cb();
			};
		} else if(window.mozRequestAnimationFrame) {
			onEachFrame = function(cb) {
				var _cb = function() {
					cb();
					window.mozRequestAnimationFrame(_cb);
				}
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
 