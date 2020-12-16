
class Mango{
  constructor(x,y,r) {
      var options = {
          isStatic:true,
          restitution:0.8,
          friction:1.0,
          
      }
      this.x=x;
      this.y=y;
      this.r=r
      this.body=Bodies.circle(this.x, this.y, this.r, options)
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);ellipseMode(CENTER);
      image(this.image, 0, 0, this.r*2,this.r*2);
      pop();
    }
}
