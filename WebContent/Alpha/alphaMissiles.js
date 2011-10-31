var missileEndKinPos = new Array();
var missileCurX = new Array();
var missileCurY = new Array();
var missileDirX = new Array();
var missileDirY = new Array();
var missileRotAngle = new Array();
var missileEndX = new Array();
var missileEndY = new Array();
var missileSpeed = new Array();

imgMissile = new Image();
imgMissile.setAttribute('src', 'rocket2.png');
imgMissileWidth = 1.5 * ammoSqLength;

function startMissile(endKinPos) {
  var last = missileEndKinPos.length;
  missileEndKinPos[last] = endKinPos;
  missileCurX[last] =
          (kinValue[endKinPos] - 65) * ammoSqLength + ammoSqLength / 2;
  missileCurY[last] = canvasHeight - ammoSqLength / 2;
  missileEndX[last] = kinPosX[endKinPos] + kinR[endKinPos];
  missileRotAngle[last] = 0;
  calcMissileSpeed(last);
}

function calcMissileSpeed(i) {
  var kinDistance =
          canvasHeight - ammoSqLength / 2 - kinPosY[missileEndKinPos[i]];
  var kinTime = kinDistance / kinSpeed;

  missileEndY[i] = kinDistance / 2 + kinPosY[missileEndKinPos[i]];
  var missileLeftTime = kinTime / 2;
  var X2 = Math.pow(missileCurX[i] - missileEndX[i], 2);
  var Y2 = Math.pow(missileCurY[i] - missileEndY[i], 2);
  var missileLeftDistance = Math.sqrt(X2 + Y2);
  var newMissileSpeed = missileLeftDistance / missileLeftTime;
  if (missileSpeed[i] != null) {
    if (newMissileSpeed > missileSpeed[i]) {
      missileSpeed[i] = newMissileSpeed;
    }
  }
  else {
    missileSpeed[i] = newMissileSpeed;
  }
}

function updateMissiles() {
  var i;
  for (i = 0; i < missileEndKinPos.length; i++) {
    if (missileEndKinPos[i] != null) {
      if (kinValue[missileEndKinPos[i]] != null) {
        if (Math.abs(missileCurX[i] - missileEndX[i]) <= missileSpeed[i]) {
          missileCurX[i] = missileEndX[i];
          missileDirX[i] = 0;
        }
        else if (missileCurX[i] < missileEndX[i]) {
          missileCurX[i] += missileSpeed[i];
          missileDirX[i] = 1;
        }
        else {
          missileCurX[i] -= missileSpeed[i];
          missileDirX[i] = -1;
        }
        if (Math.abs(missileCurY[i] - missileEndY[i]) <= missileSpeed[i]) {
          missileCurY[i] = missileEndY[i];
          missileDirY[i] = 0;
        }
        else if (missileCurY[i] < missileEndY[i]) {
          missileCurY[i] += missileSpeed[i];
          missileDirY[i] = 1;
        }
        else {
          missileCurY[i] -= missileSpeed[i];
          missileDirY[i] = -1;
        }
        if (missileCurX[i] == missileEndX[i] &&
                missileCurY[i] == missileEndY[i]) {
          deleteMissile(i);
        }
        missileRotAngle[i] =
                missileDirX[i] * (Math.PI / 2 + missileDirY[i] * Math.PI / 4);
      }
      else {
        deleteMissile(i);
      }
    }
  }
}

function drawMissiles(ctx) {
  var i;
  for (i = 0; i < missileEndKinPos.length; i++) {
    if (missileEndKinPos[i] != null) {
      ctx.save();
      ctx.translate(missileCurX[i], missileCurY[i]);
      ctx.rotate(missileRotAngle[i]);
      ctx.drawImage(imgMissile, -imgMissileWidth / 2, -imgMissileWidth / 2,
                    imgMissileWidth, imgMissileWidth);
      ctx.restore();
    }
  }
}

function deleteMissile(i) {
  destroyKin(missileEndKinPos[i]);
  delete missileEndKinPos[i];
  delete missileCurX[i];
  delete missileCurY[i];
  delete missileDirX[i];
  delete missileDirY[i];
  delete missileRotAngle[i];
  delete missileEndX[i];
  delete missileEndY[i];
  delete missileSpeed[i];
}

function deleteMissileFailed(pos) {
  var i;
  for (i = 0; i < missileEndKinPos.length; i++) {
    if (missileEndKinPos[i] == pos) {
      lateShotsFired[[level - 1]]++;
      deleteMissile(i);
    }
  }
}
