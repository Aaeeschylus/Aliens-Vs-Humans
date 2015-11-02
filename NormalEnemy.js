var NormEnemy = function(x, y) {
	this.image = new Image();
	this.image.src = "enemy01.png";
	this.width = 68;
	this.height = 60; 
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, 10);
	this.velocity = new Vector2();
	this.i = 0;
	this.left = true;
};
 var totalTime = 0;
NormEnemy.prototype.update = function(deltaTime)
{
	
	totalTime = totalTime + deltaTime;
	var oldPosX = this.position.x;
	if (this.ZigZagMovement == true)
	{
			// while(this.i<10)
			// {
				//this.position.x = 320 + (40*(Math.sin(totalTime*3)));
				this.position.x = 320 + (40*(Math.sin(totalTime*3)));
				this.position.y += 3;
				// this.i += 1
			// }
			// if( this.i > 9)
			// {
				// this.i = 0;
			// }
	}
}

NormEnemy.prototype.draw = function()
{
	context.drawImage(this.image, this.position.x - this.width/2, this.position.y - this.height/2);
}
