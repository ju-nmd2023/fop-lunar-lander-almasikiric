let fireworks = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 50; i++) {
    const firework = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      alpha: Math.random(),
      speed: Math.random() * 8 + 2,
      size: Math.random() * 5 + 2,
      exploded: false,
      particles: [],
    };

    fireworks.push(firework);
  }
}

function draw() {
  noStroke();
  background(0);

  for (let firework of fireworks) {
    if (firework.exploded) {
      for (let particle of firework.particles) {
        fill(
          (0, 17, 200),
          (0, 100, 17),
          random(255, 0, 0),
          particle.alpha
        );
        ellipse(particle.x, particle.y, particle.size);
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.alpha += 2;
      }
    } else {
      fill(
        random(0, 255,200),
        random(0, 255,255),
        random(0, 255, 200),
        Math.abs(Math.sin(firework.alpha)) * 255
      );
      ellipse(firework.x, firework.y, firework.size);

      firework.y = firework.y - firework.speed;

      if (firework.y < height * 0.6) {
        firework.exploded = true;
        createExplosion(firework.x, firework.y, firework.particles);
      }
    }
  }
}

function createExplosion(x, y, particles) {
  for (let i = 0; i < 20; i++) {
    const particle = {
      x: x,
      y: y,
      speedX: Math.random() * 20 - 5,
      speedY: Math.random() * 20 - 10,
      size: Math.random() * 10 + 2,
      alpha: 2500,
    };
    particles.push(particle);
  }
}
