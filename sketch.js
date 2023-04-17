var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  

  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  drawSprites();
  
rabbit.x = World.mouseX

 select_sprites = Math.round(random(1,3));

  if(frameCount % 60 == 0){
    if (select_sprites == 1){
      criarMaças();
    } else if (select_sprites == 2) {
      folhasLaranjas();
    } else {
      folhasVermelhas();
    }

  }
}

function criarMaças(){
maça = createSprite(random(50, 350), 00, 10, 10)
maça.addImage(appleImg)
maça.scale = 0.06
maça.velocityY = 4
maça.lifetime = 150
}

function folhasLaranjas(){
  laranja = createSprite(random(50, 350), 00, 10, 10)
  laranja.addImage(orangeImg)
  laranja.scale = 0.06
  laranja.velocityY = 4
  laranja.lifetime = 150
  }

  function folhasVermelhas(){
    vermelha = createSprite(random(50, 350), 00, 10, 10)
    vermelha.addImage(redImg)
    vermelha.scale = 0.06
    vermelha.velocityY = 4
    vermelha.lifetime = 150
    }