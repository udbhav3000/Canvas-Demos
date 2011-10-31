var canvasWidth = 500;
var canvasHeight = 500;

function init() {

  // Create and Insert Canvas
  var outerDiv = document.createElement('div');
  outerDiv.id = 'outerDiv';
  innerDiv = document.createElement('div');
  innerDiv.id = 'innerDiv';
  var cnvs = document.createElement('canvas');
  cnvs.id = 'canvasIntro5';
  cnvs.width = canvasWidth;
  cnvs.height = canvasHeight;
  innerDiv.appendChild(cnvs);
  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
}

function clearCanvas() {
  var context = document.getElementById('canvasIntro5').getContext('2d');
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  var divCode = document.getElementById('divCode');
  divCode.innerHTML = '<br>context.clearRect(0, 0, canvasWidth, canvasHeight)';
}
