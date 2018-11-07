function Square()
{
  // Randomized position

  // Top left corner
  this.x = Math.random()*1024;
  this.y = Math.random()*768;

  //Width and height
  this.w = Math.random()*100;
  this.h = Math.random()*100;

  // Randomized velocity
  this.vx = 4*Math.random()-2;
  this.vy = 4*Math.random()-2;

  this.color = "blue";

  // Render rectangle
  this.render = function(context){

    context.fillStyle = this.color;

    context.fillRect(this.x,this.y,this.w,this.h);
    context.strokeRect(this.x,this.y,this.w,this.h);

  }

  // Move using velocity
  this.move = function() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  this.collision = function(B) {

    // rectangle-rectangle

    // horizontal sides
    var A_Right = this.x+this.w;
    var A_Left = this.x;

    var B_Left = B.x;
    var B_Right = B.x + B.w;

    // Vertical sides
    var A_Bottom = this.y+this.h;
    var A_Top = this.y;

    var B_Top = B.y;
    var B_Bottom = B.y + B.h;

    // TODO have rectangles stop moving and turn red on collision
    // ON MIDTERM PROBABLY!!!!!
    if(B_Bottom < A_Top || A_Right < B_Left || A_Bottom < B_Top || B_Right < A_Left){
      //no collision
      return;
    }else{
      //collision
      this.color = "red";
      this.vx = 0;
      this.vy = 0;
      B.color="red";
      B.vx = 0;
      B.vy = 0;
    }

  }
}
