function drawCurves() {
  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';
  drawCircle(context, divCode);
}

function drawCircle() {
  if (document.getElementById('chkCurve1').checked) {
    var context = document.getElementById('canvasIntro5').getContext('2d');
    var divCode = document.getElementById('divCode');
    divCode.innerHTML = '<br>';

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();

    var startDegree = document.getElementById('txtCurve1Start').value;
    var stopDegree = document.getElementById('txtCurve1Stop').value;

    var centerX = 250;
    var centerY = 25;
    var radius = 100;
    var startingAngle = startDegree * Math.PI / 180;
    var endingAngle = stopDegree * Math.PI / 180;
    var counterclockwise = false;
    context.arc(centerX, centerY, radius, startingAngle, endingAngle,
        counterclockwise);
    context.stroke();

    // divCode
    divCode.innerHTML += '<br>centerX = 250';
    divCode.innerHTML += '<br>centerY = 250';
    divCode.innerHTML += '<br>radius = 100';
    divCode.innerHTML +=
        '<br>startingAngle = ' + startDegree + ' * Math.PI / 180';
    divCode.innerHTML += '<br>endingAngle = ' + stopDegree + ' * Math.PI / 180';
    divCode.innerHTML += '<br>counterclockwise = false';
    divCode.innerHTML +=
        '<br><b>context.arc(centerX, centerY, radius, startingAngle, ' +
        'endingAngle, counterclockwise)</b>';
    divCode.innerHTML += '<br>context.stroke()';

    context.beginPath();
    context.arc(centerX, centerY, 5, 0, 2 * Math.PI, true);
    context.closePath();
    context.fillStyle = 'black';
    context.fill();

  }
}

function drawQuad() {
  if (document.getElementById('chkCurve2').checked) {
    var context = document.getElementById('canvasIntro5').getContext('2d');
    var divCode = document.getElementById('divCode');
    divCode.innerHTML = '<br>';

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();

    context.moveTo(100, 250);
    var controlX = document.getElementById('txtCurve2X').value;
    var controlY = document.getElementById('txtCurve2Y').value;
    var endX = 400;
    var endY = 250;
    context.quadraticCurveTo(controlX, controlY, endX, endY);
    context.stroke();

    // divCode
    divCode.innerHTML += '<br><b>context.moveTo(100, 250)</b>';
    divCode.innerHTML +=
        '<br>controlX = ' + document.getElementById('txtCurve2X').value;
    divCode.innerHTML +=
        '<br>controlY = ' + document.getElementById('txtCurve2Y').value;
    divCode.innerHTML += '<br>endX = 400';
    divCode.innerHTML += '<br>endY = 250';
    divCode.innerHTML +=
        '<br><b>context.quadraticCurveTo(controlX, controlY, endX, endY)</b>';
    divCode.innerHTML += '<br>context.stroke()';

    divCode.innerHTML += '<br><br><br><br><img src="quadratic.png">';

    context.beginPath();
    context.arc(controlX, controlY, 5, 0, 2 * Math.PI, true);
    context.closePath();
    context.fillStyle = 'black';
    context.fill();
  }
}

function drawBezier() {
  if (document.getElementById('chkCurve3').checked) {
    var context = document.getElementById('canvasIntro5').getContext('2d');
    var divCode = document.getElementById('divCode');
    divCode.innerHTML = '<br>';

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();

    context.moveTo(50, 350);
    var controlX1 = document.getElementById('txtCurve3X1').value;
    var controlY1 = document.getElementById('txtCurve3Y1').value;
    var controlX2 = document.getElementById('txtCurve3X2').value;
    var controlY2 = document.getElementById('txtCurve3Y2').value;
    var endX = 450;
    var endY = 350;
    context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX,
        endY);
    context.stroke();

    // divCode
    divCode.innerHTML += '<br><b>context.moveTo(50, 350)</b>';
    divCode.innerHTML +=
        '<br>controlX1 = ' + document.getElementById('txtCurve3X1').value;
    divCode.innerHTML +=
        '<br>controlY1 = ' + document.getElementById('txtCurve3Y1').value;
    divCode.innerHTML +=
        '<br>controlX2 = ' + document.getElementById('txtCurve3X2').value;
    divCode.innerHTML +=
        '<br>controlY2 = ' + document.getElementById('txtCurve3Y2').value;
    divCode.innerHTML += '<br>endX = 450';
    divCode.innerHTML += '<br>endY = 350';
    divCode.innerHTML +=
        '<br><b>context.bezierCurveTo(controlX1, controlY1, controlX2, ' +
        'controlY2, endX, endY);</b>';
    divCode.innerHTML += '<br>context.stroke()';

    divCode.innerHTML += '<br><br><br><br><img src="bezier.png">';

    context.beginPath();
    context.arc(controlX1, controlY1, 5, 0, 2 * Math.PI, true);
    context.arc(controlX2, controlY2, 5, 0, 2 * Math.PI, true);
    context.closePath();
    context.fillStyle = 'black';
    context.fill();
  }
}

function drawInterestingBezier() {
  if (document.getElementById('chkCurve3').checked) {

    clearCanvas();
    var context = document.getElementById('canvasIntro5').getContext('2d');
    var divCode = document.getElementById('divCode');
    divCode.innerHTML = '<br>';

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();

    document.getElementById('txtCurve3X1').value = -300;
    document.getElementById('txtCurve3Y1').value = 0;
    document.getElementById('txtCurve3X2').value = 800;
    document.getElementById('txtCurve3Y2').value = 0;
    context.moveTo(250, 350);
    var controlX1 = document.getElementById('txtCurve3X1').value;
    var controlY1 = document.getElementById('txtCurve3Y1').value;
    var controlX2 = document.getElementById('txtCurve3X2').value;
    var controlY2 = document.getElementById('txtCurve3Y2').value;
    var endX = 250;
    var endY = 350;
    context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX,
        endY);
    context.stroke();

    // divCode
    divCode.innerHTML += '<br><b>context.moveTo(50, 350)</b>';
    divCode.innerHTML +=
        '<br>controlX1 = ' + document.getElementById('txtCurve3X1').value;
    divCode.innerHTML +=
        '<br>controlY1 = ' + document.getElementById('txtCurve3Y1').value;
    divCode.innerHTML +=
        '<br>controlX2 = ' + document.getElementById('txtCurve3X2').value;
    divCode.innerHTML +=
        '<br>controlY2 = ' + document.getElementById('txtCurve3Y2').value;
    divCode.innerHTML += '<br>endX = 450';
    divCode.innerHTML += '<br>endY = 350';
    divCode.innerHTML +=
        '<br><b>context.bezierCurveTo(controlX1, controlY1, controlX2, ' +
        'controlY2, endX, endY);</b>';
    divCode.innerHTML += '<br>context.stroke()';

    divCode.innerHTML += '<br><br><br><br><img src="bezier.png">';

    context.beginPath();
    context.arc(controlX1, controlY1, 5, 0, 2 * Math.PI, true);
    context.arc(controlX2, controlY2, 5, 0, 2 * Math.PI, true);
    context.closePath();
    context.fillStyle = 'black';
    context.fill();
  }
}
