var Player = function() {
	
	this.images = [];
	this.images[0] = new Image();
	this.images[0].src = "ship01.png";
	this.images[1] = new Image();
	this.images[1].src = "ship02.png"
	this.images[2] = new Image();
	this.images[2].src = "ship03.png"
	this.images[3] = new Image();
	this.images[3].src = "ship04.png"
	this.images[4] = new Image();
	this.images[4].src = "ship05.png"
	this.images[5] = new Image();
	this.images[5].src = "ship06.png"
	this.images[6] = new Image();
	this.images[6].src = "ship07.png"
	this.images[7] = new Image();
	this.images[7].src = "ship08.png"
	this.images[8] = new Image();
	this.images[8].src = "ship09.png"
	this.images[9] = new Image();
	this.images[9].src = "ship10.png";
	
	this.upgradeLevel = 0;
	
	this.position = new Vector2();
	this.position.set( 70, 70 );
	this.width = 44;
	this.height = 49;
	this.velocity = new Vector2();
	this.cooldownTimer = 0;
};

Player.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) 
	{
		if(this.upgradeLevel != 9)
		{	
		this.upgradeLevel += 1;
		}
	}
	else if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		if(this.upgradeLevel != 0)
		{
		this.upgradeLevel -= 1;
		}
	}
	
}


Player.prototype.draw = function()
{
	context.drawImage(this.images[this.upgradeLevel], this.position.x, this.position.y);
}