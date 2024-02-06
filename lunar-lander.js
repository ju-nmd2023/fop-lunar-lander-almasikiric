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

function spaceship(x, y) {
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
  spaceship(100, 100);
}

// Add gravity to the spaceship by using a variable for the Y-position of the spaceship. We also added velocity and acceleration.
let spaceshipY = 100;
let velocity = 0.5;
const acceleration = 0.1; //It will go faster with each frame.

function draw() {
  scenery();
  spaceship(100, spaceshipY);

  spaceshipY = spaceshipY + velocity;
  velocity = velocity + acceleration;
}

// The spaceship should eventually accelerate when clicking the mouse.
function draw() {
  scenery();
  spaceship(100, spaceshipY);

  spaceshipY = spaceshipY + velocity;
  velocity = velocity + acceleration;

  // CONTROLS, when mouse is pressed the spaceship will brake and then move up, accelerate.
  if (mouseIsPressed) {
    velocity = velocity - 0.45;
  }
}

// Detect the collision between the spaceship and the ground. If the spaceship collides, the game should stop.
let = gameIsRunning = true;

// Copied from last step
function draw() {
  scenery();
  spaceship(100, spaceshipY);

  if (gameIsRunning === true) {
    spaceshipY = spaceshipY + velocity;
    velocity = velocity + acceleration;

    // CONTROLS, when mouse is pressed the spaceship will brake and then move up, accelerate.
    if (mouseIsPressed) {
      velocity = velocity - 0.2;
    }

    // spaceship Collision, if the spaceship is greater than 200 (the ground start X-coordinate) it will automatically collide.
    if (spaceshipY > 200) {
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
  spaceship(100, spaceshipY);

  if (gameIsRunning === true) {
    barnX = barnX - 2;

    if (barnX < -100) {
      barnX = width;
    }
    spaceshipY = spaceshipY + velocity;
    velocity = velocity + acceleration;

    // CONTROLS, when mouse is pressed the spaceship will brake and then move up, accelerate.
    if (mouseIsPressed) {
      velocity = velocity - 0.2;
    }

    // Spaceship collision, if the spaceship is greater than 200 (the ground start X-coordinate) it will automatically collide.
    if (spaceshipY > 200) {
      gameIsRunning = false;
      console.log("Game Over");
    }
  }
}
