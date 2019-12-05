var trex,trex_running , ground ,ground_image, invisibleGround ;

function preload (){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_image = loadImage("ground2.png")
}
function setup() {
  createCanvas(400, 400);
  trex = createSprite(50,380,20,20);
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5
  ground = createSprite(200,380,400,10)
  ground.addImage("ground",ground_image)
  invisibleGround = createSprite(200,385,400,10)
  invisibleGround.visible = false
  ground.velocityX = -5
  ground.x = ground.width/2
  
}

function draw() {
  background(255);
  if(keyDown("space")){
  trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.8
  if(ground.x < 0){
   ground.x = ground.width/2  
  }
  trex.collide(invisibleGround)
  drawSprites();
}