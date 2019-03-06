var canvas;
var context;
var particles = {};

var settings = {
  particleSize: 10,
  gravity: 1,
  maxLife: 100,
  particleColor: "blue",
  density: 300
};

var onload = function() {
  canvas = document.createElement("canvas");
  context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "1001";
  canvas.style.pointerEvents = "none";

  document.body.appendChild(canvas);
};

var explode = function() {
  // spawn particles
  index = 0;
  for (var i = 0; i < window.innerWidth; i += 20) {
    for (var j = 0; j < window.innerHeight; j += 20) {
      var newParticle = Object.create(Particle);

      particles[index] = newParticle.init(i, window.innerHeight, index);
      index++;
    }
  }

  window.setInterval(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < index; i++) {
      if (particles[i] && particles[i].draw() > settings.maxLife) {
        delete particles[i];
      }
    }
  }, 15);
};

var Particle = {
  init: function(
    initialX,
    initialY,
    particleIndex,
    color = settings.particleColor
  ) {
    // position
    this.x = initialX;
    this.y = initialY;

    // velocity
    this.vx = Math.random() * 20 - 10;
    this.vy = Math.random() * 60 - 60;

    this.life = 0;
    this.id = particleIndex;

    this.size = settings.particleSize;

    this.color = color;

    return this;
  },

  draw: function() {
    this.x += this.vx;
    this.y += this.vy;

    this.vy += settings.gravity;

    this.life++;
    this.size -= 0.1;

    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    return this.life;
  }
};

addLoadEvent(onload);
