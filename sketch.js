
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bg;
var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14,mango15,mango16,mango17,mango18,mango19,mango20,mango21,mango22,mango23,mango24,mango25;
var world,boy;
var sling_Shot;
var number = 0;
var count = 0;



function preload(){
  bg=loadImage("Images/bg.jpg")
	boy=loadImage("Images/boy.png");
  }

function setup() {
	createCanvas(1500, 617);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(200,500,22); 


  mango1=new mango(800,240,30)
  mango2=new mango(830,178,30)
  mango3=new mango(860,260,30)
  mango4=new mango(890,200,30)
  mango5=new mango(920,200,30)
  mango6=new mango(920,130,30)
  mango7=new mango(935,67,25)
  mango8=new mango(1000,180,30)
  mango9=new mango(1000,110,30)
  mango10=new mango(1080,40,30)
  mango11=new mango(1065,120,30)
  mango12=new mango(1125,100,30)
  mango13=new mango(1075,190,30)
  mango14=new mango(1100,250,32)
  mango15=new mango(1000,54,30)
  mango16=new mango(990,240,30)
  mango17=new mango(1135,195,25)
  mango18=new mango(1182,140,30)
  mango19=new mango(928,267,32)
  mango20=new mango(1250,260,30)
  mango21=new mango(1170,236,30)
  mango22=new mango(1200,190,25)
  mango23=new mango(1260,196,30)
  mango24=new mango(934,218,25)
  mango25=new mango(1037,246,26)
  

	treeObj=new tree(1020,610);
	groundObject=new ground(width/2,615,width,20)
  sling_Shot = new SlingShot(stoneObj.body,{x:240,y:425});
	Engine.run(engine);
}

function draw() {

  background(bg);
  fill(rgb(0,number , 0));
  
  count=count+5;
  if (count<=255) {
      number=number+5;
  }
  else if (count<=510){
    number=number-5;
  }
  else if (count>510) {
    count=0;
  }
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display(); 
  mango21.display(); 
  mango22.display(); 
  mango23.display(); 
  mango24.display(); 
  mango25.display(); 

  stoneObj.display();
  groundObject.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
  detectollision(stoneObj,mango13);
  detectollision(stoneObj,mango14);
  detectollision(stoneObj,mango15);
  detectollision(stoneObj,mango16);
  detectollision(stoneObj,mango17);
  detectollision(stoneObj,mango18);
  detectollision(stoneObj,mango19);
  detectollision(stoneObj,mango20);
  detectollision(stoneObj,mango21);
  detectollision(stoneObj,mango22);
  detectollision(stoneObj,mango23);
  detectollision(stoneObj,mango24);
  detectollision(stoneObj,mango25);


  sling_Shot.display(); 
  //text(mouseX+","+mouseY,mouseX,mouseY);
}

 function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
    sling_Shot.release();
  }

  function keyPressed(){
    if(keyCode===32){
      Matter.Body.setPosition(stoneObj.body,{x:235,y:500})
      sling_Shot.attach(stoneObj.body);
      }  
    }


  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }