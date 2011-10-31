var ammoSize = 26;
var ammoString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var ammoValue = new Array();
isAmmo = new Array();
var ammoPosX = new Array();
var ammoPosY = new Array();
var ammoLoadStatus = new Array();
var ammoSqLength = canvasWidth / ammoSize;
var ammoFillStartColor = '#FFFF00';
var ammoFillStopColor = '#E56717';
var ammoFillDeadColor = '#657383';
var ammoStrokeColor = 'black';
var ammoReloadSpeed = 0.01;

function initAmmo() {
  var i;
  for (i = 0; i < ammoSize; i++) {
    isAmmo[i] = 1;
    ammoLoadStatus[i] = 1;
    ammoValue[i] = ammoString.charAt(i);
    ammoPosX[i] = i * ammoSqLength;
    ammoPosY[i] = canvasHeight - ammoSqLength;
  }
}

function updateAmmo() {
  var i;
  for (i = 0; i < ammoSize; i++) {
    if (isAmmo[i] == 0) {
      ammoLoadStatus[i] += ammoReloadSpeed;
      if (ammoLoadStatus[i] >= 1) {
        ammoLoadStatus[i] = 1;
        isAmmo[i] = 1;
      }
    }
  }
}

function drawAmmo(ctx) {
  ctx.save();
  var i;
  for (i = 0; i < ammoSize; i++) {
    if (isAmmo[i] != -1) {
      var lingrad =
              ctx.createLinearGradient(ammoPosX[i] + ammoSqLength / 2,
                                       ammoPosY[i], ammoPosX[i] + ammoSqLength /
                                               2, ammoPosY[i] + ammoSqLength);
      lingrad.addColorStop(1 - ammoLoadStatus[i], ammoFillStartColor);
      lingrad.addColorStop(1 - ammoLoadStatus[i], ammoFillStopColor);
      ctx.fillStyle = lingrad;
    }
    else {
      ctx.fillStyle = ammoFillDeadColor;
    }
    ctx.strokeStyle = ammoStrokeColor;
    ctx.fillRect(ammoPosX[i], ammoPosY[i], ammoSqLength, ammoSqLength);
    ctx.strokeRect(ammoPosX[i], ammoPosY[i], ammoSqLength, ammoSqLength);

    ctx.font = '30pt Georgia';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText(ammoValue[i], ammoPosX[i] + ammoSqLength / 2, ammoPosY[i] +
            ammoSqLength / 2);
    ctx.strokeText(ammoValue[i], ammoPosX[i] + ammoSqLength / 2, ammoPosY[i] +
            ammoSqLength / 2);
  }
  ctx.restore();
}

function shootAmmo(key) {
  if (isAmmo[key] == 1) {
    isAmmo[key] = 0;
    ammoLoadStatus[key] = 0;
    shotKin(key + 65);
  }
  else {
    unloadedShotsFired[[level - 1]]++;
  }
}

function destroyAmmo(posX) {
  var i;
  for (i = 0; i < ammoSize; i++) {
    if (posX < ammoPosX[i] + ammoSqLength / 2 &&
            posX + ammoSqLength > ammoPosX[i] + ammoSqLength / 2) {
      isAmmo[i] = -1;
      missedShots[[level - 1]]++;
      totalKins[[level - 1]]++;
      return;
    }
  }
}

function reloadAmmo(charCode) {
  var key = charCode - 65;
  isAmmo[key] = 0;
  ammoLoadStatus[key] = 0;
}

function getDeadAmmoCount() {
  var deadAmmoCount = 0;
  var i;
  for (i = 0; i < ammoSize; i++) {
    if (isAmmo[i] == -1) {
      deadAmmoCount++;
    }
  }
  return deadAmmoCount;
}
