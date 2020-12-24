gamestate=1

function setup() { 
  createCanvas(1300,500); 
 ground= createSprite(650, 500-20, 1300,40)
 platform= createSprite(20, 335, 80, 250)
 player=createSprite(20,135,50,50)
 player.shapeColor="red"

 platform1= createSprite(190, 385, 80, 150)
 platform1.shapeColor="green"
 platform2= createSprite(320, 235, 80, 50)
 platform2.shapeColor="lime"
 platform3= createSprite(500, 385, 80, 150)
 platform3.shapeColor="yellow"
 platform4= createSprite(800, 335, 80, 250)
 platform4.shapeColor="orange"
 platform5= createSprite(1100, 235, 120, 50)
 platform5.shapeColor="blue"

 weapon1=createSprite(1250, 430, 50, 50); 

 coin1= createSprite(280, 480-70, 10,10)
 coin2= createSprite(340, 480-70, 10,10)
 coin3= createSprite(400, 480-70, 10,10)

 villian1=createSprite(560,480-35,10,10) //insect
 villian1.velocityX=3;
 
 coin4= createSprite(580, 480-70, 10,10)
 coin5= createSprite(640, 480-70, 10,10)
 coin6= createSprite(700, 480-70, 10,10)

 villian2=createSprite(830,180,10,40) //cactus
 villian3=createSprite(1000,240,10,40)  //honeybee
 villian3.velocityX=3.8

 exitgate1=createSprite(1290,250,10,500) 
}

function draw(){
  background(222);
  if(keyDown("space") && player.y>=150){
    player.velocityY=-10;
  }
  player.velocityY+=0.8;
  
  player.collide(platform)
  
  player.collide(ground)

  if(keyDown("left")){
   player.x-=2;
    
  }
  if(keyDown("right")){
    player.x+=8;
    
  }
  if(gamestate===1)
  {
    player.collide(platform1)
    player.collide(platform2)
    player.collide(platform3)
    player.collide(platform4)
    player.collide(platform5)

  villian1.bounceOff(platform3)
  villian1.bounceOff(platform4)

  villian3.bounceOff(platform5)
  villian3.bounceOff(platform4)

}
  if(player.isTouching(exitgate1)){
    gamestate=2;
    platform1.destroy();
    platform2.destroy();
    platform3.destroy();
    platform5.destroy();
    platform4.destroy();

    villian1.destroy();
    villian2.destroy();
    villian3.destroy();

    exitgate1.destroy();
    coin1.destroy();
    coin2.destroy();
    coin3.destroy();
    coin4.destroy();
    coin5.destroy();
    coin6.destroy();
    weapon1.destroy();

    player.x=20;
    player.y=135;
    
  }

  if(gamestate===2){
    
  }
  drawSprites();
}