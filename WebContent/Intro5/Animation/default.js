var canvasWidth = 900;
var canvasHeight = 500;

var frameDrawRate = 30;
var frameUpdateRate = 60;

var isintroText;
var isOldCode = false;
var isNewCode = false;

function init() {
  // Insert Title
  var ttl = document.createElement('title');
  ttl.innerHTML = 'CANVAS ANIMATION';
  document.head.appendChild(ttl);

  // Insert Canvas
  var outerDiv = document.createElement('div');
  outerDiv.id = 'outerDiv';
  innerDiv = document.createElement('div');
  innerDiv.id = 'innerDiv';
  var canvas = document.createElement('canvas');
  canvas.id = 'canvasAnimation';
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  innerDiv.appendChild(canvas);
  var button = '<br><input type = "button" id = "centerButton">';
  innerDiv.innerHTML += button;
  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
  initCanvas();
}

function initCanvas() {
  document.getElementById('centerButton').style.visibility = 'hidden';

  initIntroText();

  setInterval(updateCanvas, 1000 / frameUpdateRate);
  setInterval(drawCanvas, 1000 / frameDrawRate);
}

function updateCanvas() {
  if (isintroText) {
    updateintroText();
  }
  if (isNewCode) {
    updateNewCode();
  }
}

function drawCanvas() {
  var context = document.getElementById('canvasAnimation').getContext('2d');
  context.save();
  if (isintroText) {
    drawintroText(context);
  }
  if (isOldCode) {
    drawOldCode(context);
  }
  if (isNewCode) {
    drawNewCode(context);
  }
  context.restore();
}
