
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;
var bobObj,bobObj2,bobObj3,bobObj4,bobObj5
var roofObj
var rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj = new Bob(300,550,30);
	bobObj2 = new Bob(150,250,30);
	bobObj3 = new Bob(200,250,30);
	bobObj4 = new Bob(250,250,30);
	bobObj5 = new Bob(300,250,30);
	roofObj = new Roof(300,100,250,20);
	rope1 = new Rope(bobObj.body,roofObj.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObj.display();
  roofObj.display();
  

  drawSprites();
 
}



