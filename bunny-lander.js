let gameState = "start";

function setup() {
  //rewrite to work at all screen sizes
  createCanvas(windowWidth, windowHeight);
}

function scenery() {
  push();
  noStroke();
  // Draw the ground
  //Ground starts after two thirds of the display y = (2/3) * height
  fill(39, 174, 96);
  rect(0, height / 1.5, width, height);
  //Lighter sky
  fill(159, 214, 255);
  rect(0, 0, width, height / 1.5);
  // Draw the sky
  fill(143, 207, 255);
  rect(0, 0, width, height / 3);
  pop();
}

function drawBunny() {
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

  //draw cross eyes when the player loses
  if (gameState == "lose") {
  }
  //Draw normal eyes if the player hasnt lost
  else {
    // white part, eyes
    fill(255);
    ellipse(-7, -20, 9, 13);
    ellipse(7, -20, 9, 13);

    //pupils
    fill(0);
    ellipse(-7, -20, 5.5);
    ellipse(7, -20, 5.5);
  }

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
  translate(-69, -77);

  noFill(0);
  beginShape();
  vertex(10, 2);
  bezierVertex(-3, 15, 10, 45, 40, 90);
  endShape();

  //Red part
  fill(0, 255, 0);
  ellipse(10, -28, 45, 60);
}

//Initialize variables for draw that can be used elsewhere
let bunnyMovedY = 0;
let speed = 0.5;
let acceleration = 0.05;

function checkWinLose() {
  if (bunnyMovedY > height * (1.15 / 3)) {
    if (speed > 1.4) {
      gameState = "lose";
    } else {
      gameState = "win";
    }
  }
}

function draw() {
  //Start screen
  if (gameState == "start") {
    // rita ut startskärm
    background(0);
    fill("yellow");
    rect(400, 300, 200, 50, 20); //drawing my button with rouned corners.
    textSize(35);
    textFont("Helvetica");
    fill(255);
    text("BUNNY LANDER", 500, 100);
    textSize(20);
    textFont("Helvetica");

    fill(255, 0, 0);
    text("START GAME", 438, 330);

    if (
      mouseX >= 400 &&
      mouseX <= 600 &&
      mouseY >= 300 &&
      mouseY <= 350 &&
      mouseIsPressed == true
    ) {
      gameState = "game";
    }

    fill(255);
    text("GAME BY: ALMA SIKIRIC", 350, 400);
    //Game
  } else if (gameState == "game") {
    // rita ut spelskärmen
    scenery();
    // rita kanin etc
    //Bunny
    push();
    //Control bunny position using bunnyMovedY variable.
    translate(width / 2, height / 6 + bunnyMovedY);
    //Change bunny size depending on screen size
    scale((2 / 1500) * height);
    drawBunny();
    pop();

    //calculate speed of bunny
    bunnyMovedY = bunnyMovedY + speed;
    speed = speed + acceleration;

    // räkna ut grejer
    //control bunny acceleration
    if (keyIsDown(38) || keyIsDown(87)) {
      acceleration = -0.05;
    } else {
      acceleration = 0.05;
    }

    // kontrollera om man spelat klart och sätt state till rätt isf
    checkWinLose();
  } else if (gameState == "win") {
    scenery();
    // rita kanin
    push();
    translate(width / 2, height * (1.66 / 3));
    //Change bunny size depending on screen size
    scale((2 / 1500) * height);
    drawBunny();
    pop();

    //win screen
    background("yellow");

    fill(0);
    rect(400, 300, 200, 50, 20); //drawing my button with rouned corners.
    textSize(35);
    textFont("Helvetica");
    fill(0);
    text("CONGRATS, YOU WON", 500, 100);
    push();
    textSize(20);
    textFont("Helvetica");
    fill(255);
    text("PLAY AGAIN", 438, 330);
    pop();

    if (
      mouseX >= 400 &&
      mouseX <= 600 &&
      mouseY >= 300 &&
      mouseY <= 350 &&
      mouseIsPressed == true
    ) {
      gameState = "game";
    }
  } else if (gameState == "lose") {
    scenery();
    push();
    translate(width / 2, height * (1.66 / 3));
    //Change bunny size depending on screen size
    scale((2 / 1500) * height);
    drawBunny();
    pop();
    //lose screen
    background(0);

    fill("red");
    rect(400, 300, 200, 50, 20); //drawing my button with rouned corners.
    textSize(35);
    textFont("Helvetica");
    fill(255);
    text("YOU LOST :(", 500, 100);
    textSize(20);
    textFont("Helvetica");
    fill(255);
    text("TRY AGAIN", 438, 330);

    if (
      mouseX >= 400 &&
      mouseX <= 600 &&
      mouseY >= 300 &&
      mouseY <= 350 &&
      mouseIsPressed == true
    ) {
      gameState = "game";
    }
  }
  //Start or restart the game, reset values
  if (gameState == "start" || gameState == "win" || gameState == "lose") {
    if (
      mouseX >= 400 &&
      mouseX <= 600 &&
      mouseY >= 300 &&
      mouseY <= 350 &&
      mouseIsPressed == true
    ) {
      gameState = "game";
      bunnyMovedY = 0;
      speed = 0.5;
    }
  }
}
