var step = 0;
function drawPath() {
  if (!document.getElementById('chkPath1').checked) {
    return;
  }
  var context = document.getElementById('canvasIntro5').getContext('2d');
  context.strokeStyle = 'black';
  context.lineWidth = 3;

  var divCode = document.getElementById('divCode');
  step++;
  if (step == 1) {
    clearCanvas();
    divCode.innerHTML = '<br>';
    divCode.innerHTML += '<br><br><b>1. Line</b>';
    drawPath_line1(context);
  }
  else if (step == 2) {
    divCode.innerHTML += '<br><br><b>2. Line</b>';
    drawPath_line2(context);
  }
  else if (step == 3) {
    divCode.innerHTML += '<br><br><b>3. Semi-Circle</b>';
    drawPath_Circle3(context);
  }
  else if (step == 4) {
    divCode.innerHTML += '<br><br><b>4. Quadratic Curve</b>';
    drawPath_Quad4(context);
  }
  else if (step == 5) {
    divCode.innerHTML += '<br><br><b>5. Bezier Curve</b>';
    drawPath_Bezier5(context);
  }
  else if (step == 6) {
    divCode.innerHTML += '<br><br><b>6. Fill</b>';
    drawPath_fill6(context);
  }
  else if (step == 7) {
    clearCanvas();
    divCode.innerHTML = '';
    step = 0;
  }

}

function drawPath_line1(context) {
  var startX = 50;
  var startY = 200;
  var endX = 150;
  var endY = 25;

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.stroke();

  divCode.innerHTML += '<br>context.moveTo(' + startX + ', ' + startY + ')';
  divCode.innerHTML += '<br>context.lineTo(' + endX + ', ' + endY + ')';
}

function drawPath_line2(context) {
  var startX = 150;
  var startY = 25;
  var endX = 250;
  var endY = 200;

  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.stroke();

  divCode.innerHTML += '<br>context.moveTo(' + startX + ', ' + startY + ')';
  divCode.innerHTML += '<br>context.lineTo(' + endX + ', ' + endY + ')';
}

function drawPath_Circle3(context) {

  context.beginPath();
  var startDegree = 270;
  var stopDegree = 90;
  var centerX = 250;
  var centerY = 300;
  var radius = 100;
  var startingAngle = startDegree * Math.PI / 180;
  var endingAngle = stopDegree * Math.PI / 180;
  var counterclockwise = false;
  context.arc(centerX, centerY, radius, startingAngle, endingAngle,
      counterclockwise);
  context.stroke();

  divCode.innerHTML +=
      '<br>context.arc(' + centerX + ', ' + centerY + ', ' + radius + ', ' +
          startDegree + ', ' + stopDegree + ', ' + counterclockwise + ')';
}

function drawPath_Quad4(context) {

  context.beginPath();
  context.moveTo(250, 400);
  var controlX = 400;
  var controlY = 350;
  var endX = 100;
  var endY = 250;
  context.quadraticCurveTo(controlX, controlY, endX, endY);
  context.stroke();

  divCode.innerHTML +=
      '<br>context.quadraticCurveTo(' + controlX + ', ' + controlY + ', ' +
          endX + ', ' + endY + ')';
}

function drawPath_Bezier5(context) {

  context.beginPath();
  context.moveTo(100, 250);
  var controlX1 = 150;
  var controlY1 = 400;
  var controlX2 = 10;
  var controlY2 = 450;
  var endX = 50;
  var endY = 200;
  context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
  context.stroke();

  divCode.innerHTML +=
      '<br>context.bezierCurveTo(' + controlX1 + ', ' + controlY1 + ', ' +
          controlX2 + ', ' + controlY2 + ', ' + endX + ', ' + endY + ')';
}

function drawPath_fill6(context) {
  clearCanvas();

  context.beginPath();

  var startX = 50;
  var startY = 200;
  var endX = 150;
  var endY = 25;
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);

  var endX = 250;
  var endY = 200;
  context.lineTo(endX, endY);

  var startDegree = 270;
  var stopDegree = 90;
  var centerX = 250;
  var centerY = 300;
  var radius = 100;
  var startingAngle = startDegree * Math.PI / 180;
  var endingAngle = stopDegree * Math.PI / 180;
  var counterclockwise = false;
  context.arc(centerX, centerY, radius, startingAngle, endingAngle,
      counterclockwise);

  var controlX = 400;
  var controlY = 350;
  var endX = 100;
  var endY = 250;
  context.quadraticCurveTo(controlX, controlY, endX, endY);

  var controlX1 = 150;
  var controlY1 = 400;
  var controlX2 = 10;
  var controlY2 = 450;
  var endX = 50;
  var endY = 200;
  context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);

  context.strokeStyle = 'black';
  context.lineWidth = 3;
  context.stroke();
  context.fillStyle = 'red';
  context.fill();

  divCode.innerHTML += '<br>context.fillStyle = \'red\'';
  divCode.innerHTML += '<br>context.fill()';
}

function drawGradient() {

  if (!document.getElementById('chkGradient1').checked) {
    return;
  }

  clearCanvas();

  var context = document.getElementById('canvasIntro5').getContext('2d');
  context.strokeStyle = 'black';
  context.lineWidth = 3;

  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '';
  context.beginPath();

  var startX = 50;
  var startY = 200;
  var endX = 150;
  var endY = 25;
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);

  var endX = 250;
  var endY = 200;
  context.lineTo(endX, endY);

  var startDegree = 270;
  var stopDegree = 90;
  var centerX = 250;
  var centerY = 300;
  var radius = 100;
  var startingAngle = startDegree * Math.PI / 180;
  var endingAngle = stopDegree * Math.PI / 180;
  var counterclockwise = false;
  context.arc(centerX, centerY, radius, startingAngle, endingAngle,
      counterclockwise);

  var controlX = 400;
  var controlY = 350;
  var endX = 100;
  var endY = 250;
  context.quadraticCurveTo(controlX, controlY, endX, endY);

  var controlX1 = 150;
  var controlY1 = 400;
  var controlX2 = 10;
  var controlY2 = 450;
  var endX = 50;
  var endY = 200;
  context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);

  context.strokeStyle = 'black';
  context.lineWidth = 3;
  context.stroke();

  var gradientFill = context.createLinearGradient(0, 25, 0, 400);
  gradientFill.addColorStop(0, '#8ED6FF'); // light blue
  gradientFill.addColorStop(1, '#004CB3'); // dark blue
  context.fillStyle = gradientFill;
  context.fill();

  divCode.innerHTML +=
      '<br>var gradientFill = context.createLinearGradient(0, 25, 0, 400)';
  divCode.innerHTML +=
      '<br>gradientFill.addColorStop(0, \'#8ED6FF\') // light blue';
  divCode.innerHTML +=
      '<br>gradientFill.addColorStop(1, \'#004CB3\') // dark blue';
  divCode.innerHTML += '<br>context.fillStyle = gradientFill';
  divCode.innerHTML += '<br>context.fill()';

}

function drawFullGradient() {

  if (!document.getElementById('chkGradient1').checked) {
    return;
  }

  clearCanvas();

  var context = document.getElementById('canvasIntro5').getContext('2d');

  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '';

  var gradientFill = context.createLinearGradient(0, 25, 0, 400);
  gradientFill.addColorStop(0, '#8ED6FF'); // light blue
  gradientFill.addColorStop(1, '#004CB3'); // dark blue
  context.fillStyle = gradientFill;
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  divCode.innerHTML +=
      '<br>var gradientFill = context.createLinearGradient(0, 25, 0, 400)';
  divCode.innerHTML +=
      '<br>gradientFill.addColorStop(0, \'#8ED6FF\') // light blue';
  divCode.innerHTML +=
      '<br>gradientFill.addColorStop(1, \'#004CB3\') // dark blue';
  divCode.innerHTML += '<br>context.fillStyle = gradientFill';
  divCode.innerHTML += '<br>context.fillRect(0, 0, canvasWidth, canvasHeight)';

}

function drawCircleGradient() {

  if (!document.getElementById('chkGradient1').checked) {
    return;
  }

  clearCanvas();

  var context = document.getElementById('canvasIntro5').getContext('2d');

  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '';

  var radialGradient =
      context.createRadialGradient(250, 250, 50, 280, 280, 150);
  radialGradient.addColorStop(0, '#A7D30C');
  radialGradient.addColorStop(0.9, '#019F62');
  radialGradient.addColorStop(1, 'rgba(1,159,98,0)');
  context.fillStyle = radialGradient;
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  divCode.innerHTML +=
      '<br>var radialGradient = context.createRadialGradient' +
      '(250, 250, 50, 280, 280, 150';
  divCode.innerHTML += '<br>radialGradient.addColorStop(0, \'#A7D30C\')';
  divCode.innerHTML += '<br>radialGradient.addColorStop(0.9, \'#019F62\')';
  divCode.innerHTML +=
      '<br>radialGradient.addColorStop(1, \'rgba(1,159,98,0)\');';
  divCode.innerHTML += '<br>context.fillStyle = gradientFill';
  divCode.innerHTML += '<br>context.fillRect(0, 0, canvasWidth, canvasHeight)';

}
