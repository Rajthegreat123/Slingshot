class Block {
  constructor(x,y,width,height) {
    var options = {
      isStatic: false
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.color = color(random(0, 255), random(0, 255), random(0, 255))
  World.add(world, this.body);

  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(4);  
    stroke(51);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
    }
};
