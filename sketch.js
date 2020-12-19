var car,wall
var speed,weight



function setup() {
  createCanvas(800,400);
  car=createSprite(100,200,50,100);
  wall=createSprite(700,200,100,400)
  wall.shapeColor=black
  speed=random(50,90)
  weight=random(400,1500)
  car.velocityX=speed
}

function draw() {
  background("white")
  if(wall.X-car.X<car.width/2+car.width/2){
    car.velocityX=0
    deformation=0.5  * weight * speed * speed/22509
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
    }

    if(deformation<100){
      car.shapeColor="green"
    }

  }
  drawSprites();
}