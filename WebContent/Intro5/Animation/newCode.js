function writeNewCode() {
  document.getElementById('divNewCode').style.visibility = 'visible';
  var divNewCode = document.getElementById('divNewCode');
  divNewCode.innerHTML = '<br><b>Code Block 2</b><br>';
  divNewCode.innerHTML +=
      '<br><b>setInterval(drawCanvas, 33)</b> // 30fps<br>' +
      '<b>setInterval(updateCanvas, 16)</b> //60fps<br><br>' +
      '<b>// Initialise</b><br>' +
      'var posX = canvasWidth / 2<br>' +
      'var posY = canvasHeight / 2<br>' +
      'var rectWidth = 60<br>' +
      'var rectHeight = 30<br>' +
      '<b>var speedX = 3</b><br>' +
      'var speedY = speedX<br>' +
      '<br><b>// Draw Function</b><br>' +
      'function drawCanvas() {<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.save()<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.clearRect(0, 0, ' +
          'canvasWidth, canvasHeight)<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.strokeStyle = \'black\'<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.strokeRect(0, 0, ' +
          'canvasWidth, canvasHeight)<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.fillStyle = \'blue\'<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.translate(posX, posY)<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.fillRect(0, 0, ' +
          'rectWidth, rectHeight)<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;context.restore()<br>' +
      '}' +
      '<br><b>// Update Function</b><br>' +
      'function updateCanvas() {<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;posX += speedX<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;posY += speedY<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;if (posX <= 0 || posX + ' +
          'rectWidth >= canvasWidth)<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;speedX = -speedX<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;if (posY <= 0 || posY + ' +
          'rectHeight >= canvasHeight)<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;speedY = -speedY<br>' +
      '}';

}

var posX;
var posY;
var rectWidth;
var rectHeight;
var speedX;
var speedY;

function initNewCode() {
  isNewCode = true;

  document.getElementById('centerButton').style.visibility = 'hidden';
  // document.getElementById('centerButton').value = 'Let\'s Do Better.';
  // document.getElementById('centerButton').setAttribute('onclick','exitNewCode();');

  writeNewCode();

  posX = canvasWidth / 2;
  posY = canvasHeight / 2;
  rectWidth = 60;
  rectHeight = 30;
  speedX = 3;
  speedY = speedX;
}

function updateNewCode() {
  posX += speedX;
  posY += speedY;
  if (posX <= 0 || posX + rectWidth >= canvasWidth)
    speedX = -speedX;
  if (posY <= 0 || posY + rectHeight >= canvasHeight)
    speedY = -speedY;
}

function drawNewCode(context) {
  context.save();
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.strokeStyle = 'black';
  context.strokeRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = 'blue';
  context.translate(posX, posY);
  context.fillRect(0, 0, rectWidth, rectHeight);
  context.restore();
}

function exitNewCode() {
  isNewCode = false;
}
