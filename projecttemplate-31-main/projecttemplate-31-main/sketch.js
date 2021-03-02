const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var umbrella;

function preload(){
    
}

function setup(){
   createCanvas(300,400);
   engine = Engine.create();
    world = engine.world;

   for(var i=0; i<maxDrops; i++){
    //maxDrops.push(new createDrops(random(0,400), random(0,400)));
   }

   umbrella=new Umbrella(200,300);

}

function draw(){
    Engine.update(engine);
    background(0);

    umbrella.display();
    

    drawSprites()
}   

