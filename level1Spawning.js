var level1Time = 0;

function level1TotalTimeUpdate(){
	level1Time = level1Time + deltaTime;
}

function level1Spawning() {
	if(level1Time < 2 && level1Time > 1.8 ){
		for (var i = 0; i < 20; i++) {
			setTimeout(function() {
				NenemySpawnZigZag(SCREEN_WIDTH/2 , -1);
			}, 500 * i);
		}	
	}
	
	
}