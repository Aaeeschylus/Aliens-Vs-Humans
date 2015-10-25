
var GameLevel1 = function() 
{
	this.prototype = BaseState;
}

GameLevel1.prototype.load = function() 
{
	this.delay = 2;
}

GameLevel1.prototype.unload = function() 
{
}

GameLevel1.prototype.update = function(dt) 
{
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].update(deltaTime);
	}

	player.update();
}

GameLevel1.prototype.draw = function() 
{
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].draw();
	}
	player.draw();
}