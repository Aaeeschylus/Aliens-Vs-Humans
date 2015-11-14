
var loseState = function() 
{
	this.prototype = BaseState;
}

loseState.prototype.load = function() 
{
}

loseState.prototype.unload = function() 
{
}

loseState.prototype.update = function(dt) 
{
	if( keyboard.isKeyDown( keyboard.KEY_SPACE ) == true )
	{
		stateManager.switchState( new creditState() );
	}
}

loseState.prototype.draw = function() 
{
	for(var y=0; y<1; y++)
	{
		for(var x=0; x<1; x++)
		{
			context.drawImage(loseScreen[y][x], x*1, y*1);
		}
	}
	
	context.fillStyle = 'white';
	context.strokeStyle = 'black';
	context.font="72px Verdana";
	var width =  context.measureText("YOU LOSE").width;
	context.fillText("YOU LOSE", SCREEN_WIDTH/2 - width/2, 450, 400);
	context.strokeText("YOU LOSE", SCREEN_WIDTH/2 - width/2, 450, 400);	
	
	context.font = "36px Verdana";
	width =  context.measureText("Press F5 to try again!").width;
	context.fillText("Press F5 to try again!", SCREEN_WIDTH/2 - width/2, 500, 400);
	context.strokeText("Press F5 to try again!", SCREEN_WIDTH/2 - width/2, 500, 400);	
	
	context.font = "24px Verdana";
	width =  context.measureText("Press Space to see credits").width;
	context.fillText("Press Space to see credits", SCREEN_WIDTH/2 - width/2, 875);
	context.strokeText("Press Space to see credits", SCREEN_WIDTH/2 - width/2, 875);
}