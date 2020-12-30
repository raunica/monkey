
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0;

var foodGroup;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bannanaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(40,360,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,400,600,20);
  
  score = 0;
}


function draw() {
background(100);
  
  if (ground.x < 110){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 350) {
        monkey.velocityY = -18;
    }
  score = score + Math.round(getFrameRate()/61);
  
  ground.velocityX = -(4 + 3* score/100);
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("cyan");
  text(": "+ score, 230,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time",100,50);
  
  createObstacle();
  createFood();
  drawSprites();
}

function createFood(){
  if(frameCount % 80 === 0){
    var food = createSprite(420,200,20,20);
    food.y = Math.round(random(120,200));
    food.addImage(bannanaImage);
    food.velocityX = -4;
    food.lifetime = 120;
    food.scale = 0.09;

  }
 }

function createObstacle(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(420,375,20,20);
    obstacle.velocityX= -5;
    obstacle.liftetime = 120;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
  }
}


