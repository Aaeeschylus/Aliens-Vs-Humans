var NormEnemy = function(x, y) {
	this.image = new Image();
	this.image.src = "enemy01.png";
	this.width = 68;
	this.height = 60; 
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, -50);
	this.velocity = new Vector2();
	this.zigZagMean = 0;
	this.left = true;
};


NormEnemy.prototype.update = function(deltaTime)
{
	var mathsSin = (100*(Math.sin(totalTime*70)));
	if (this.ZigZagMovement == true)
	{
		this.position.x = this.zigZagMean + mathsSin;
		this.position.y += 1;
	}
}

NormEnemy.prototype.draw = function()
{
	context.drawImage(this.image, this.position.x - this.width/2, this.position.y - this.height/2);
}
