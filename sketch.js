
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    groundSprite=createSprite(width/2, height-28, width,14);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	

	box1 = new Box(550,620,20,100);
	box2 = new Box(750,620,20,100);
	box3=new Box(650,670,220,17);

	paperObject=new Paper(100,650,15)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
  paperObject.display();
  box1.display();
  box2.display();
  box3.display();
  KeyPressed();
  console.log()
 
}
function KeyPressed(){
	if(keyCode ===32){
Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});
}}



