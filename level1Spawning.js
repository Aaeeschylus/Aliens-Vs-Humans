var levelseconds = 0;
var spawn1 = false;
var spawn2 = false;
var spawn3 = false;
var spawn4 = false;
var spawn5 = false;
var spawn6 = false;
var bossSpawn = false;

function level1Update(){
	if (levelseconds == 1.5 && spawn1 == false)
		{
		fnspawn1 = setInterval(function(){ 
			NenemySpawn(SCREEN_WIDTH/2, 100);
			NenemySpawn(SCREEN_WIDTH/4, 100);
			NenemySpawn(SCREEN_WIDTH/2 + SCREEN_WIDTH/4, 100);
			}, 700);
			spawn1 = true;
		}
	if (levelseconds == 8)
	{
		clearInterval(fnspawn1);
		spawn1 = false;
	}		
	
	if (levelseconds == 8.5 && spawn2 == false)
		{
		var i = 0;
		var j = 0;
		fnspawn2 = setInterval(function(){ 
			NenemySpawnZigZag(SCREEN_WIDTH/2 , -1, 200, 140, i, 100);
			NenemySpawnZigZag(SCREEN_WIDTH/2, 1, 200, 140, j, 100);
			i += 10;
			j -= 10;
			}, 1000);
			spawn2 = true;
		}
	if (levelseconds == 19)
	{
		clearInterval(fnspawn2);
		spawn2 = false;
	}	

	if (levelseconds == 19.5 && spawn3 == false)
		{
		fnspawn3 = setInterval(function(){ 
			NAenemySpawn(-40, 50, 11, 200);
			NAenemySpawn(SCREEN_WIDTH + 40, 100, 14.13, 50);
			NAenemySpawn(-40, 150, 11, 200);
			NAenemySpawn(SCREEN_WIDTH + 40, 200, 14.13, 50);
			}, 1000);
			spawn3 = true;
		}
	if (levelseconds == 26)
	{
		clearInterval(fnspawn3);
		spawn3 = false;
	}	
	
	//put this code in if you want to instantly skip to the boss. To use it, after starting the game (pressing space from start screen) press 1 within the first 3 seconds.
	// if(keyboard.isKeyDown(keyboard.KEY_1) == true) {
		// levelseconds = 72;
	// }
	
	if (levelseconds == 27.5 && spawn4 == false)
		{
		fnspawn4 = setInterval(function(){ 
			NAenemySpawn(-40, 50, 11, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, 100, 14.13, 25);
			NAenemySpawn(-40, 150, 11, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, 200, 14.13, 25);
			NenemySpawn(SCREEN_WIDTH/2, 25);
			NenemySpawn(SCREEN_WIDTH/2 - SCREEN_WIDTH/8, 25);
			NenemySpawn(SCREEN_WIDTH/2 + SCREEN_WIDTH/8, 25);
			NenemySpawn(SCREEN_WIDTH/4, 25);
			NenemySpawn(SCREEN_WIDTH/4 - SCREEN_WIDTH/8, 25);
			NenemySpawn(SCREEN_WIDTH/4 + SCREEN_WIDTH/8, 25);
			NenemySpawn(SCREEN_WIDTH/2 + SCREEN_WIDTH/4, 25);
			NenemySpawn(SCREEN_WIDTH/2 + SCREEN_WIDTH/4 + SCREEN_WIDTH/8, 25);
			
			}, 700);
			spawn4 = true;
		}
	if (levelseconds == 40)
	{
		clearInterval(fnspawn4);
		spawn4 = false;
	}	
	
	if (levelseconds == 41.5 && spawn5 == false)
	{
		fnspawn5 = setInterval(function(){ 
			NAenemySpawn(-40, 250, 12, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, 250, 13.2, 25);
			NAenemySpawn(-40, 50, 12, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, 50, 13.2, 25);
			NAenemySpawn(-40, 150, 12, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, 150, 13.2, 25);
			NAenemySpawn(-40, -50, 12, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, -50, 13.2, 25);
			NAenemySpawn(-40, -150, 12, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, -150, 13.2, 25);
			NAenemySpawn(-40, -250, 12, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, -250, 13.2, 25);
			NAenemySpawn(-40, -350, 12, 25);
			NAenemySpawn(SCREEN_WIDTH + 40, -350, 13.2, 25);
			
		}, 700);
		spawn5 = true;
	}
	if (levelseconds == 50)
	{
		clearInterval(fnspawn5);
		spawn5 = false;
	}	
	
	if (levelseconds == 51.5 && spawn6 == false)
	{
		fnspawn6 = setInterval(function(){ 
			NAenemySpawn(-40, 250, 12, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, 250, 13.2, 10);
			NAenemySpawn(-40, 50, 12, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, 50, 13.2, 10);
			NAenemySpawn(-40, 150, 12, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, 150, 13.2, 10);
			NAenemySpawn(-40, -50, 12, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, -50, 13.2, 10);
			NAenemySpawn(-40, -150, 12, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, -150, 13.2, 10);
			NAenemySpawn(-40, -250, 12, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, -250, 13.2, 10);
			NAenemySpawn(-40, -350, 12, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, -350, 13.2, 10);
			NAenemySpawn(-40, 50, 11, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, 100, 14.13, 10);
			NAenemySpawn(-40, 150, 11, 10);
			NAenemySpawn(SCREEN_WIDTH + 40, 200, 14.13, 10);
			NenemySpawnZigZag(SCREEN_WIDTH/2 , -1, 200, 140, i, 10);
			NenemySpawnZigZag(SCREEN_WIDTH/2, 1, 200, 140, j, 10);
			NenemySpawn(SCREEN_WIDTH/16, 10);
			NenemySpawn(2*SCREEN_WIDTH/16, 10);
			NenemySpawn(3*SCREEN_WIDTH/16, 10);
			NenemySpawn(4*SCREEN_WIDTH/16, 10);
			NenemySpawn(5*SCREEN_WIDTH/16, 10);
			NenemySpawn(6*SCREEN_WIDTH/16, 10);
			NenemySpawn(7*SCREEN_WIDTH/16, 10);
			NenemySpawn(8*SCREEN_WIDTH/16, 10);
			NenemySpawn(9*SCREEN_WIDTH/16, 10);
			NenemySpawn(10*SCREEN_WIDTH/16, 10);
			NenemySpawn(11*SCREEN_WIDTH/16, 10);
			NenemySpawn(12*SCREEN_WIDTH/16, 10);
			NenemySpawn(13*SCREEN_WIDTH/16, 10);
			NenemySpawn(14*SCREEN_WIDTH/16, 10);
			NenemySpawn(15*SCREEN_WIDTH/16, 10);
			i += 10;
			j -= 10;
		}, 300);
		spawn6 = true;
	}
	if (levelseconds == 60)
	{
		clearInterval(fnspawn6);
		spawn6 = false;
	}	
	
	if (levelseconds == 72.5 && bossSpawn == false)
	{
		fnbossSpawn = setInterval(function(){ 
			BossSpawn();	
		}, 400);
		bossSpawn = true;
	}
	if (levelseconds == 73)
	{
		clearInterval(fnbossSpawn);
		bossSpawn = false;
	}	
	
}

	
function level1SpawningTimer() {
	level1spawntimer = setInterval(function() {
		levelseconds += 0.5;
		}, 500);
}