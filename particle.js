function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(39, 174, 96);
  rect(0, height / 1.5, width, height);
  // drawing first log
  fill(139, 69, 19);
  push();
  translate(80, 272);
  rotate(PI / -3);
  rect(0, 0, 12, 100);
  pop();
  // drawing second log, forming an X
  push();
  translate(160, 260);
  rotate(PI / 3); // rotate the log 45 degrees (PI/4 radians)
  rect(0, 0, 12, 100);
  pop();
  //fire
  noStroke();
  fill("yellow");
  ellipse(120, 255, 50, 50);
  //orange
  push();
  noFill();
  stroke(255, 160, 50);
  strokeWeight(10);
  ellipse(120, 255, 70, 50);
  pop();
}
