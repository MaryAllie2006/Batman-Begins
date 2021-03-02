class Umbrella {
    constructor(x,y){
        var options = { 
            isStatic:true,
          }
          this.body=Bodies.circle(x, y, options);
          this.x;
          this.y;
          this.image=loadImage("Walking Frame/walking_1.png");
          World.add(world,this.body);
        }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y+70,300,300);
    }
}