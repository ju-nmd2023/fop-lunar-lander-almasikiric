function setup() {
  createCanvas(600, 1000); // 600 x horizontal, 1000 up and height
}
let bunnySpeed = 0;
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
function drawBunny(y) {
  translate(width / 2, height / 4 + y);
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
}

// START SCREEN, GAME SCREEN, GAME OVER.

function draw() {
  scenery();
  drawBunny(bunnySpeed);

  let gameState = "start";

  function mouseClicked() {
      
      if(gameState===game) {
          
          
          
          
          spaceshipY = spaceshipY + velocity;
          velocity = velocity + acceleration;
          
          // CONTROLS, when mouse is pressed the spaceship will brake and then move up, accelerate.
          if (mouseIsPressed) {
              velocity = velocity - 0.2;
            }
        }
        
        // Spaceship Collision, if the spaceship is greater than 200 (the ground start X-coordinate) it will automatically collide.
        if (drawBunny > 200) {
            gameState = "lose";
            console.log("Game Over");
        }
        
        if (gameState === "start" || gameState === "lose") {
        
    }
}

}

// LOSE SCREEN
function loseScreen() {
  if (gameState === "lose") {
    fill(0, 0, 0, 150);
    rect(0, 0, 700, 700);
  }
}
