var Enemy = function(x, y) {
	// this.sprite = new Sprite("enemysheet.png");
	// this.sprite.buildAnimation(3, 4, 100, 100, 0.1, 
	// [3, 4, 5]);
	// this.sprite.buildAnimation(3, 4, 100, 100, 0.1,
	// [6, 7, 8]);
	
	// for(var i=0; i<ENEMY_ANIM_MAX; i++)
	// {
		// this.sprite.setAnimationOffset(i, -30, -30);
	// }
	this.image = new Image();
	this.image.src = "enemy01.png";
	this.width = 68;
	this.height = 60; 
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	this.velocity = new Vector2();
};
 
Enemy.prototype.update = function(deltaTime)
{
	
}

Enemy.prototype.draw = function()
{
	context.drawImage(this.image, SCREEN_WIDTH/2 - this.width/2, SCREEN_HEIGHT/2 - this.height/2);
}

// Enemy.prototype.draw = function()
// {
	// this.sprite.draw(context, this.position.x - worldOffsetX, this.position.y - worldOffsetY);
// }