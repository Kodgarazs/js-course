var canvas = document.getElementById('main');
var c = canvas.getContext('2d');

function drawBall(x, y) {
  c.fillRect(x, y, 20, 20);
}

var x = 0;
var y = 0;
var vx = 9;
var vy = 4;

function draw() {
  c.clearRect(0, 0, 400, 300);
  drawBall(x, y);
  if ((x + vx) > 380) {
    x = 380 - (x + vx - 380);
    vx = -vx;
  } else if ((x + vx) < 0) {
    x = 0 - (x + vx);
    vx = -vx;
  } else {
    x = x + vx;
  } if ((y + vy) > 280) {
    y = 280 - (y + vy - 280);
    vy = -vy;
  } else if ((y + vy) < 0) {
    y = 0 - (y + vy); vy = -vy;
  } else {
    y = y + vy;
  }
}

setInterval(draw, 1000 / 30);
