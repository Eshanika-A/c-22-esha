const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground,ball;
function setup() {
  createCanvas(400,400);
  myEngine= Engine.create()//myEngine.world
  myWorld=myEngine.world;

  var ground_options={
      isStatic:true
  }

   ground= Bodies.rectangle(200,390,400,10,ground_options);
    World.add(myWorld,ground);
//console.log(ground.position)

var ball_options={
  restitution: 1
}

ball= Bodies.circle(200,200,50,ball_options);
World.add(myWorld,ball);
}

function draw() {
  background("pink"); 
  Engine.update(myEngine);
  rectMode(CENTER); 
  fill("brown")
  rect(ground.position.x,ground.position.y,400,50);
  fill("cyan");
  circle(ball.position.x,ball.position.y,50)

}