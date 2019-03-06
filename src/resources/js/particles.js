var canvas;
var context;

var particles = {};
var index = 0;
var count = 0;

var settings = {
  particleSize: 12,
  gravity: 0.05,
  maxLife: 1000,
  initialVelocity: 7,
  maxParticleCount: 8000
};

var ColorFactory = {
  init: function() {
    this.hue = Math.random();
    this.GOLDEN_RATIO_CONJUGATE = 0.618033988749895;
  },
  getColor: function() {
    this.hue += this.GOLDEN_RATIO_CONJUGATE;
    this.hue %= 1;
    return "hsl(" + Math.round(this.hue * 360) + ", 80%, 60%)";
  }
};

var colorFact = Object.create(ColorFactory);

var onload = function() {
  canvas = document.createElement("canvas");
  context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "1001";
  canvas.style.pointerEvents = "none";

  document.body.appendChild(canvas);

  colorFact.init();
};

var explode = function(centerX, centerY, density) {
  console.log("Current count:", count);
  for (var i = 0; i < density; i++) {
    for (var j = 0; j < density; j++) {
      if (count < settings.maxParticleCount) {
        var newParticle = Object.create(Particle);
        particles[index] = newParticle.init(centerX, centerY + i * 2);
        index++;
        count++;
      }
    }
  }

  var intervalID = window.setInterval(function() {
    var shouldClear = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = colorFact.getColor();
    for (var i = 0; i < index; i++) {
      if (i % 100 == 0) {
        context.fill();
        context.beginPath();
        context.fillStyle = colorFact.getColor();
      }

      if (particles[i]) {
        shouldClear = false;
        if (particles[i].draw() > settings.maxLife) {
          delete particles[i];
          count--;
        }
      }
    }
    context.fill();

    if (shouldClear) {
      console.log("clearing");
      clearInterval(intervalID);
    }
  }, 20);
};

var Particle = {
  init: function(initialX, initialY) {
    // position
    this.x = initialX;
    this.y = initialY;

    // velocity
    var angle = Math.random() * Math.PI * 2;

    this.vx = Math.cos(angle) * settings.initialVelocity * (Math.random() / 2);
    this.vy = Math.sin(angle) * settings.initialVelocity * (Math.random() / 2);
    this.vy -= 4; // gives some vertical up

    this.life = 0;
    this.size = settings.particleSize;

    return this;
  },

  draw: function() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += settings.gravity;

    this.life++;
    this.size = this.size - 0.1;

    if (this.life < settings.maxLife && this.size > 0) {
      context.rect(
        Math.floor(this.x),
        Math.floor(this.y),
        Math.floor(this.size),
        Math.floor(this.size)
      );
    }

    return this.life;
  }
};

addLoadEvent(onload);
