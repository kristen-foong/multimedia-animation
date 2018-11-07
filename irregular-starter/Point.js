function Point()
{
	// Randomized position
	this.x = Math.random()*1024;
	this.y = Math.random()*768;

	// Randomized velocity
	this.vx = 2*Math.random()-1;
	this.vy = 2*Math.random()-1;

	this.color = "red";

	// Render point with radius 7
	this.render = function(context){

		context.fillStyle = this.color;

		context.beginPath();
		context.arc(this.x, this.y,7,0,2*Math.PI);
		context.fill();

	}

	// Move using velocity
	this.move = function() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}

	// Collision between point and irregular shape
	this.collision = function(context)
	{
		// TODO collision when arrive at point where something has been drawn already
		//get pixel data that has been drawn to canvas
		var pixelData = context.getImageData(this.x, this.y, 1,1).data;
		//pixelData gets back rgba values (r,g,b,a) where a is transparency
		if(pixelData[3] != 0){
			//collision occurs
			this.vx = 0;
			this.vy = 0;
			this.color = "yellow";
		}
	}
}
