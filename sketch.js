var starship1;

function setup() {
  createCanvas(320, 240);
  starship1 = new Starship(10, 2, 30);
}

function draw() {
  background(0);
  starship1.display();
  starship1.move();
}

function Starship(tempWingspan, tempSpeed, tempXPosition) {

  this.wingspan = tempWingspan;
  this.speed = tempSpeed;
  this.xPosition = tempXPosition;
  var ey = 0;

  this.display = function() {
    ellipse(this.xPosition, ey, this.wingspan);
  };

  this.move = function() {
    ey = ey + this.speed;
  };

}
