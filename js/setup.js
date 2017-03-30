'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var countNames = function () {
  return ((WIZARDS_NAMES.length - 1) * Math.random()).toFixed(0);
};

var countSurnames = function () {
  return ((WIZARDS_SURNAMES.length - 1) * Math.random()).toFixed(0);
};
var countCoatColors = function () {
  return ((COAT_COLORS.length - 1) * Math.random()).toFixed(0);
};
var countEyesColors = function () {
  return ((EYES_COLORS.length - 1) * Math.random()).toFixed(0);
};

var wizards = [
  {
    name: WIZARDS_NAMES[countNames()] + ' ' + WIZARDS_SURNAMES[countSurnames()],
    coatColor: COAT_COLORS[countCoatColors()],
    eyesColor: EYES_COLORS[countEyesColors()]
  },
  {
    name: WIZARDS_NAMES[countNames()] + ' ' + WIZARDS_SURNAMES[countSurnames()],
    coatColor: COAT_COLORS[countCoatColors()],
    eyesColor: EYES_COLORS[countEyesColors()]
  },
  {
    name: WIZARDS_NAMES[countNames()] + ' ' + WIZARDS_SURNAMES[countSurnames()],
    coatColor: COAT_COLORS[countCoatColors()],
    eyesColor: EYES_COLORS[countEyesColors()]
  },
  {
    name: WIZARDS_NAMES[countNames()] + ' ' + WIZARDS_SURNAMES[countSurnames()],
    coatColor: COAT_COLORS[countCoatColors()],
    eyesColor: EYES_COLORS[countEyesColors()]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

