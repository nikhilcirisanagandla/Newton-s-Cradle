const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;




var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    roof = new Roof(400,50,600,50)
    bob1 = new Bob(200,300);
    bob2 = new Bob(300,280);
    bob3 = new Bob(400,260);
    bob4 = new Bob(500,240);
    bob5 = new Bob(600,220);

    rope1 = new Rope(bob1.body,{x:200, y:40})
    rope2 = new Rope(bob2.body,{x:300, y:40})
    rope3 = new Rope(bob3.body,{x:400, y:40})
    rope4 = new Rope(bob4.body,{x:500, y:40})
    rope5 = new Rope(bob5.body,{x:600, y:40})



}


function draw() {
  
  background(255);
  Engine.update(engine);
  roof.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

}


function keyPressed() {
  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-450})
  }}
    
    
    

