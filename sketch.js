
var monkey , monkey_running, ground, groundImage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(40,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(100,350,800,10);
  ground.velocityX = -4;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {  
  background("white");
  
  text("Surival time: " + Math.ceil(frameCount/frameRate()), 175, 10)
  
  if(keyDown("space") && monkey.y < 316 && monkey.y > 314){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY += 0.5;
      
  if(ground.x < 0){
    ground.x = 350;
  }
  
  monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(400,100,20,20);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    
    banana.y = Math.round(random(120,200));
    
    banana.velocityX = -6;
    banana.lifetime = 150;
    
    FoodGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount % 300 === 0){
    var stone = createSprite(400,315,50,50);
    stone.addImage("stone", obstacleImage);
    stone.scale = 0.2;
    
    stone.velocityX = -6;
    stone.lifetime = 150;
    
    obstacleGroup.add(stone);
  }
}



