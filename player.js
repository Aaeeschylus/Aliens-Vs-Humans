var Player = function() {
	this.lives = 3;
	this.images = [];
	this.images[0] = new Image();
	this.images[0].src = "ship01.png";
	this.images[1] = new Image();
	this.images[1].src = "ship02.png"
	this.images[2] = new Image();
	this.images[2].src = "ship16.png"

	this.upgradeLevel = 0;
	
	this.position = new Vector2();
	this.position.set( SCREEN_WIDTH/2, SCREEN_HEIGHT - 100 );
	this.width = 44;
	this.height = 49;
	this.cooldownTimer = 0;
};

Player.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_1) == true) {
		this.upgradeLevel = 0;
	}
	if(keyboard.isKeyDown(keyboard.KEY_2) == true) {
		this.upgradeLevel = 1;
	}
	if(keyboard.isKeyDown(keyboard.KEY_3) == true) {
		this.upgradeLevel = 2;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_NUM1) == true) {
		NenemySpawn();
	}

	if(keyboard.isKeyDown(keyboard.KEY_NUM2) == true) {
		NenemySpawnZigZag(SCREEN_WIDTH/2 , -1);
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_NUM3) == true) {
		NenemySpawnZigZag(SCREEN_WIDTH/2, 1);
	}

	if(keyboard.isKeyDown(keyboard.KEY_NUM4) == true) {
		NAenemySpawn(200, 200, 6);
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_SHIFT) == true) {
		if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
			if(this.position.x >= 40) 
			{
				this.position.x -= 3;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) {
			if(this.position.x <= (SCREEN_WIDTH - 40)) 
			{
				this.position.x += 3;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_UP) == true) {
			if(this.position.y >= 40)
			{
				this.position.y -= 3;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true) {
			if(this.position.y <= (SCREEN_HEIGHT - 40))
			{
				this.position.y += 3;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true) {
			playerShoot();
		}
	}
	else {
		if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
			if(this.position.x >= 40) 
			{
				this.position.x -= 8;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) {
			if(this.position.x <= (SCREEN_WIDTH - 40)) 
			{
				this.position.x += 8;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_UP) == true) {
			if(this.position.y >= 40)
			{
				this.position.y -= 8;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true) {
			if(this.position.y <= (SCREEN_HEIGHT - 40))
			{
				this.position.y += 8;
			}
		}
		if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true) {
			playerShoot();
		}
	}
}


Player.prototype.draw = function()
{
	context.drawImage(this.images[this.upgradeLevel], this.position.x-(this.width/2), this.position.y-(this.height/2));
}