
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform1,platform2,platform3,platform4;

var blockA11,blockA12,blockA13,blockA14,blockA15,blockA16,blockA17;
var blockA21,blockA22,blockA23,blockA24,blockA25,blockA26,blockA27;
var blockA31,blockA32,blockA33,blockA34,blockA35,blockA36,blockA37;
var blockA41,blockA42,blockA43,blockA44,blockA45,blockA46,blockA47;

var blockB11,blockB12,blockB13,blockB14,blockB15;
var blockB21,blockB22,blockB23,blockB24,blockB25;
var blockB31,blockB32,blockB33,blockB34,blockB35;
var blockB41,blockB42,blockB43,blockB44,blockB45;

var blockC11,blockC12,blockC13;
var blockC21,blockC22,blockC23;
var blockC31,blockC32,blockC33;
var blockC41,blockC42,blockC43;

var blockD11;
var blockD21;
var blockD31;
var blockD41;

var strings;
var stones;

var gameState = 0;
var onSling = 0;
var launched = 1;

var backgroundImg;

function preload()
{
	backgroundImg = loadImage("First_Order.png")
}

function setup() {
	createCanvas(1800, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	platform1 = new platform(540,740,375,15);
	platform2 = new platform(760,330,350,15);
	platform3 = new platform(1500,250,350,15);
  platform4 = new platform(1300,850,350,15);
  
  blockA11 = new blue(400,670);
  blockA12 = new blue(450,670);
  blockA13 = new blue(500,670);
  blockA14 = new blue(550,670);
  blockA15 = new blue(600,670);
  blockA16 = new blue(650,670);
  blockA17 = new blue(700,670);

  blockA21 = new rose(620,270);
  blockA22 = new rose(670,270);
  blockA23 = new rose(720,270);
  blockA24 = new rose(770,270);
  blockA25 = new rose(820,270);
  blockA26 = new rose(870,270);
  blockA27 = new rose(920,270);

  blockA31 = new blue(1150,790);
  blockA32 = new blue(1200,790);
  blockA33 = new blue(1250,790);
  blockA34 = new blue(1300,790);
  blockA35 = new blue(1350,790);
  blockA36 = new blue(1400,790);
  blockA37 = new blue(1450,790);

  blockA41 = new blue(1350,180);
  blockA42 = new blue(1400,180);
  blockA43 = new blue(1450,180);
  blockA44 = new blue(1500,180);
  blockA45 = new blue(1550,180);
  blockA46 = new blue(1600,180);
  blockA47 = new blue(1650,180);

// The second layer.
  blockB11 = new grey(450,600);
  blockB12 = new grey(500,600);
  blockB13 = new grey(550,600);
  blockB14 = new grey(600,600);
  blockB15 = new grey(650,600);

  blockB21 = new gold(670,200);
  blockB22 = new gold(720,200);
  blockB23 = new gold(770,200);
  blockB24 = new gold(820,200);
  blockB25 = new gold(870,200);
  
  blockB31 = new gold(1200,720);
  blockB32 = new gold(1250,720);
  blockB33 = new gold(1300,720);
  blockB34 = new gold(1350,720);
  blockB35 = new gold(1400,720);
  
  blockB41 = new rose(1400,110);
  blockB42 = new rose(1450,110);
  blockB43 = new rose(1500,110);
  blockB44 = new rose(1550,110);
  blockB45 = new rose(1600,110);

// The third layer.
  blockC11 = new rose(500,530);
  blockC12 = new rose(550,530);
  blockC13 = new rose(600,530);

  blockC21 = new blue(720,130);
  blockC22 = new blue(770,130);
  blockC23 = new blue(820,130);

  blockC31 = new rose(1250,650);
  blockC32 = new rose(1300,650);
  blockC33 = new rose(1350,650);

  blockC41 = new grey(1450,40);
  blockC42 = new grey(1500,40);
  blockC43 = new grey(1550,40);

// The last layer
 blockD11 = new gold(550,460);

 blockD21 = new grey(770,60);

 blockD31 = new grey(1300,580);

 blockD41 = new gold(1500,0);

  stones = new stone(160,100,50);

  strings = new Rope(stones.body,{x:150,y:500})

  Engine.run(engine);

  Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  drawSprites();

  platform1.display();
  platform2.display();
  platform3.display();
  platform4.display();

  blockA11.display();
  blockA12.display();
  blockA13.display();
  blockA14.display();
  blockA15.display();
  blockA16.display();
  blockA17.display();

  blockA21.display();
  blockA22.display();
  blockA23.display();
  blockA24.display();
  blockA25.display();
  blockA26.display();
  blockA27.display();

  blockA31.display();
  blockA32.display();
  blockA33.display();
  blockA34.display();
  blockA35.display();
  blockA36.display();
  blockA37.display();

  blockA41.display();
  blockA42.display();
  blockA43.display();
  blockA44.display();
  blockA45.display();
  blockA46.display();
  blockA47.display();

  blockB11.display();
  blockB12.display();
  blockB13.display();
  blockB14.display();
  blockB15.display();
 
  blockB21.display();
  blockB22.display();
  blockB23.display();
  blockB24.display();
  blockB25.display();
 
  blockB31.display();
  blockB32.display();
  blockB33.display();
  blockB34.display();
  blockB35.display();
 
  blockB41.display();
  blockB42.display();
  blockB43.display();
  blockB44.display();
  blockB45.display();


  blockC11.display();
  blockC12.display();
  blockC13.display();

  blockC21.display();
  blockC22.display();
  blockC23.display();

  blockC31.display();
  blockC32.display();
  blockC33.display();

  blockC41.display();
  blockC42.display();
  blockC43.display();
 
  blockD11.display();
  
  blockD21.display();
  
  blockD31.display();

  blockD41.display();

  stones.display();

  textSize(22);
  fill("yellow");
  text(mouseX + ", " + mouseY , mouseX,mouseY);
}



function mouseDragged(){
  if (mouseX >=0 && mouseX < 200 && gameState!=="launched"){
      Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});


  }
}


function mouseReleased(){
  strings.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && gameState === "launched"){

      Matter.Body.setPosition(stones.body,{x:200,y:50})

      strings.attach(stones.body);

     gameState = "onSling";
  }
}