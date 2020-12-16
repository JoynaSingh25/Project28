
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	  img=loadImage("boy.png")
}

function setup() {
	createCanvas(1000,580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(500,580,1000,25)
	tree=new Tree(760,328,0.0000001,0.000001)
	stone= new Stone(155,440,30)
	m1=new Mango(720,170,30)
	m2=new Mango(775,245,30)
	m3=new Mango(800,150,30)
	m4=new Mango(860,230,30)
	m5=new Mango(670,250,30)
  chain=new Slingshot(stone.body,{x:155,y:440})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,100,250);

  textSize(25)
  fill(255)
  textFont("calibri light")
  text("Press Space to get a 2nd chance to play!!!",100,50)

  ground.display();
  tree.display();
  imageMode(CENTER)
  image(img,200,500,130,270)
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  chain.display()
  drawSprites();

  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly()
}

function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:155,y:440});
      Matter.Body.setStaticsetStatic(lstone.body,true);
      
    }
  }