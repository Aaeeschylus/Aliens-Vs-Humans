var Player = function() {
	this.lives = 3;
	this.image = new Image();
	this.image.src = "player_ship.png";
	this.position = new Vector2();
	this.position.set( SCREEN_WIDTH/2, SCREEN_HEIGHT - 100 );
	this.width = 68;
	this.height = 58;
	this.cooldownTimer = 0;
};

Player.prototype.update = function(deltaTime)
{	
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
			sfxFire.play();
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
			sfxFire.play();
		}
	}
}


Player.prototype.draw = function()
{
	context.drawImage(this.image, this.position.x-(this.width/2), this.position.y-(this.height/2));
}