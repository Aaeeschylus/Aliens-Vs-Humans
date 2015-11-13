var levelseconds = 0;
var spawn1 = false;
var spawn2 = false;
var spawn3 = false;
var spawn4 = false;
var spawn5 = false;
var spawn6 = false;
var spawn7 = false;
var spawn8 = false;
var spawn9 = false;
var spawn10 = false;

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
	
	if(keyboard.isKeyDown(keyboard.KEY_1) == true) {
		levelseconds = 40.5;
	}
	
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
	
	// if (levelseconds == 1.5 && spawn6 == false)
		// {
		// fnzigzag1 = setInterval(function(){ 
			// NenemySpawnZigZag(SCREEN_WIDTH/2 , -1, 100, 70, 200);
			// }, 1000);
			// spawn6 = true;
		// }
	// if (levelseconds == 8)
	// {
		// clearInterval(fnzigzag1);
		// spawn6 = false;
	// }	
	
	// if (levelseconds == 1.5 && spawn7 == false)
		// {
		// fnzigzag1 = setInterval(function(){ 
			// NenemySpawnZigZag(SCREEN_WIDTH/2 , -1, 100, 70, 200);
			// }, 1000);
			// spawn7 = true;
		// }
	// if (levelseconds == 8)
	// {
		// clearInterval(fnzigzag1);
		// spawn7 = false;
	// }	
	
	// if (levelseconds == 1.5 && spawn8 == false)
		// {
		// fnzigzag1 = setInterval(function(){ 
			// NenemySpawnZigZag(SCREEN_WIDTH/2 , -1, 100, 70, 200);
			// }, 1000);
			// spawn8 = true;
		// }
	// if (levelseconds == 8)
	// {
		// clearInterval(fnzigzag1);
		// spawn8 = false;
	// }	
	
	// if (levelseconds == 1.5 && spawn9 == false)
		// {
		// fnzigzag1 = setInterval(function(){ 
			// NenemySpawnZigZag(SCREEN_WIDTH/2 , -1, 100, 70, 200);
			// }, 1000);
			// spawn9 = true;
		// }
	// if (levelseconds == 8)
	// {
		// clearInterval(fnzigzag1);
		// spawn9 = false;
	// }	
	
	// if (levelseconds == 1.5 && spawn10 == false)
		// {
		// fnzigzag1 = setInterval(function(){ 
			// NenemySpawnZigZag(SCREEN_WIDTH/2 , -1, 100, 70, 200);
			// }, 1000);
			// spawn10 = true;
		// }
	// if (levelseconds == 8)
	// {
		// clearInterval(fnzigzag1);
		// spawn10 = false;
	// }	
	
}

	
function level1SpawningTimer() {
	level1spawntimer = setInterval(function() {
		levelseconds += 0.5;
		}, 500);
}