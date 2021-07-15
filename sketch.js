var bg,bgImage;
var astronaut
var sleep;
var brush;
var gym;
var eat;
var drink
var move;


function preload(){
  bgImage = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadImage("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadImage("eat1.png","eat2.png");
  drink = loadImage("drink1.png","drink2.png");
  move = loadImage("move.png","move1.png");
}


function setup() {
  createCanvas(800,400);

  bg = createSprite(400, 200, 50, 50);
  bg.addImage("bg",bgImage);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(255,255,255);  

  createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.x = astronaut.x + 2;
    astronaut.y = astronaut.y + 2;
  }

  drawSprites();
}