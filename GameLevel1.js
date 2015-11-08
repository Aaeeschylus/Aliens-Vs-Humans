
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
	totalTimeUpdate();
	level1TotalTimeUpdate();
	
	context.clearRect(0,0,canvas.width, canvas.height);
	
	level1Spawning();
	
	//Draw Background
	++backgroundOffset;
	
	for(var i=0; i<enemies.length; i++)
	{
		enemies[i].update(deltaTime);
	}
	
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].update(deltaTime);
	}

	for(var i=0; i<bullets.length; i++)
	{
	var hit=false;
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
				enemies[j].health -= 1;
				if(enemies[j].health <= 0)
				{
					enemies.splice(j, 1);
				}
				hit = true;
				break;
			} 
		}
		if(hit == true)
		{
			bullets.splice(i, 1);
			i = i - 1;
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
	context.drawImage(backgroundImage, -100, backgroundOffset);
 
	if (backgroundOffset >= 0 && backgroundOffset <= canvas.height) {
		context.drawImage(backgroundImage, -100, backgroundOffset - backgroundImage.height + 2);
	}
	 
	//Scrolling off the bottom of the screen
	if (backgroundOffset >= canvas.height) {
		backgroundOffset = canvas.height - backgroundImage.height;
	}
	
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