var BOSS01 = function(x, y) {
	this.sprite = new Sprite("boss1.png");
	this.sprite.buildAnimation(1, 4, 524, 172, 0.01, 
	[0, 1, 2, 3]);
	this.width = 524;
	this.height = 172; 
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2 - this.width/2 , -180 - this.height/2);
	this.velocity = new Vector2();
	this.health = 10000;
	this.shootTimer = 0;
	this.dead = false;
	this.spawn == false;
};

var ENEMY_ANIMATION = 0;
var ENEMY_ANIM_MAX = 1;

BOSS01.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
	
	var deltaTime = getDeltaTime();
	totalTime = totalTime + deltaTime;
	
	if (this.spawn == true && this.position.y <= 150)
	{
		this.position.y += 1;
	}
	else if( this.spawn == true && this.position.y == 151)
	{
		this.spawn = false;
	}

	if (this.spawn == false)
	{
		this.position.y = SCREEN_HEIGHT/2 - this.height/2 + (400*(Math.cos(totalTime*10)));;
	
		this.position.x = SCREEN_WIDTH/2 - this.width/2 + (200*(Math.sin(totalTime*10)));
	}
	
	if(this.sprite.currentAnimation != ENEMY_ANIMATION)
	{
		this.sprite.setAnimation(ENEMY_ANIMATION);
	}
	
}

BOSS01.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x , this.position.y);
}

