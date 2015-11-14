var Bullet = function(x, y)
{
	this.sprite = new Sprite("playerBullet01.png");
	this.sprite.buildAnimation(1, 1, 14, 13, -1, [0]);
	this.sprite.setAnimationOffset(0, 0, 0);
	this.sprite.setLoop(0, false);
	this.width = 14;
	this.shootSet = 4;
	this.height = 17;
	this.position = new Vector2();
	this.position.set(x, y);
	this.velocity = new Vector2();
	this.velocity.set(0, -(this.shootSet * 10000));    
}

Bullet.prototype.update = function(deltaTime)
{
	this.position.y = Math.floor(this.position.y + (0.001 * this.velocity.y));
	this.position.x = Math.floor(this.position.x + (0.001 * this.velocity.x));
} 
Bullet.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x-(this.width/2), this.position.y-(this.height/2));
}
