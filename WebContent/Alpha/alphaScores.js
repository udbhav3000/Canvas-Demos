var totalKins = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // hit + wrong + late
var hitShotsFired = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var wrongShotsFired = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var lateShotsFired = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var unloadedShotsFired = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var missedShots = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var accuracy = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var level = 1;

function updateScore() {
  if (totalKins[[level - 1]]) {
    accuracy[[level - 1]] = parseInt((hitShotsFired[[level - 1]] -
        wrongShotsFired[[level - 1]]) * 100 / totalKins[[level - 1]]);
  }
}

function setLevel() {
  if (level == 1) {
    kinMaxCount = 1;
    ammoReloadSpeed = 0.01;
  }
  if (level == 2) {
    kinMaxCount = 2;
    ammoReloadSpeed = 0.02;
  }
  if (level == 3) {
    kinMaxCount = 3;
    ammoReloadSpeed = 0.03;
  }
  if (level == 4) {
    kinMaxCount = 4;
    ammoReloadSpeed = 0.04;
  }
  if (level == 5) {
    kinMaxCount = 5;
    ammoReloadSpeed = 0.05;
  }
  if (level == 6) {
    kinMaxCount = 6;
    ammoReloadSpeed = 0.06;
  }
  if (level == 7) {
    kinMaxCount = 7;
    ammoReloadSpeed = 0.07;
  }

}

function increaseLevel() {
  if (level < 7) {
    level++;
  }
  setLevel();
}

function decreaseLevel() {
  if (level > 1) {
    level--;
  }
  setLevel();
}

function drawScores(ctx) {

  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.strokeRect(0, 0, canvasWidth, ammoSqLength / 3);
  ctx.fillRect(0, 0, canvasWidth, ammoSqLength / 3);
  ctx.strokeRect(0, ammoSqLength / 3, canvasWidth, ammoSqLength / 3);
  ctx.fillRect(0, ammoSqLength / 3, canvasWidth, ammoSqLength / 3);
  ctx.strokeRect(0, 2 * ammoSqLength / 3, canvasWidth, ammoSqLength / 3);
  ctx.fillRect(0, 2 * ammoSqLength / 3, canvasWidth, ammoSqLength / 3);
  ctx.strokeRect(0, ammoSqLength + 1, canvasWidth / 12, ammoSqLength / 2);
  ctx.fillRect(0, ammoSqLength + 1, canvasWidth / 12, ammoSqLength / 2);

  ctx.font = '10pt Georgia';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'red';

  ctx.fillText('LATE : ' + lateShotsFired[[level - 1]], 1 * canvasWidth / 5,
               ammoSqLength / 6);
  ctx.fillText('WRONG : ' + wrongShotsFired[[level - 1]], 1 * canvasWidth / 2,
               ammoSqLength / 6);
  ctx.fillText('UNLOADED : ' + unloadedShotsFired[[level - 1]],
      4 * canvasWidth / 5, ammoSqLength / 6);

  ctx.fillText('TOTAL : ' + totalKins[[level - 1]], 1 * canvasWidth / 4,
      ammoSqLength / 3 + ammoSqLength / 6);
  ctx.fillText('HIT : ' + hitShotsFired[[level - 1]], 1 * canvasWidth / 2,
      ammoSqLength / 3 + ammoSqLength / 6);
  ctx.fillText('MISSED : ' + missedShots[[level - 1]], 3 * canvasWidth / 4,
      ammoSqLength / 3 + ammoSqLength / 6);

  ctx.fillText('Accuracy : ' + accuracy[[level - 1]] + ' %', canvasWidth / 2,
      2 * ammoSqLength / 3 + ammoSqLength / 6);

  ctx.fillText('LEVEL : ' + level, canvasWidth / 24,
      ammoSqLength + 1 + ammoSqLength / 4);
}
