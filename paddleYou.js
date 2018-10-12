function paddleYou() {
  
  this.h = 150;
  this.w = 20;
  this.x = 20;
  this.y = height/2 - this.h/2
  this.speed = 3;
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
  
  this.move = function() {
    if(keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
  }
  
}
