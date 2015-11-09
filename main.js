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

var backgroundOffset = 0;


var backgroundImage = document.createElement("img");
backgroundImage.src = "background01.png";

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

var totalTime = 0;

function totalTimeUpdate(){
	totalTime = totalTime + deltaTime;
}

// some variables to calculate the Frames Per Second (FPS - this tells use
// how fast our game is running, and allows us to make the game run at a 
// constant speed)
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;
var hits = 0
var sps = 0;
var kills = 0;

var enemies = [];
var bullets = [];

var deltaTime = getDeltaTime();

var PLAYER_SPEED = 4;

var DEBUG = 1;

var stateManager = new StateManager();

stateManager.pushState( new SplashState() );

function playerShoot()
{
	var BULLET_STREAM_COUNT = 10;
	var BULLET_STREAM_STRIDE = 80;
	for (var i = 0; i < BULLET_STREAM_COUNT; ++i) {
		var bullet = new Bullet(player.position.x + 0.6, player.position.y - (i / BULLET_STREAM_COUNT) * BULLET_STREAM_STRIDE);
		bullets.push(bullet);
	}
}

function NenemySpawn(startX, health)
{
	var Nenemy = new NormEnemy();
	Nenemy.position.x = startX;
	Nenemy.health = health;
	enemies.push(Nenemy);
	sps += 1;
}

function NAenemySpawn(startX, startY, AngleOfEnter, health)
{
	var NAenemy = new NormEnemy();
	
	NAenemy.health = health;
	
	NAenemy.position.set(startX, startY);
	NAenemy.angleMovement = true;
	
	var velX = 0;
	var velY = 1;
	
	var s = Math.sin(AngleOfEnter);
	var c = Math.cos(AngleOfEnter);
	
	var xVel = (velX * c) - (velY * s);
	var yVel = (velX * s) + (velY * c);
	
	NAenemy.velocityX = xVel * 2;
	NAenemy.velocityY = yVel * 2;
	
	enemies.push(NAenemy);	
	sps += 1;
}

function NenemySpawnZigZag(zigZagPosition, Sdirection, sidedistance, sidespeed, OffSet, health)
{
	var NZZenemy = new NormEnemy ();
	NZZenemy.health = health;
	NZZenemy.zigZagMean = zigZagPosition;
	NZZenemy.sideSpeeed = sidespeed;
	NZZenemy.offset = OffSet;
	NZZenemy.sideLength = sidedistance;
	NZZenemy.position.set(zigZagPosition, -50);
	NZZenemy.ZigZagMovement = true;
	NZZenemy.direction = Sdirection;
	enemies.push(NZZenemy);
	sps += 1;
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
		
		context.fillStyle = "#f00";
		context.font="14px Arial";
		context.fillText("Spawns: " + sps, 500, 20, 100);
		
		context.fillStyle = "#f00";
		context.font="14px Arial";
		context.fillText("Hits: " + hits, 300, 20, 100);
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
 