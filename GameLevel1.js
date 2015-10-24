
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


	player.update();
}

GameLevel1.prototype.draw = function() 
{
	player.draw();
}