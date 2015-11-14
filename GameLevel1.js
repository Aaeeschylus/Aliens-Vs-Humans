
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
	level1Update();
	
	context.clearRect(0,0,canvas.width, canvas.height);
	
	//Draw Background
	++backgroundOffset;
	
	for(var i=0; i<enemies.length; i++)
	{
		enemies[i].update(deltaTime);
	}

	for(var i=0; i<bosses.length; i++)
	{
		bosses[i].update(deltaTime);
	}
	
	for(var i=0; i<explosions.length; i++)
	{
		explosions[i].update(deltaTime);
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
					kills += 1;
				}
				hit = true;
				hits += 1;
				break;
				
			} 
		}
		for(var j=0; j<bosses.length; j++)
		{
			if(intersects( bullets[i].position.x, bullets[i].position.y, bullets[i].width, bullets[i].height, bosses[j].position.x, bosses[j].position.y, bosses[j].width, bosses[j].height) == true)
			{
				// kill both the bullet and the enemy
				bosses[j].health -= 1;
				if(bosses[j].health <= 0)
				{
					kills += 1;
					bosses.splice(j,1);
					stateManager.switchState( new winState() );
				}
				hit = true;
				hits += 1;
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
				stateManager.pushState( new loseState() );
			}
			hitPlayer = false;
			break;
		}
	}
	
	for(var i=0; i<bosses.length; i++)
	{
		var hitPlayer = intersects(bosses[i].position.x, bosses[i].position.y, bosses[i].width, bosses[i].height, player.position.x, player.position.y, player.width, player.height)
		if(hitPlayer == true)
		{
			player.position.set( SCREEN_WIDTH/2, SCREEN_HEIGHT - 100);
			player.lives -= 1;
			if (player.lives == 0)
			{
				stateManager.pushState( new loseState() );
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
	
	for(var i=0; i<bosses.length; i++)
	{
		bosses[i].draw();
	}
	
	for(var i=0; i<explosions.length; i++)
	{
		explosions[i].draw();
	}
	
	context.fillStyle = 'white';
	context.strokeStyle = 'black';
	context.font="24px Verdana";
	context.fillText("Lives: ", 20, 40, 200);
	context.strokeText("Lives: ", 20, 40, 200);

	context.font="24px Verdana";
	context.fillText("Kills: " + kills, SCREEN_WIDTH - 150, 40, 200);
	context.strokeText("Kills: " + kills, SCREEN_WIDTH -  150, 40, 200);
	
	for(var i=0; i<player.lives; i++)
	{
		context.drawImage(livesImage, 100 + ((livesImage.width+2)*i), 23)
	}
	
	player.draw();
}