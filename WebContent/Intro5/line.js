function drawLine() {
  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';
  drawLines(context, divCode);
}

function drawLines(context, divCode) {
  var startX = Math.floor(Math.random() * canvasWidth);
  var startY = Math.floor(Math.random() * canvasHeight);
  var endX = Math.floor(Math.random() * canvasWidth);
  var endY = Math.floor(Math.random() * canvasHeight);
  if (document.getElementById('chkLine1').checked) {
    context.strokeStyle = document.getElementById('txtLine1').value;
    context.lineWidth = document.getElementById('txtLine1Width').value;
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();

    // divCode
    divCode.innerHTML +=
        '<br>context.strokeStyle = ' +
            document.getElementById('txtLine1').value;
    divCode.innerHTML +=
        '<br>context.lineWidth = ' +
            document.getElementById('txtLine1Width').value;
    divCode.innerHTML +=
        '<br><b>context.moveTo(' + startX + ', ' + startY + ')</b>';
    divCode.innerHTML +=
        '<br><b>context.lineTo(' + endX + ', ' + endY + ')</b>';
    divCode.innerHTML += '<br>context.stroke()';
  }
}

function drawLineAlt() {
  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';
  drawLinesAlt(context, divCode);
}

function drawLinesAlt(context, divCode) {
  var startX = Math.floor(Math.random() * canvasWidth);
  var startY = Math.floor(Math.random() * canvasHeight);
  var endX = Math.floor(Math.random() * canvasWidth);
  var endY = Math.floor(Math.random() * canvasHeight);
  if (document.getElementById('chkLine1').checked) {
    context.beginPath();
    context.strokeStyle = document.getElementById('txtLine1').value;
    context.lineWidth = document.getElementById('txtLine1Width').value;
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.closePath();
    context.stroke();

    // divCode
    divCode.innerHTML += '<br><b>context.beginPath()</b>';
    divCode.innerHTML +=
        '<br>context.strokeStyle = ' +
            document.getElementById('txtLine1').value;
    divCode.innerHTML +=
        '<br>context.lineWidth = ' +
            document.getElementById('txtLine1Width').value;
    divCode.innerHTML += '<br>context.moveTo(' + startX + ', ' + startY + ')';
    divCode.innerHTML += '<br>context.lineTo(' + endX + ', ' + endY + ')';
    divCode.innerHTML += '<br><b>context.closePath()</b>';
    divCode.innerHTML += '<br>context.stroke()';
  }
}
