
var SplashState = function() 
{
	this.prototype = BaseState;
}

SplashState.prototype.load = function() 
{
}

SplashState.prototype.unload = function() 
{
}

SplashState.prototype.update = function(dt) 
{
	if( keyboard.isKeyDown( keyboard.KEY_SPACE ) == true )
	{
		if (player.lives <= 0)
		{
			clearInterval(level1spawntimer);
		}
		musicBackground = new Howl(
		{
			urls: ["epicMusic.wav"],
			loop: true,
			buffer: true,
			volume: 0.5
		});
		musicBackground.play();
		
		sps = 0;
		hits = 0;
		kills = 0;
		player.lives = 3;
		levelseconds = 0;
		enemies = [];
		level1SpawningTimer();
		stateManager.switchState( new GameLevel1() );
	}
}

SplashState.prototype.draw = function() 
{
	for(var y=0; y<1; y++)
	{
		for(var x=0; x<1; x++)
		{
			context.drawImage(splashScreen[y][x], x*1, y*1);
		}
	}
	
	context.fillStyle = 'white';
	context.strokeStyle = 'black';
	context.font="72px Verdana";
	var width =  context.measureText("Intergalactic Warfare").width;
	context.fillText("Intergalactic Warfare", SCREEN_WIDTH/2 - width/2, SCREEN_HEIGHT/2);
	context.strokeText("Intergalactic Warfare", SCREEN_WIDTH/2 - width/2, SCREEN_HEIGHT/2);
	
	context.font="32px Verdana";
	width =  context.measureText("Press SPACE to Continue.").width;
	context.fillText("Press SPACE to Continue.", SCREEN_WIDTH/2 - width/2, 500);
	context.strokeText("Press SPACE to Continue.", SCREEN_WIDTH/2 - width/2, 500);
}