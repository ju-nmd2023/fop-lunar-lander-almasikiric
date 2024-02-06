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

  // THE SHIP (black part)
  fill(0, 0, 0);
  ellipse(0, 10, 100, 250);

  // ENGINE

  // BUNNY EARS
  //white part of bunny ears
  stroke(0);
  fill(255, 255, 255, 200);
  ellipse(10, -50, 15, 36);
  ellipse(-12, -50, 15, 36);

  //pink part
  fill(255, 100, 170);
  ellipse(-12, -50, 10, 27);
  ellipse(10, -50, 7.5, 27);
  fill(255, 255, 255, 160);

  //FACE OF THE BUNNY
  push();
  fill(255, 255, 255, 200);
  ellipse(-0.8, -14, 40, 45);

  // white part, eyes
  fill(255);
  ellipse(-7, -20, 9, 13);
  ellipse(7, -20, 9, 13);

  //pupils
  fill(0);
  ellipse(-7, -20, 5.5);
  ellipse(7, -20, 5.5);

  // mouth
  fill(255, 100, 170);
  ellipse(-0.8, -5, 5);

  // mustache left side
  stroke(0);
  line(-5, -5, -15, -2);
  line(-5, -5, -15, -10);

  // mustache right side
  line(4.5, -4, 13.2, -1);
  line(4, -5, 15, -10);
  pop();

  // Glass dome
  stroke(0);
  beginShape();
  vertex(-50, 0);
  bezierVertex(-50, 12.5, 50, 12.5, 50, 0);
  bezierVertex(50, -100, -50, -100, -50, 0);
  endShape();
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

    // Spaceship Collision, if the spaceship is greater than 200 (the ground start X-coordinate) it will automatically collide.
    if (spaceshipY > 200) {
      gameIsRunning = false;
      console.log("Game Over");
    }
  }
}
