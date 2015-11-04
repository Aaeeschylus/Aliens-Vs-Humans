var NormEnemy = function(x, y) {
	this.image = new Image();
	this.image.src = "enemy01.png";
	this.width = 50;
	this.height = 50; 
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, -50);
	this.velocity = new Vector2();
	this.zigZagMean = 0;
	this.health = 100;
	//1 = left, -1 = right
	this.direction = 0;
};


NormEnemy.prototype.update = function(deltaTime)
{
	
	var mathsSin = (100*(Math.sin(totalTime*70)));
	if (this.ZigZagMovement == true && this.direction == 1)
	{
		this.position.x = this.zigZagMean + mathsSin;
		this.position.y += 1;
	}
	else if (this.ZigZagMovement == true && this.direction == -1)
	{
		this.position.x = this.zigZagMean - mathsSin;
		this.position.y += 1;
	}
	else if(this.angleMovement == true)
	{
		this.position.x += this.velocityX;
		this.position.y += this.velocityY;
	}
	else {
		this.position.y += 2;
	}
}

NormEnemy.prototype.draw = function()
{
	context.drawImage(this.image, this.position.x - 25 , this.position.y - 25 );
}
