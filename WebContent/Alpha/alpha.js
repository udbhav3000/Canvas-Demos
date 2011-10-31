var canvasWidth = 1100;
var canvasHeight = 800;

var frameDrawRate = 15;
var frameUpdateRate = 30;

var firstRun;

isPaused = false;
var saveNow = false;

function init() {
  // Insert Title
  var ttl = document.createElement('title');
  ttl.innerHTML = 'ALPHA';
  document.head.appendChild(ttl);

  // Insert Canvas
  var outerDiv = document.createElement('div');
  outerDiv.id = 'outerDiv';
  innerDiv = document.createElement('div');
  innerDiv.id = 'innerDiv';
  var cnvs = document.createElement('canvas');
  cnvs.id = 'canvasAlpha';
  cnvs.width = canvasWidth;
  cnvs.height = canvasHeight;
  innerDiv.appendChild(cnvs);
  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
  initCanvas();
}

function initCanvas() {
  firstRun = true;
  setLevel();
  initDots();
  initAmmo();
  initKins();
  setInterval(updateCanvas, 1000 / frameUpdateRate);
  setInterval(drawCanvas, 1000 / frameDrawRate);
  isPaused = true;
}

function updateCanvas() {
  updateDots();
  firstRun = false;
  if (!isPaused) {
    updateAmmo();
    updateKins();
    updateMissiles();
    updateScore();

  }
}

function drawCanvas() {
  var ctx = document.getElementById('canvasAlpha').getContext('2d');
  ctx.save();
  drawBg(ctx);
  drawDots(ctx);
  drawKins(ctx);
  drawMissiles(ctx);
  drawAmmo(ctx);
  drawScores(ctx);
  ctx.restore();

  if (isPaused == true) {
    drawPauseText(ctx);
  }
  else if (saveNow == true) {
    var strData =
            document.getElementById('canvasAlpha').toDataURL('image/jpeg');
    document.location.href =
            strData.replace('image/jpeg', 'image/octet-stream');
    saveNow = false;
    isPaused = true;
  }

}

function drawPauseText(ctx) {
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.strokeRect(canvasWidth / 4, canvasHeight / 4, canvasWidth / 2,
                 canvasHeight / 2);
  ctx.fillRect(canvasWidth / 4, canvasHeight / 4, canvasWidth / 2,
               canvasHeight / 2);

  ctx.font = '20pt Georgia';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'red';
  ctx.fillText('Press SPACE to start/pause.', canvasWidth / 2,
               canvasHeight / 4 + 30);
  ctx.fillText('Press \'S\' Now to save current canvas shot.', canvasWidth / 2,
               canvasHeight / 1.4);

  ctx.fillStyle = 'purple';
  ctx.fillText('OBJECTIVE : Shoot Kins.', canvasWidth / 2, canvasHeight / 2.4);
  ctx.fillText('Tip : Shoot Blue Kins to reload dead alphas.', canvasWidth / 2,
               canvasHeight / 2.1);

  ctx.fillStyle = 'black';
  ctx.fillText('LEVEL : ' + level + ' --- Press \'+\\-\' to change level.',
               canvasWidth / 2, canvasHeight / 1.6);

}

function drawBg(ctx) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  var lingrad =
          ctx.createLinearGradient(canvasWidth / 2, 0, canvasWidth / 2,
                                   canvasHeight);
  lingrad.addColorStop(0, '#dbd6c3');
  lingrad.addColorStop(0.33, '#f2dcac');
  lingrad.addColorStop(0.66, '#fcbc6d');
  lingrad.addColorStop(1, '#a85b45');
  ctx.fillStyle = lingrad;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function keyPressed(evt) {
  var key = (evt) ? evt.which : event.keyCode;
  if (!isPaused) {
    if (key >= 97 && key <= 122) {
      shootAmmo(key - 97);
    }
    if (key >= 65 && key <= 90) {
      shootAmmo(key - 65);
    }
  }
  else if (String.fromCharCode(key) == 'S' || String.fromCharCode(key) == 's') {
    isPaused = false;
    saveNow = true;
  }
  if (String.fromCharCode(key) == ' ') {
    isPaused = !isPaused;
  }
  if (String.fromCharCode(key) == '+') {
    increaseLevel();
  }
  if (String.fromCharCode(key) == '-') {
    decreaseLevel();
  }
}

function gameover() {

}
