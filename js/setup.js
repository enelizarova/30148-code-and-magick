'use strict';

/* var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
*/

var similarListElement = document.querySelector('.setup-similar-list');
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];
var fragment = document.createDocumentFragment();
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

function getRandomValue(arr) {
  var index = ((arr.length - 1) * Math.random()).toFixed(0);
  return arr[index];
}
function createWizard() {
  return {
    name: getRandomValue(WIZARDS_NAMES) + ' ' + getRandomValue(WIZARDS_SURNAMES),
    coatColor: getRandomValue(COAT_COLORS),
    eyesColor: getRandomValue(EYES_COLORS)
  };
}
function renderWizard(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

for (var j = 1; j <= 4; j++) {
  wizards.push(createWizard());
}


for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// userDialog.querySelector('.setup-similar').classList.remove('hidden');

function onPopupEscPress(evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function (evt) {
  wizardCoat.style.fill = getRandomValue(COAT_COLORS);
});

wizardEyes.addEventListener('click', function (evt) {
  wizardEyes.style.fill = getRandomValue(EYES_COLORS);
});

wizardFireball.addEventListener('click', function (evt) {
  wizardFireball.style.background = getRandomValue(FIREBALL_COLORS);
});
