function setup() {
  createCanvas(800, 800); // 800 horizontal, 800 up and height
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
  rect(0, 400, width, 100);
  pop();
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
  ellipse(-0, -14, 40, 45);

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
  ellipse(-0, -5, 5);

  // mustache left side
  stroke(0);
  line(-5, -5, -15, -2);
  line(-5, -5, -15, -10);

  // mustache right side
  line(5, -5, 15, -2);
  line(5, -5, 15, -10);
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

// Add gravity to the spaceship by using a variable for the Y-position of the spaceship. We also added velocity and acceleration.
let spaceshipY = 100;
let velocity = 0.5;
const acceleration = 0.1; //It will go faster with each frame.

// Detect the collision between the spaceship and the ground. If the spaceship collides, the game should stop.
let gameState = "start";

// Adding obstacles and they should move to the left.
let barnX = 600;

// LOSE SCREEN
function loseScreen() {
  if (gameState === "lose") {
    fill(0, 0, 0, 150);
    rect(0, 0, 700, 700);
  }
}
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
  //Center here
  spaceship(100, spaceshipY);
  loseScreen();

  if (gameState === "game") {
  }
  spaceshipY = spaceshipY + speed;
  speed = speed + acceleration;

  // CONTROLS, when mouse is pressed the spaceship will brake and then move up, accelerate.
  if (mouseIsPressed) {
    speed = speed - 0.2;
  }

  // Spaceship Collision, if the spaceship is greater than 200 (the ground start X-coordinate) it will automatically collide.
  if (spaceshipY > 200) {
    gameState = "lose";
    console.log("Game Over");
  }
}
console.log(gameState);

function mouseClicked() {
  if (gameState === "start" || gameState === "lose") {
    gameState = "game";
    spaceshipY = 100;
    speed = 0.5;
  }
}
