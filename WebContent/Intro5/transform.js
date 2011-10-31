function drawTranslate() {

  if (!document.getElementById('chkTransform1').checked) {
    return;
  }
  clearCanvas();
  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';

  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.strokeRect(0, 0, canvasWidth, canvasHeight);

  context.translate(20, 0);
  context.fillStyle = 'blue';
  context.fillRect(50, 50, 150, 100);

  divCode.innerHTML += '<br>context.strokeStyle = \'black\'';
  divCode.innerHTML +=
      '<br><b>context.strokeRect(0, 0, ' + canvasWidth + ', ' + canvasHeight +
          ')</b>';
  divCode.innerHTML += '<br><b>context.translate(20, 0)</b>';
  divCode.innerHTML += '<br>context.fillStyle = \'blue\'';
  divCode.innerHTML += '<br><b>context.fillRect(50, 50, 150, 100)</b>';

}

var ctrTranslate = 0;
function drawBetterTranslate() {

  if (!document.getElementById('chkTransform1').checked) {
    return;
  }
  clearCanvas();

  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';

  context.setTransform(1, 0, 0, 1, 0, 0);

  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.strokeRect(0, 0, canvasWidth, canvasHeight);
  context.save();
  ctrTranslate += 20;
  if (ctrTranslate > 300)
    ctrTranslate = 0;
  context.translate(ctrTranslate, 0);
  context.fillStyle = 'blue';
  context.fillRect(50, 50, 150, 100);
  context.restore();

  divCode.innerHTML += '<br>context.strokeStyle = \'black\'';
  divCode.innerHTML +=
      '<br>context.strokeRect(0, 0, ' + canvasWidth + ', ' + canvasHeight + ')';
  divCode.innerHTML += '<br><b>context.save()</b>()';
  divCode.innerHTML += '<br><b>ctrTranslate += 20 </b>';
  divCode.innerHTML += '<br><b>context.translate(ctrTranslate, 0)</b>';
  divCode.innerHTML += '<br>context.fillStyle = \'blue\'';
  divCode.innerHTML += '<br>context.fillRect(50, 50, 150, 100)';
  divCode.innerHTML += '<br><b>context.restore()</b>';

}

var ctrRotate = 0;
function drawRotate() {

  if (!document.getElementById('chkTransform2').checked) {
    return;
  }

  clearCanvas();

  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';

  context.setTransform(1, 0, 0, 1, 0, 0);

  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.strokeRect(0, 0, canvasWidth, canvasHeight);

  context.save();
  context.rotate(ctrRotate);
  ctrRotate += Math.PI / 10; // 18 degrees
  context.fillStyle = 'blue';
  context.fillRect(175, 200, 150, 100);

  context.fillStyle = 'black';
  context.beginPath();
  context.arc(0, 0, 10, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
  context.restore();

  divCode.innerHTML += '<br>context.save()()';
  divCode.innerHTML += '<br><b>context.rotate(ctrRotate)</b>';
  divCode.innerHTML += '<br>ctrRotate += Math.PI / 10; // 18 degrees';
  divCode.innerHTML += '<br><b>context.fillRect(175, 200, 150, 100)</b>';
  divCode.innerHTML += '<br>context.restore()';

}

var ctrRotateBetter = 0;
function drawRotateBetter() {

  if (!document.getElementById('chkTransform2').checked) {
    return;
  }

  clearCanvas();

  var context = document.getElementById('canvasIntro5').getContext('2d');
  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>';

  context.setTransform(1, 0, 0, 1, 0, 0);

  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.strokeRect(0, 0, canvasWidth, canvasHeight);

  context.save();
  context.translate(canvasWidth / 2, canvasHeight / 2);
  context.rotate(ctrRotateBetter);
  ctrRotateBetter += Math.PI / 10; // 18 degrees
  context.fillStyle = 'blue';
  context.fillRect(-75, -50, 150, 100);

  divCode.innerHTML += '<br>context.save()()';
  divCode.innerHTML +=
      '<br><b>context.translate(canvasWidth / 2, canvasHeight / 2)</b>';
  divCode.innerHTML += '<br><b>context.rotate(ctrRotate)</b>';
  divCode.innerHTML += '<br>ctrRotate += Math.PI / 10; // 18 degrees';
  divCode.innerHTML += '<br><b>context.fillRect(-75, -50, 150, 100)</b>';
  divCode.innerHTML += '<br>context.restore()';

  context.fillStyle = 'black';
  context.beginPath();
  context.arc(0, 0, 5, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
  context.restore();

}
