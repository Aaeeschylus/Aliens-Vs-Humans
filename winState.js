
var winState = function() 
{
	this.prototype = BaseState;
}

winState.prototype.load = function() 
{
}

winState.prototype.unload = function() 
{
}

winState.prototype.update = function(dt) 
{
	if( keyboard.isKeyDown( keyboard.KEY_SPACE ) == true )
	{
		stateManager.switchState( new creditState() );
	}
}

winState.prototype.draw = function() 
{
	for(var y=0; y<1; y++)
	{
		for(var x=0; x<1; x++)
		{
			context.drawImage(winScreen[y][x], x*1, y*1);
		}
	}
	
	context.fillStyle = 'white';
	context.strokeStyle = 'black';
	context.font="72px Verdana";
	var width =  context.measureText("YOU WIN").width;
	context.fillText("YOU WIN", SCREEN_WIDTH/2 - width/2, 450, 400);
	context.strokeText("YOU WIN", SCREEN_WIDTH/2 - width/2, 450, 400);	
	context.font = "36px Verdana";
	width =  context.measureText("You killed 1069/1434 enemies!").width;
	context.fillText("You killed " + kills + "/" + sps + " enemies!", SCREEN_WIDTH/2 - 220, 500, 900);
	context.strokeText("You killed " + kills + "/" + sps + " enemies!", SCREEN_WIDTH/2 - 220, 500, 900);	
}