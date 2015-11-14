
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
	context.fillText("YOU LOSE", SCREEN_WIDTH/2 - 200, 450, 400);
	context.strokeText("YOU LOSE", SCREEN_WIDTH/2 - 200, 450, 400);	
	context.font = "36px Verdana";
	context.fillText("Press F5 to try again!", SCREEN_WIDTH/2 - 200, 500, 400);
	context.strokeText("Press F5 to try again!", SCREEN_WIDTH/2 - 200, 500, 400);		
}