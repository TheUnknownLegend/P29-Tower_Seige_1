
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform1,platform2,platform3,platform4;

var backgroundImg;

function preload()
{
	backgroundImg = loadImage("First_Order.png")
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	platform1 = new platform(540,780,350,15);
	platform2 = new platform(760,330,350,15);
	platform3 = new platform(1300,650,350,15);
	platform4 = new platform(1400,250,350,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  drawSprites();

  platform1.display();
  platform2.display();
  platform3.display();
  platform4.display();

 
  textSize(22);
  fill("yellow");
  text(mouseX + ", " + mouseY , mouseX,mouseY);
}



