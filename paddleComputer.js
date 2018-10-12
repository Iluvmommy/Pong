function paddleComputer() {
  
  this.h = 150;
  this.w = 20;
  this.x = width - 40;
  this.y = height/2 - this.h/2
  this.speed = 0.5;
  this.center = this.y + this.h/2
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
  
  this.move = function() {
     if (Puck.y > this.center) {
         this.y = lerp(this.center, Puck.y, this.speed);
     }
     else if (Puck.y < this.center) {
         this.y = lerp(this.center, Puck.y, this.speed);
     }
  }
  
}
