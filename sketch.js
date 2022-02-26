let slider;
let started = false;
let angle = 0;
let drop = 1;
let dropSpeed = 1;
let angleMinus = 0.5;
let dropMinus = 0.5;

function setup() {
  createCanvas(400, 400);
  frameRate(24);
  slider = createSlider(0, 360, 0);
  slider.position(10, 10);
  slider.style('width', '80px');
  button = createButton('start simulation');
  button.position(10, 40);
  button.mousePressed(startSimulation);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  if(!started){
    angle = slider.value();
    lastAngle = angle;
    rotate(angle);
    rect(-7/2, 0, 7, 42);
  }
  if(started){
    rotate(angle);
    rect(-7/2, 0, 7, 42);
    if (angle > 180){
      angle = angle - 360;
    }
    if (angle < -180){
      angle = angle + 360;
    }
    if (angle == 180 || angle == 0 && dropSpeed == 0){
    }
    else {
      if (angle < 0 || lastAngle < -1){
        lastAngle = angle;
        dropSpeed -= drop;
        dropSpeed += dropMinus;
        angle -= dropSpeed;
        angle += angleMinus;
      }
      if (angle > 0 || lastAngle > 1){
        lastAngle = angle;
        dropSpeed += drop;
        dropSpeed -= dropMinus;
        angle -= dropSpeed;
        angle -= angleMinus;
      }
    }
  }
}

function startSimulation() {
  started = true;
}