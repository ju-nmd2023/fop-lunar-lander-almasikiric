function setup() {
  createCanvas(600, 1000); // 600 x horizontal, 1000 up and height
}

// THE BACKGROUND
function scenery() {
  push();
  noStroke();
  // Draw the sky
  fill(143, 207, 255);
  rect(0, 0, width, 200);
  fill(159, 214, 255);
  rect(0, 150, width, 300);

  // Draw the ground
  fill(39, 174, 96);
  rect(0, 350, width, 200);
  pop();
}

// Accesses the funtion scenery so it draws on the canvas.
function drawBunny(bunnyMovedY) {
  push();
  translate(width / 2, height / 6 + bunnyMovedY);
  scale(0.71);
  push();

  // BUNNY EARS
  //white part of bunny ears
  stroke(0);
  fill(255, 255, 255);
  push();
  rotate(PI / 9);
  ellipse(-3, -50, 15, 36);
  pop();

  // left ear
  push();
  rotate(PI / -9);

  ellipse(3, -50, 15, 36);
  pop();

  //pink part ears
  fill(255, 100, 170);
  push();
  rotate(PI / -9);
  ellipse(3, -50, 5, 27);
  pop();

  //right ear
  push();
  rotate(PI / 9);
  ellipse(-3, -50, 5, 27);
  fill(255, 255, 255, 160);
  pop();

  //FACE OF THE BUNNY
  push();
  fill(255, 255, 255);
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
  pop();

  //BODY START POSITION
  translate(0, -12);
  stroke(0);

  // Tail
  fill(255);
  ellipse(25, 76, 15, 17);

  // BODY
  fill(255);
  ellipse(0, 55, 50, 70);
  fill(255, 83, 120);
  ellipse(0, 55, 35, 60);

  // Left Arm
  fill(255);
  push();
  rotate(PI / -0.85);
  ellipse(30, -1, 14, 35);
  pop();

  // Right Arm
  fill(255);
  push();
  rotate(PI / 0.85);
  ellipse(-30, -1, 14, 35);
  pop();

  // Left Leg
  fill(255);
  push();
  rotate(PI / -5);
  ellipse(-67, 70, 25.5, 15);
  pop();

  // Right Leg
  fill(255);
  push();
  rotate(PI / 5);
  ellipse(67, 70, 25.5, 15);
  pop();

  //balloon
  translate(-66 * (width / 600), -160 * (height / 1000));

  noFill(0);
  beginShape();
  vertex(10, 2);
  bezierVertex(-3, 15, 10, 45, 40, 90);
  endShape();

  //Red part
  fill(255, 0, 0);
  ellipse(10, -28, 45, 60);
  pop();
}

// START SCREEN, GAME SCREEN, GAME OVER.
let bunnyMovedY = 0;
let speed = 0.5;
let acceleration = 0.05;

function draw() {
  scenery();
  drawBunny(bunnyMovedY);
  bunnyMovedY += speed;
  speed += acceleration;
  landing();

  if (mouseIsPressed) {
    acceleration = -0.05;
  } else {
    acceleration = 0.05;
  }

  if (gameState === "start" || gameState === "lose" || gameState === "win") {
    acceleration = 0;
    speed = 0;
    if (mouseIsPressed) {
      gameState = "game";
      bunnyMovedY = 0;
      speed = 1;
      acceleration = -0.05;
    }
  }

  // LOSE SCREEN
  if (gameState === "lose") {
    fill(0, 0, 0, 150);
    rect(0, 0, 700, 700);
  }

  // WIN SCREEN

  if (gameState === "win") {
    fill(255, 0, 0);
    rect(0, 0, 700, 700);
  }
}

/* To do
if bunny-y is on the grass line at too high velocity, you'll lose. if you land smoothly you win! create if statements


*/

//ADDING CONTROLS
// Add gravity to the bunny by using a variable for the Y-position of the bunny. We also added velocity and acceleration.

//It will go faster with each frame.

let gameState = "start";

function mouseClicked() {}

if (gameState === "game") {
  bunnyMovedY = bunnyMovedY + speed;
  speed = speed + acceleration;
}
function landing() {
  if (bunnyMovedY > 205) {
    if (speed > 1) {
      gameState = "lose";
    } else {
      gameState = "win";
    }
  }
}
