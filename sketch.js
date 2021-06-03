var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 250);
  
     monkey = createSprite(50,200,20,50);
     monkey.addAnimation("running",  monkey_running);
     monkey.scale = 0.1;

  
     ground = createSprite(200,240,1000,20);
     ground.velocityX = -4; 
     ground.x = ground.width /2;
     console.log(ground.x)
   
  score = 0;
  
}


function draw() {
background("lightblue");
   
    if (ground.x < 0){
      ground.x = ground.width/3;
    }
  
stroke("white");
textSize(16);
fill("white");  
text("Score: "+ score,100,500);  
  
 stroke("black"); 
 textSize(16); 
 fill("black"); 

 var survivalTime = Math.round(frameCount/frameRate()); 
 text("Survival Time "+ survivalTime,240,50); 
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
         }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
   monkey.collide(ground);
  
    
     
  
  if(World.frameCount%100===0){
    
     Banana();
    
  }
  
   if(World.frameCount%200===0){
    
    stone();  
    
  } 
  
  
  drawSprites();
}

function Banana() {
  
  if (frameCount % 60 === 0) {
     banana = createSprite(600,50,40,10);
    banana.y = Math.round(random(100,150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
   banana.velocityX = -3;
    
    banana.lifetime = 300;
   
    }
}


function stone(){
  
  obstacle = createSprite(500,213,20,50);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;

  
}






