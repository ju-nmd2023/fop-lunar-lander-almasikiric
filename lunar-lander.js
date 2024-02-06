function setup() {
  createCanvas(800, 300); // 800 horizontal, 300 up and height
  background(255, 255, 255);
}

// Initialize a scenery function.
function scenery() {
  push();
  noStroke();
  // Draw the sky
  fill("lightblue");
  rect(0, 0, width, height);

  // Draw the ground
  fill("green");
  rect(0, 200, width, 100);
  pop();
}

//Starts/pushes the function
function draw() {
  scenery();
}

//Spaceship, x and y coordinates as parametres and movement.

function ufo(x, y) {
  push();
  translate(x, y);

  // Saucer (red part)
  fill(255, 0, 0);
  ellipse(0, 0, 80, 30);

  // Glass dome
  fill(255, 255, 255, 160);
  beginShape();
  vertex(-20, 0);
  bezierVertex(-20, 5, 20, 5, 20, 0);
  bezierVertex(20, -40, -20, -40, -20, 0);
  endShape();
  pop();
}

//Access the function
function draw() {
  scenery();
  ufo(100, 100);
}

// Add gravity to the UFO by using a variable for the Y-position of the UFO. We also added velocity and acceleration.
let ufoY = 100;
let velocity = 0.5;
const acceleration = 0.1; //It will go faster with each frame.

function draw() {
  scenery();
  ufo(100, ufoY);

  ufoY = ufoY + velocity;
  velocity = velocity + acceleration;
}

// The spaceship should eventually accelerate when clicking the mouse.
function draw() {
  scenery();
  ufo(100, ufoY);

  ufoY = ufoY + velocity;
  velocity = velocity + acceleration;

  // CONTROLS, when mouse is pressed the UFO will brake and then move up, accelerate.
  if (mouseIsPressed) {
    velocity = velocity - 0.45;
  }
}

// Detect the collision between the UFO and the ground. If the UFO collides, the game should stop.
let = gameIsRunning = true;

// Copied from last step
function draw() {
  scenery();
  ufo(100, ufoY);

  if (gameIsRunning === true) {
    ufoY = ufoY + velocity;
    velocity = velocity + acceleration;

    // CONTROLS, when mouse is pressed the UFO will brake and then move up, accelerate.
    if (mouseIsPressed) {
      velocity = velocity - 0.2;
    }

    // UFO Collision, if the UFO is greater than 200 (the ground start X-coordinate) it will automatically collide.
    if (ufoY > 200) {
      gameIsRunning = false;
      console.log("Game Over");
    }
  }
}

// Adding obstacles and they should move to the left.
let barnX = 600;

function barn(x, y) {
  push();
  translate(x, y);
  fill("brown");
  rect(0, 0, 100, 60);
  pop();
} //Do not forget the curly bracket
// Copied from last step
function draw() {
  scenery();
  barn(barnX, 160);
  ufo(100, ufoY);

  if (gameIsRunning === true) {
    barnX = barnX - 2;

    if (barnX < -100) {
      barnX = width;
    }
    ufoY = ufoY + velocity;
    velocity = velocity + acceleration;

    // CONTROLS, when mouse is pressed the UFO will brake and then move up, accelerate.
    if (mouseIsPressed) {
      velocity = velocity - 0.2;
    }

    // UFO Collision, if the UFO is greater than 200 (the ground start X-coordinate) it will automatically collide.
    if (ufoY > 200) {
      gameIsRunning = false;
      console.log("Game Over");
    }
  }
}
