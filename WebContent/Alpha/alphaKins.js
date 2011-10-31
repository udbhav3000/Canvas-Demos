var kinPosX = new Array();
var kinPosY = new Array();
var kinValue = new Array();
var kinReloadValue = new Array();
var kinActive = new Array();
var kinType = new Array();
var kinR = new Array();
var kinSpeed = 7;
var kinMaxCount = 1;
var kinDefaultR;
isAmmoReloadActive = false;

function initKins() {
  kinDefaultR = ammoSqLength / 2;
}

function updateKins() {
  var kinsVisibleCount = 0;

  var i;
  for (i = 0; i < kinActive.length; i++) {
    if (kinValue[i]) {
      if (kinActive[i]) {
        kinsVisibleCount++;
        kinPosY[i] += kinSpeed;
        if (kinPosY[i] >= canvasHeight - kinR[i] * 3) {
          destroyAmmo(kinPosX[i]);
          deleteKin(i);
        }
      }
      else {
        kinR[i] += kinDefaultR / 10;
        if (kinR[i] >= 2 * kinDefaultR) {
          deleteKin(i);
        }
      }
    }
  }
  for (; kinsVisibleCount < kinMaxCount; kinsVisibleCount++) {
    createKin();
  }
}

var i;
for (i = 0; i < 10; i++) {
}

function drawKins(ctx) {
  ctx.save();
  var i;
  for (i = 0; i < kinActive.length; i++) {
    if (kinValue[i] != null) {
      if (kinActive[i]) {
        if (kinType[i] == 'normal') {
          var kinColorDefault =
                  ctx.createRadialGradient(kinPosX[i] + kinR[i] / 1.5,
                                           kinPosY[i] + kinR[i] / 1.5,
                                           kinR[i] / 3, kinPosX[i] + kinR[i],
                                           kinPosY[i] + kinR[i], kinR[i]);
          kinColorDefault.addColorStop(0, '#A7D30C');
          kinColorDefault.addColorStop(0.9, '#019F62');
          kinColorDefault.addColorStop(1, 'rgba(1,159,98,0)');
        }
        else if (kinType[i] == 'ammoReload') {
          var kinColorDefault =
                  ctx.createRadialGradient(kinPosX[i] + kinR[i] / 1.5,
                                           kinPosY[i] + kinR[i] / 1.5,
                                           kinR[i] / 3, kinPosX[i] + kinR[i],
                                           kinPosY[i] + kinR[i], kinR[i]);
          kinColorDefault.addColorStop(0, '#a8b1f7');
          kinColorDefault.addColorStop(0.9, '#001aff');
          kinColorDefault.addColorStop(1, 'rgba(0,30,255,0)');
        }
      }
      else {
        var kinColorDefault =
                ctx.createRadialGradient(kinPosX[i] + kinR[i] / 1.5,
                                         kinPosY[i] + kinR[i] / 1.5,
                                         kinR[i] / 3, kinPosX[i] + kinR[i],
                                         kinPosY[i] + kinR[i], kinR[i]);
        kinColorDefault.addColorStop(0, '#F76541');
        kinColorDefault.addColorStop(0.9, '#FF0000');
        kinColorDefault.addColorStop(1, 'rgba(255,0,0,0)');
      }

      ctx.fillStyle = kinColorDefault;
      ctx.beginPath();
      ctx.arc(kinPosX[i] + kinR[i], kinPosY[i] + kinR[i], kinR[i], 0,
              Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      ctx.font = '30pt Georgia';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FF00FF';
      ctx.fillText(String.fromCharCode(kinValue[i]), kinPosX[i] + kinR[i],
                   kinPosY[i] + kinR[i]);
    }
  }
  ctx.restore();
}

function createKin() {

  var deadAmmoCount = getDeadAmmoCount();
  if (deadAmmoCount >= 26) {
    gameover();
  }
  if (deadAmmoCount >= 10) {
    isAmmoReloadActive = true;
  }
  if (deadAmmoCount < 1) {
    isAmmoReloadActive = false;
  }

  var last = kinValue.length;

  if (isAmmoReloadActive) {
    if (Math.floor(Math.random() * 26) <= deadAmmoCount) {
      kinType[last] = 'ammoReload';
      var val = Math.floor(Math.random() * deadAmmoCount);
      var i;
      for (i = 0; i < ammoSize; i++) {
        if (isAmmo[i] == -1) {
          val--;
          if (val < 0) {
            kinReloadValue[last] = ammoString.charCodeAt(i);
            break;
          }
        }
      }
      var val = Math.floor(Math.random() * (26 - deadAmmoCount));
      var i;
      for (i = 0; i < ammoSize; i++) {
        if (isAmmo[i] != -1) {
          val--;
          if (val < 0) {
            kinValue[last] = ammoString.charCodeAt(i);
            break;
          }
        }
      }
    }
    else {
      kinType[last] = 'normal';
      kinReloadValue[last] = -1;
      kinValue[last] = Math.floor(Math.random() * 26) + 65;
    }
  }
  else {
    kinType[last] = 'normal';
    kinReloadValue[last] = -1;
    kinValue[last] = Math.floor(Math.random() * 26) + 65;
  }

  kinPosX[last] = Math.floor(Math.random() * 26) * kinDefaultR * 2;
  kinPosY[last] = 0;
  kinActive[last] = true;
  kinR[last] = kinDefaultR;
}

function shotKin(key) {
  var i;
  for (i = 0; i < kinActive.length; i++) {
    if (kinActive[i] != null) {
      if (kinValue[i] == key) {
        startMissile(i);
        return;
      }
    }
  }
  wrongShotsFired[[level - 1]]++;
}

function destroyKin(i) {
  if (kinActive[i] != null) {
    hitShotsFired[[level - 1]]++;
    totalKins[[level - 1]]++;
    kinActive[i] = false;
    if (kinType[i] == 'ammoReload') {
      reloadAmmo(kinReloadValue[i]);
    }
  }
}

function deleteKin(i) {
  delete kinPosX[i];
  delete kinPosY[i];
  delete kinValue[i];
  delete kinReloadValue[i];
  delete kinActive[i];
  delete kinType[i];
  delete kinR[i];
  deleteMissileFailed(i);
}
