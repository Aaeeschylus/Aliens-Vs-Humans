
var creditState = function() 
{
	this.prototype = BaseState;
}

creditState.prototype.load = function() 
{
}

creditState.prototype.unload = function() 
{
}

creditState.prototype.update = function(dt) 
{
	
}

creditState.prototype.draw = function() 
{
	context.fillStyle = 'white';
	context.strokeStyle = 'black';
	context.font="36px Verdana";
	var width =  context.measureText("Made by:").width;
	context.fillText("Made By:", SCREEN_WIDTH/2 - width/2, 200);
	context.strokeText("Made By:", SCREEN_WIDTH/2 - width/2, 200);
	
	context.font="24px Verdana";
	width =  context.measureText("Bradley Elliott, Ben Atkinson, Isaac Bowes").width;
	context.fillText("Bradley Elliott, Ben Atkinson, Isaac Bowes", SCREEN_WIDTH/2 - width/2, 230);
	context.strokeText("Bradley Elliott, Ben Atkinson, Isaac Bowes", SCREEN_WIDTH/2 - width/2, 230);
	
	context.font="36px Verdana";
	width =  context.measureText("Designed by:").width;
	context.fillText("Designed By:", SCREEN_WIDTH/2 - width/2, 290);
	context.strokeText("Designed By:", SCREEN_WIDTH/2 - width/2, 290);	
	
	context.font="24px Verdana";
	width =  context.measureText("Bradley Elliott, Ben Atkinson, Isaac Bowes").width;
	context.fillText("Bradley Elliott, Ben Atkinson, Isaac Bowes", SCREEN_WIDTH/2 - width/2, 320);
	context.strokeText("Bradley Elliott, Ben Atkinson, Isaac Bowes", SCREEN_WIDTH/2 - width/2, 320);
	
	context.font="36px Verdana";
	width =  context.measureText("Art by:").width;
	context.fillText("Art By:", SCREEN_WIDTH/2 - width/2, 380);
	context.strokeText("Art By:", SCREEN_WIDTH/2 - width/2, 380);	
	
	context.font="18px Verdana";
	width =  context.measureText("Boss Ship by Jerom at http://opengameart.org/content/die-for-the-empire-boss-2 ").width;
	context.fillText("Boss Ship by Jerom at http://opengameart.org/content/die-for-the-empire-boss-2 ", SCREEN_WIDTH/2 - width/2, 400);
	context.strokeText("Boss Ship by Jerom at http://opengameart.org/content/die-for-the-empire-boss-2 ", SCREEN_WIDTH/2 - width/2, 400);

	width =  context.measureText("Enemy Ship by Opaccus at http://pixeljoint.com/pixelart/19834.htm ").width;
	context.fillText("Enemy Ship by Opaccus at http://pixeljoint.com/pixelart/19834.htm ", SCREEN_WIDTH/2 - width/2, 420);
	context.strokeText("Enemy Ship by Opaccus at http://pixeljoint.com/pixelart/19834.htm ", SCREEN_WIDTH/2 - width/2, 420);
	
	width =  context.measureText("Player Ship by Skorpio at http://opengameart.org/content/spaceship-spiked-fighter").width;
	context.fillText("Player Ship by Skorpio at http://opengameart.org/content/spaceship-spiked-fighter", SCREEN_WIDTH/2 - width/2, 440);
	context.strokeText("Player Ship by Skorpio at http://opengameart.org/content/spaceship-spiked-fighter", SCREEN_WIDTH/2 - width/2, 440);
	
	context.font="36px Verdana";
	width = context.measureText("Sounds by:").width;
	context.fillText("Sounds By:", SCREEN_WIDTH/2 - width/2, 500);
	context.strokeText("Sounds By:", SCREEN_WIDTH/2 - width/2, 500);
	
	context.font="18px Verdana";
	width =  context.measureText("Laser Sound by Fins at https://www.freesound.org/people/fins/sounds/146725/ ").width;
	context.fillText("Laser Sound by Fins at https://www.freesound.org/people/fins/sounds/146725/ ", SCREEN_WIDTH/2 - width/2, 520);
	context.strokeText("Laser Sound by Fins at https://www.freesound.org/people/fins/sounds/146725/ ", SCREEN_WIDTH/2 - width/2, 520);
}


	// Boss Ship by Jerom at http://opengameart.org/content/die-for-the-empire-boss-2 
	// Enemy Ship by Opaccus at http://pixeljoint.com/pixelart/19834.htm 
	// Player Ship by Skorpio at http://opengameart.org/content/spaceship-spiked-fighter 
	// Laser Sound by Fins at https://www.freesound.org/people/fins/sounds/146725/ 