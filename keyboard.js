var Keyboard = function() {
	var self = this;
	
	window.addEventListener('keydown', function(evt) {self.onKeyDown(evt);}, false);
	window.addEventListener('keyup', function(evt) {self.onKeyUp(evt);}, false);
	
	this.keyListeners = new Array();
	this.keys = new Array();
	
	this.KEY_SPACE = 32;
	this.KEY_LEFT = 37;
	this.KEY_UP = 38;
	this.KEY_RIGHT = 39;
	this.KEY_DOWN = 40;
	
	this.KEY_0 = 48;
	this.KEY_1 = 49;
	this.KEY_2 = 50;
	this.KEY_3 = 51;
	this.KEY_4 = 52;
	this.KEY_5 = 53;
	this.KEY_6 = 54;
	this.KEY_7 = 55;
	this.KEY_8 = 56;
	this.KEY_9 = 57;
	
	this.KEY_NUM1 = 97;
	this.KEY_NUM2 = 98;
	this.KEY_NUM3 = 99;
	this.KEY_NUM4 = 100;
	
	this.KEY_A = 65;
	this.KEY_D = 68;
	this.KEY_S = 83;
	this.KEY_W = 87;
	this.KEY_SHIFT = 16;
};

//when the onKeyDown event occurs, the value true is given to the keys array indicated by the key's numeric keyCode identifier.
Keyboard.prototype.onKeyDown = function(evt)
{
	this.keys[evt.keyCode] = true;
};

//when the onKeyUp event occurs, the value true is given to the keys array indicated by the key's numeric keyCode identifier.
Keyboard.prototype.onKeyUp = function(evt)
{
	this.keys[evt.keyCode] = false;
};

//check what keys are currently down
Keyboard.prototype.isKeyDown = function(keyCode)
{
	return this.keys[keyCode];
};