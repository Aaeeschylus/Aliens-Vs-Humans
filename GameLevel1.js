
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
	for(var i=0; i<enemies.length; i++)
	{
		enemies[i].update(deltaTime);
	}
	
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].update(deltaTime);
	}

	for(var i=0; i<lives; i++)
	{
		context.drawImage(livesImage, 20 + ((livesImage.width+2)*i), 10)
	}
	
	var hit=false;
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].update(deltaTime);
		if( bullets[i].position.y < -50)
		{
			hit = true;
		}
		for(var j=0; j<enemies.length; j++)
		{
			if(intersects( bullets[i].position.x, bullets[i].position.y, bullets[i].width, bullets[i].height,
			 enemies[j].position.x, enemies[j].position.y, TILE, TILE) == true)
			{
				// kill both the bullet and the enemy
				enemies.splice(j, 1);
				hit = true;
				// increment the player score
				kills += 1;
				break;
			}
		}
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
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