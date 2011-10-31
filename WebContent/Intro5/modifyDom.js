var progress = 9;

function next() {
  progress++;
  updateDom();
}

function prev() {
  progress--;
  updateDom();
}

function updateDom() {
  console.log(progress);
  if (progress > 0) {
    document.getElementById('tblRect').style.visibility = 'visible';
  }
  else {
    document.getElementById('tblRect').style.visibility = 'hidden';
  }
  if (progress > 1) {
    document.getElementById('tblLine').style.visibility = 'visible';
  }
  else {
    document.getElementById('tblLine').style.visibility = 'hidden';
  }
  if (progress > 2) {
    document.getElementById('tblCurves').style.visibility = 'visible';
  }
  else {
    document.getElementById('tblCurves').style.visibility = 'hidden';
  }
  if (progress > 3) {
    document.getElementById('tblPath').style.visibility = 'visible';
  }
  else {
    document.getElementById('tblPath').style.visibility = 'hidden';
  }
  if (progress > 4) {
    document.getElementById('tblTransform').style.visibility = 'visible';
  }
  else {
    document.getElementById('tblTransform').style.visibility = 'hidden';
  }
  if (progress > 5) {
    document.getElementById('tblBeforeAnimation').style.visibility = 'visible';
  }
  else {
    document.getElementById('tblBeforeAnimation').style.visibility = 'hidden';
  }
  if (progress > 6) {
    document.getElementById('tblBeforeAnimationRow1').style.visibility =
        'visible';
  }
  else {
    document.getElementById('tblBeforeAnimationRow1').style.visibility =
        'hidden';
  }
  if (progress > 7) {
    document.getElementById('tblBeforeAnimationRow2').style.visibility =
        'visible';
  }
  else {
    document.getElementById('tblBeforeAnimationRow2').style.visibility =
        'hidden';
  }
  if (progress > 8) {
    document.getElementById('tblBeforeAnimationRow3').style.visibility =
        'visible';
  }
  else {
    document.getElementById('tblBeforeAnimationRow3').style.visibility =
        'hidden';
  }
  if (progress > 9) {
    document.getElementById('tblBeforeAnimationRow4').style.visibility =
        'visible';
  }
  else {
    document.getElementById('tblBeforeAnimationRow4').style.visibility =
        'hidden';
  }
}
