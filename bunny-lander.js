let gameState = "start";
//button coords
let buttonX;
let buttonY;
let stars = [];
let helium = 200;

let bunnyTitle;
let informationText;

function preload() {
  bunnyTitle = loadFont("Dream Sparks-Shiny.ttf");
  informationText = loadFont("CutiesRabbits-6YL2D.ttf");
}

function setup() {
  //rewrite to work at all screen sizes
  createCanvas(windowWidth, windowHeight);
  buttonX = windowWidth / 2;
  buttonY = windowHeight / 2;

  // The following 11 lines were adapted from Garrit Schaap lecture 19/2.
  for (let i = 0; i < 200; i++) {
    const star = {
      x: Math.random() * width,
      y: Math.random() * height,
      alpha: Math.random(), //opacity + how fast it blinks
      size: Math.random() * 7,
    };

    stars.push(star);
  }
}

function scenery() {
  push();
  noStroke();
  //sky under pink moon
  fill(44, 44, 44);
  rect(0, height / 1.5, width, height * 2);
  //Lighter sky
  fill(34, 34, 34);
  rect(0, 0, width, height / 1.5);
  // Darker
  fill(24, 24, 24);
  rect(0, 0, width, height / 3);
  if (gameState == "game") {
    starBackground();
  }
  // Draw the moon
  //Moon starts after two thirds of the display y = (2/3) * height
  fill(255, 83, 120);
  rect(0, height / 1.5, width, height * 3, width * 2);
  // Moon shading
  fill(255, 100, 140);
  rect(0, height / 1.35, width, height * 3, width * 2);
  fill(255, 120, 160);
  rect(0, height / 1.25, width, height * 3, width * 2);
  pop();
}
function starBackground() {
  noStroke();

  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
    ellipse(star.x, star.y, star.size);
    star.alpha = star.alpha + 0.025;
  }
 
}

// Same as previous function except different colors and speed.
function winBackground() {
  noStroke();

  for (let star of stars) {
    fill(255, 0, 100, Math.abs(Math.sin(star.alpha)) * 255);
    ellipse(star.x, star.y, star.size * 2.5);
    star.alpha = star.alpha + 0.03;
  }
}

function drawBunny() {
  // BUNNY EARS
  //white part of bunny ears
  push();
  stroke(0);
  fill(255, 255, 255);
  rotate(PI / 9);
  ellipse(-3, -50, 17, 39);
  pop();

  // left ear
  push();
  fill(255);
  rotate(PI / -9);
  ellipse(3, -50, 17, 39);
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
}
function balloon(speed) {
  //balloon
  translate(-69, -77);

  noFill(255, 83, 120);
  beginShape();
  stroke(170, 170, 170);
  vertex(10, 2);
  strokeWeight(2);
  bezierVertex(-8, 9, 5, 39, 39, 87);
  endShape();

  //Pink, inflatable part
  noStroke();
  fill(255, 83, 120);



  //Anton Kinnander helped me figure out to use Math.max and Math.abs
  //Math.max takes the larger value between the one calculated and -15 so the balloon wont shrink forever
  //Math.abs() makes it so the value is always positive, will shrimk slower than it grows
  ellipse(
    10,
    -18,
    65 + Math.max(Math.abs(speed * 4) + speed * 14, -20),
    80 + Math.max(Math.abs(speed * 4) + speed * 14, -20)
  );
}

function checkHelium() {
  if (keyIsDown(38) || keyIsDown(87) || keyIsDown(32)) {
    if (helium > 0) {
      helium = helium - 0.5;
    } else {
      helium = 0;
    }
  }
}

//Initialize variables for draw that can be used elsewhere
let bunnyMovedY = 0;
let speed = 0.5;
let acceleration = 0.03;

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
    push();
    rectMode(CENTER);
    textAlign(CENTER);
    //^ push pop start for changing rectmode only for menu screens
    background(0);

    //bunny ears over the button for design
    //white part of bunny ears
    push();
    noStroke();
    translate(-290 + width / 2, -239 + height / 2);
    push();
    fill(255);
    rotate(PI / -7);
    ellipse(125, 272, 25, 55);
    pop();

    //right ear
    push();
    fill(255);
    rotate(PI / 7);
    ellipse(322, 56, 25, 55);
    pop();

    // left ear, pink
    push();
    fill(255, 83, 120);
    rotate(PI / -7);
    ellipse(125, 283, 10, 30);
    pop();

    //right, pink part ears
    push();
    fill(255, 83, 120);
    rotate(PI / 7);
    ellipse(322, 67, 10, 30);
    pop();
    pop();
    fill(255, 83, 120);
    //button starts here
    rect(buttonX, buttonY, 200, 50, 20); //drawing my button with rouned corners.
    textSize(70);
    noStroke();
    textFont(bunnyTitle);
    fill(255, 83, 120);
    text("BUNNY LANDER", buttonX, buttonY / 2);
    textSize(25);
    textFont(informationText);
    fill(255);
    text("START GAME", buttonX, buttonY * 1.03);

    push();
    fill(255);
    textFont(informationText);
    textSize(25);

    text("GAME BY ALMA SIKIRIC", buttonX, buttonY * 1.8);
    pop();
    pop();
    //pop end for changing rect and text mode to center
    if (
      //Since the button is 200px wide and defined from the center ButtonX
      mouseX >= buttonX - 100 &&
      mouseX <= buttonX + 100 &&
      mouseY >= buttonY - 50 &&
      mouseY <= buttonY + 50 &&
      mouseIsPressed == true
    ) 
    
    {
      gameState = "game";
    }
    console.log(gameState);
    //Game
  } else if (gameState == "game") {
    clear();
    scenery();
    checkHelium();
    fill(255, 120, 160);
    textAlign(RIGHT);
    textFont(informationText);
    textSize(30);
    text(
      "HELIUM GAS − " + Math.floor(helium),
      width / 1.02,
      height - height / 1.06
    );
    push();
    //Control bunny position using bunnyMovedY variable.
    translate(width / 2, height / 6 + bunnyMovedY);
    //Change bunny size depending on screen size
    scale((2 / 1500) * height);
    drawBunny();
    balloon(speed * -1);
    pop();
    
    //calculate speed of bunny
    bunnyMovedY = bunnyMovedY + speed;
    speed = speed + acceleration;
    
    //control bunny acceleration
    if ((keyIsDown(38) || keyIsDown(87)) || keyIsDown(32) && helium > 0) {
      //acceleration up from ground
      acceleration = -0.03;
    } else {
      //Acceleration towards ground
      acceleration = 0.03;
    }
    //Checks in the console
    console.log(gameState);


    checkWinLose();
  } else if (gameState == "win") {
    scenery();
    push();
    translate(width / 2, height * (1.66 / 3));
    //Change bunny size depending on screen size
    scale((2 / 1500) * height);
    drawBunny();
    pop();
    
    //win screen
    push();
    rectMode(CENTER);
    textAlign(CENTER);
    background(0, 200);
    noStroke();
    winBackground();
    fill(255, 83, 120);
    rect(buttonX, buttonY, 200, 50, 20); //drawing my button with rouned corners.
    
    textFont(informationText);
    textSize(60);
    fill(255);
    text("CONGRATS, YOU WON", buttonX, buttonY / 2);
    
    fill(255);
    textFont(informationText);
    textSize(30);
    text("WITH A HELIUM GAS OF " + Math.floor(helium) + ".", buttonX, buttonY / 1.4);
    
    textSize(25);
    textFont(informationText);
    fill(255);
    text("PLAY AGAIN", buttonX, buttonY * 1.03);
    pop();

    
    if (
      //Since the button is 200px wide and defined from the center ButtonX
      mouseX >= buttonX - 100 &&
      mouseX <= buttonX + 100 &&
      mouseY >= buttonY - 50 &&
      mouseY <= buttonY + 50 &&
      mouseIsPressed == true
      ) {
      }
      console.log(gameState);
  } else if (gameState == "lose") {
    scenery();
    push();
    translate(width / 2, height * (1.66 / 3));
    //Change bunny size depending on screen size
    scale((2 / 1500) * height);
    drawBunny();
    pop();
    //lose screen
    push();
    rectMode(CENTER);
    textAlign(CENTER);
    background(0, 200);
    noStroke();
    fill(255, 83, 120);
    rect(buttonX, buttonY, 200, 50, 20); //drawing my button with rouned corners.
    textFont(informationText);
    textSize(60);
    fill(255);
    text("YOU LOST,", buttonX, buttonY / 2);

    fill(255);
    textFont(informationText);
    textSize(30);
    text(
      "WITH A HELIUM GAS OF " + Math.floor(helium) + ".",
      buttonX,
      buttonY / 1.4
    );

    textSize(25);
    textFont(informationText);
    fill(255);
    text("PLAY AGAIN", buttonX, buttonY * 1.03);
    pop();

    if (
      //Since the button is 200px wide and defined from the center ButtonX
      mouseX >= buttonX - 100 &&
      mouseX <= buttonX + 100 &&
      mouseY >= buttonY - 50 &&
      mouseY <= buttonY + 50 &&
      mouseIsPressed == true
    ) {
      gameState = "game";
    }

    if (
      //Since the button is 200px wide and defined from the center ButtonX
      mouseX >= buttonX - 100 &&
      mouseX <= buttonX + 100 &&
      mouseY >= buttonY - 50 &&
      mouseY <= buttonY + 50 &&
      mouseIsPressed == true
    ) {
      gameState = "game";
    }
    console.log(gameState);
  }
  //Start or restart the game, reset values
  if (gameState == "start" || gameState == "win" || gameState == "lose") {
    if (
      //Since the button is 200px wide and defined from the center ButtonX
      mouseX >= buttonX - 100 &&
      mouseX <= buttonX + 100 &&
      mouseY >= buttonY - 50 &&
      mouseY <= buttonY + 50 &&
      mouseIsPressed == true
    ) {
      gameState = "game";
      bunnyMovedY = 0;
      speed = 0.05;
      helium = 200;
    }
  }
}
