function writeOldCode() {
  document.getElementById('divOldCode').style.visibility = 'visible';
  var divOldCode = document.getElementById('divOldCode');
  divOldCode.innerHTML = '<br><b>Code Block 1</b><br>';
  divOldCode.innerHTML +=
      '<br><b>setInterval(drawCanvas, 33)</b> // 30fps<br><br>' +
      '<b>//Initialise</b><br>' +
      'var posX = canvasWidth / 2<br>' +
      'var posY = canvasHeight / 2<br>' +
      'var rectWidth = 60<br>' +
      'var rectHeight = 30<br>' +
      '<b>var speedX = 5</b><br>' +
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
      '  &nbsp;&nbsp;&nbsp;&nbsp;posX += speedX<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;posY += speedY<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;if (posX <= 0 || posX + ' +
          'rectWidth >= canvasWidth)<br>' +
      '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '&nbsp;speedX = -speedX<br>' +
      '  &nbsp;&nbsp;&nbsp;&nbsp;if (posY <= 0 || posY + ' +
          'rectHeight >= canvasHeight)<br>' +
      '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '&nbsp;speedY = -speedY<br>' +
      '}';

}

function initOldCode() {
  isOldCode = true;

  document.getElementById('centerButton').style.visibility = 'visible';
  document.getElementById('centerButton').value = 'Let\'s Do Better.';
  document.getElementById('centerButton').setAttribute('onclick',
      'exitOldCode();');

  writeOldCode();
}

var posX = canvasWidth / 2;
var posY = canvasHeight / 2;
var rectWidth = 60;
var rectHeight = 30;
var speedX = 5;
var speedY = speedX;

function drawOldCode(context) {
  context.save();
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.strokeStyle = 'black';
  context.strokeRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = 'blue';
  context.translate(posX, posY);
  context.fillRect(0, 0, rectWidth, rectHeight);
  context.restore();
  posX += speedX;
  posY += speedY;
  if (posX <= 0 || posX + rectWidth >= canvasWidth)
    speedX = -speedX;
  if (posY <= 0 || posY + rectHeight >= canvasHeight)
    speedY = -speedY;
}

function exitOldCode() {
  isOldCode = false;
  initNewCode();
}
