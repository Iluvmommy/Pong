var Puck;
var paddleComputer;
var paddleYou;
var scoreYou = 0;
var scoreComputer = 0;

function setup() {
  createCanvas(850, 550);
  Puck = new puck();
  paddleComputer = new paddleComputer();
  paddleYou = new paddleYou();
}

function draw() {
  background(0);
  stroke(255);
  textSize(30);
  text(scoreYou, 30, 30);
  text(scoreComputer, width-45, 30);
  line(width/2, 0, width/2, height);
  
  Puck.show();
  Puck.move();
  Puck.bounceOffWall();
  Puck.crossEdge();
  Puck.bounceOffPaddle();
  
  paddleComputer.show();
  paddleComputer.move();
  
  paddleYou.show();
  paddleYou.move();
  
  
}
