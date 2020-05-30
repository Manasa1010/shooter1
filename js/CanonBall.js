class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
  };

  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    translate(pos.x,pos.y);
    push();
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    fill("brown");
    pop();
  };
};
