function Irregular(complexity)
{
  // Randomized position points
  this.complexity = 4*complexity;
  this.points = [];

  for(var i=0;i<this.complexity;i++){
    this.points.push(
      [
        Math.random()*1024,
        Math.random()*768
      ]
    );
  }

  // Randomized velocity
  this.vx = 4*Math.random()-2;
  this.vy = 4*Math.random()-2;

  this.color = "blue";

  // Render randomized curve
  this.render = function(context){

    context.strokeStyle = this.color;
    context.lineWidth = 6;

    context.beginPath();
    context.moveTo((this.points[0])[0],(this.points[0])[1]);

    for(var i =1;i<this.complexity-3;i+=3)
    {
      context.bezierCurveTo(
        (this.points[i])[0],
        (this.points[i])[1],
        (this.points[i+1])[0],
        (this.points[i+1])[1],
        (this.points[i+2])[0],
        (this.points[i+2])[1]
      );
      context.stroke();
    }
  }

  // Move curve
  this.move = function() {

    for(var i =0;i<this.complexity;i++)
    {
      this.points[i][0] = this.points[i][0]+this.vx;
      this.points[i][1] = this.points[i][1]+this.vy;
    }
  }
}
