let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  if (random() < 0.2) {
    particles.push(createParticle());
  }

  particles = particles.filter(p => {
    p.update();
    p.display();
    return p.alpha > 0;
  });
}

function createParticle() {
  return {
    x: random(width / 2),
    y: height,
    xOffset: random(-5, 5),
    yOffset: random(-5, 5),
    speed: (1),
    alpha: 255,

    update: function () {
      this.y -= this.speed;
      this.x += this.xOffset;
      this.y += this.yOffset;
      this.alpha -= 2;
    },

    display: function () {
      noStroke();
      fill(255, 150, 0, this.alpha);
      ellipse(this.x, this.y, random(5, 15), random(5, 15));
    }
  };
}
