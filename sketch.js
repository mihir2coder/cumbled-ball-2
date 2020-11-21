
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 Matter.Body.applyForce


var leftwall,rightwall,bottomfloor;
var ball1




function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
  world = engine.world;
var optionsw={
  isStatic:true
}
 
  leftwall=Bodies.rectangle(800,600,20,200,optionsw)
  rightwall=Bodies.rectangle(1100,600,20,200,optionsw)
  bottomwall=Bodies.rectangle(950,680,300,20,optionsw)
  World.add(world,leftwall)
  World.add(world,rightwall)
  World.add(world,bottomwall)
  ball1= new ball(200,200,20)
  ground= new Ground(600,700,1200,20);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  

  
  rect(leftwall.position.x,leftwall.position.y,20,200)
  rect(rightwall.position.x,rightwall.position.y,20,200)
  rect(bottomwall.position.x,bottomwall.position.y,300,20)
  ball1.display();
  ground.display();
 

 
  
  
 
}
function keyPressed(){
  if (keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});

  }
}


