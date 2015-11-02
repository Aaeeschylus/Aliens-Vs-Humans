
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
			if(intersects( bullets[i].position.x, bullets[i].position.y, bullets[i].width, bullets[i].height, enemies[j].position.x, enemies[j].position.y, enemies[j].width, enemies[j].height) == true)
			{
				// kill both the bullet and the enemy
				enemies.splice(j, 1);
				hit = true;
				break;
			} 
		}
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
	}
	
	for(var i=0; i<enemies.length; i++)
	{
		var hitPlayer = intersects(enemies[i].position.x, enemies[i].position.y, enemies[i].width, enemies[i].height, player.position.x, player.position.y, player.width, player.height)
		if(hitPlayer == true)
		{
			enemies.splice(i,1);
			player.position.set( SCREEN_WIDTH/2, SCREEN_HEIGHT - 100);
			player.lives -= 1;
			if (player.lives == 0)
			{
				stateManager.pushState( new SplashState() );
			}
			hitPlayer = false;
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
	for(var i=0; i<enemies.length; i++)
	{
		enemies[i].draw();
	}
	
	for(var i=0; i<player.lives; i++)
	{
		context.drawImage(livesImage, 20 + ((livesImage.width+2)*i), 10)
	}
	
	player.draw();
}