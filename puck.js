function puck() {
  
  this.x = width/2;
  this.y = height/2;
  this.r = 20;
  
  this.xspeed = random(3, 5);
  this.yspeed = random(3, 7);
  
  this.reset = function() {
    this.x = width/2;
    this.y = height/2;
    this.xspeed = random(3, 5);
    this.yspeed = random(3, 7);
  }
  
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.move = function() {
    this.x += this.xspeed; 
    this.y += this.yspeed;
  }
  
  this.bounceOffWall = function() {
    if(this.y < 0 || this.y > height) {
      this.yspeed = -this.yspeed;
    } 
  }
  
  this.crossEdge = function() {
    if(this.x + this.r > width) {
      this.reset();
      scoreYou ++;
    }
    else if (this.x - this.r < 0){
      this.reset();
      scoreComputer ++;
    }
  }
  
  this.bounceOffPaddle = function() {
    if(this.x + this.r > paddleComputer.x &&
       this.y <= paddleComputer.y + paddleComputer.h &&
       this.y >= paddleComputer.y){
       this.xspeed = -this.xspeed;
     }
      else if (this.x - this.r < paddleYou.x + paddleYou.w &&
       this.y <= paddleYou.y + paddleYou.h &&
       this.y >= paddleYou.y){
       this.xspeed = -this.xspeed;
      }
  }
}
