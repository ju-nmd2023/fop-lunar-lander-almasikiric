let snowflakes = [];

for (let i = 0; i < 700; i++) {
  const snowflake = {
    x: (x = Math.floor(Math.random() * width)),
    y: (y = Math.floor(Math.random() * height)),
    alpha: Math.random(), //opacity
    speed: Math.random() * 1.5,
    size: Math.random() * 7,
  };

  snowflakes.push(snowflake);
}

function draw() {
  noStroke();
  background(140, 200, 250, 150);

  // Snow piles with 3 circles.
  fill(255, 255, 255);
  ellipse(300, 500, width, 300);
  ellipse(550, 520, width, 350);
  ellipse(20, 500, 450, 300);
  for (let snowflake of snowflakes) {
    fill(250, 255, 255, Math.abs(Math.sin(snowflake.alpha)) * 255);
    ellipse(snowflake.x, snowflake.y, snowflake.size);
    snowflake.y = snowflake.y + snowflake.speed + 0.5; // how fast it spawns

    fill(255, 255, 255, Math.abs(Math.sin(snowflake.alpha)) * 255);
    ellipse(snowflake.x, snowflake.y, snowflake.size * 2); // the size of the snowflakes * 2
    snowflake.y = snowflake.y + snowflake.speed + 0.02; // two different smowflake-sizes

    if (snowflake.y > height) {
      snowflake.y = 0; // Otherwise the snow would not reset at the top infinetly.
    }
  }
}
