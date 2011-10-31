var dotsCount = 100;
var dotX = new Array();
var dotY = new Array();
var dotR = new Array();
var dotSpeed = new Array();
isDot = new Array();
var dotMinR = 2;
var dotMaxR = 5;
var dotMinSpeed = 1;
var dotMaxSpeed = 5;
var dotColor = 'grey';

function initDots() {
  var i;
  for (i = 0; i < dotsCount; i++) {
    isDot[i] = false;
  }
}

function updateDots() {
  var i;
  for (i = 0; i < dotsCount; i++) {
    if (!isDot[i]) {
      dotX[i] = Math.floor(Math.random() * canvasWidth);
      dotY[i] = 0;
      if (firstRun) {
        dotY[i] = Math.floor(Math.random() * canvasHeight);
      }

      dotR[i] = Math.floor(Math.random() * (dotMaxR - dotMinR + 1) + dotMinR);
      dotSpeed[i] =
              Math.floor(Math.random() * (dotMaxSpeed - dotMinSpeed + 1) +
                      dotMinSpeed);
      isDot[i] = true;
    }
    else {
      dotY[i] += dotSpeed[i];
      if (dotY[i] > canvasHeight) {
        isDot[i] = false;
      }
    }
  }
}

function drawDots(ctx) {
  ctx.save();
  var i;
  for (i = 0; i < dotsCount; i++) {
    if (isDot[i]) {
      ctx.fillStyle = dotColor;
      ctx.beginPath();
      ctx.arc(dotX[i], dotY[i], dotR[i], 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  }
  ctx.restore();
}
