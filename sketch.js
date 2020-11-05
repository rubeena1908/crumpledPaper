var  packageSprite,paper,dustbin;
var packageBody,ground,ground1,ground2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paper=loadImage("paper.png");
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,

	}

	packageSprite=createSprite(-50, 80, 60,60);
	packageSprite.addImage("paper");
	packageSprite.velocityX=7;
	packageSprite.velocityY=-7;
    
	groundSprite=createSprite(700,690, 200,20);
	groundSprite.addImage("dustbin");
	groundSprite.shapeColor=color("red")
	ground1Sprite=createSprite(790, height-35, 20,100);
	ground1Sprite.shapeColor=color("red")
	ground2Sprite=createSprite(610, height-35, 20,100);
	ground2Sprite.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;
	
	
	packageBody = Bodies.circle(50, 650 ,30, {options},{maxSides});
	packageBody.velocityX=7;
	packageSprite.velocityY=-7;
	World.add(world, packageBody);
	ground3Sprite=Bodies.rectangle(300, 700, 800,10,{isStatic:true});
	ground3Sprite.shapeColor="red";
	World.add(world,ground3Sprite);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	ground.shapeColor="red";
 	World.add(world, ground);
	ground1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	ground1.shapeColor="red";
    World.add(world, ground1);
    ground2 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	ground2.shapeColor="red";
	World.add(world, ground2);
	ground3 = Bodies.rectangle(800, 350, 200, 20 , {isStatic:true} );
	ground3.shapeColor="red";
 	World.add(world, ground3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  packageSprite.velocityX=packageBody.velocityX;
  
  
  drawSprites();
  keyPressed(packageBody,Body);
}
function keyPressed(){
	Matter.Body.applyForce(packageBody,packageBody.position, force -{x:85,y:-85});
}


