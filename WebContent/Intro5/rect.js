function drawRect() {
  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';
  drawBg(context, divCode);
  drawBorder(context, divCode);
  drawCoords(context);
}

function drawRectAlt() {
  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';
  drawBorder(context, divCode);
  drawBg(context, divCode);
  drawCoords(context);
}

function drawBorder(context, divCode) {
  if (document.getElementById('chkBorder').checked) {
    context.strokeStyle = document.getElementById('txtBorder').value;
    context.strokeRect(0, 0, canvasWidth, canvasHeight);

    // divCode
    divCode.innerHTML +=
        '<br>context.strokeStyle = ' +
            document.getElementById('txtBorder').value;
    divCode.innerHTML +=
        '<br>context.strokeRect(0, 0, ' + canvasWidth + ', ' + canvasHeight +
            ')';
  }
}

function drawBg(context, divCode) {
  if (document.getElementById('chkBg').checked) {
    context.fillStyle = document.getElementById('txtBg').value;
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    // divCode
    divCode.innerHTML +=
        '<br>context.fillStyle = ' + document.getElementById('txtBg').value;
    divCode.innerHTML +=
        '<br>context.fillRect(0, 0, ' + canvasWidth + ', ' + canvasHeight + ')';
  }
}

function drawCoords(context) {
  context.fillStyle = 'black';
  context.textAlign = 'left';
  context.fillText('(0, 0)', 2, 10);
  context.textAlign = 'right';
  context.fillText('(' + canvasWidth + ', ' + canvasHeight + ')',
      canvasWidth - 5, canvasHeight - 5);
}
