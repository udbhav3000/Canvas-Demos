function initIntroText() {

  isintroText = true;

  introText1 = 'Is ANIMATION,';
  introText2 = 'Anything that MOVES?';
  introText3 = 'OR';
  introText4 = 'HOW IT MOVES?';
  introText5 = 'It is better to travel well than to arrive. - Gautam Buddha';
  introText1Length = 0;
  introText2Length = 0;
  introText3Length = 0;
  introText4Length = 0;
  introText5Length = 0;

  introTextCounter = 0;
  introTextSpeed = 4;

  // TEST
  exitIntroText();

}
function updateintroText() {
  if (introText1Length > introText1.length) {
    if (introText2Length > introText2.length) {
      if (introText3Length > introText3.length) {
        if (introText4Length > introText4.length) {
          if (introText5Length > introText5.length) {
            finishIntroText();
          }
          else if (introTextCounter++ > introTextSpeed) {
            introTextCounter = 0;
            introText5Length += 3;
          }
        }
        else if (introTextCounter++ > introTextSpeed) {
          introTextCounter = 0;
          introText4Length++;
        }
      }
      else if (introTextCounter++ > introTextSpeed) {
        introTextCounter = 0;
        introText3Length++;
      }
    }
    else if (introTextCounter++ > introTextSpeed) {
      introTextCounter = 0;
      introText2Length++;
    }
  }
  else if (introTextCounter++ > introTextSpeed) {
    introTextCounter = 0;
    introText1Length++;
  }
}

function drawintroText(context) {
  context.save();
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  // Background Gradient
  var lingrad = context.createLinearGradient(0, 0, canvasWidth, 0);
  lingrad.addColorStop(0, '#000000');
  lingrad.addColorStop(0.15, '#FFFFFF');
  lingrad.addColorStop(0.5, '#DF00FF');
  lingrad.addColorStop(0.85, '#FFFFFF');
  lingrad.addColorStop(1, '#000000');
  context.fillStyle = lingrad;// '#DF00FF'; // Pyschedelic purple
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  var x = canvasWidth / 2;
  var y1 = canvasHeight / 2 - 75;
  var y2 = y1 + 50;
  var y3 = y2 + 50;
  var y4 = y3 + 50;
  var y5 = canvasHeight - 50;

  context.font = '30pt Calibri';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = 'black';
  context.fillText(introText1.substr(0, introText1Length), x, y1);
  context.fillText(introText2.substr(0, introText2Length), x, y2);
  context.fillText(introText3.substr(0, introText3Length), x, y3);
  context.fillText(introText4.substr(0, introText4Length), x, y4);
  context.font = '15pt Calibri';
  context.fillText(introText5.substr(0, introText5Length), x, y5);

  context.restore();
}

function finishIntroText() {
  document.getElementById('centerButton').style.visibility = 'visible';
  document.getElementById('centerButton').value = 'hmm. Hmm.... HMM....';
  document.getElementById('centerButton').setAttribute('onclick',
      'exitIntroText();');
}

function exitIntroText() {
  isintroText = false;
  initOldCode();
}
