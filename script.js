// script.js

import { verbs }      from './verbs.js';
import { nouns }      from './nouns.js';
import { advPron }    from './advPron.js';
import { adjectives } from './adjectives.js';

// Ключи должны совпадать с value в <select id="set-switch">
const data = { verbs, nouns, advPron, adjectives };

let currentSet      = 'verbs';
let currentArray    = data[currentSet];
let currentIndex    = 0;
let isRandomMode    = false;
let currentLanguage = 'ru-gr';
let isFlipped       = false;

// Элементы
const cardEl   = document.getElementById('flashcard');
const mainEl   = document.getElementById('greek-word');
const pastEl   = document.getElementById('past-tense');
const futureEl = document.getElementById('future-tense');
// Получаем, но не падаем, если нет
const genderEl = document.getElementById('gender');
const pluralEl = document.getElementById('plural');

function showFlashcard() {
  const entry = currentArray[currentIndex];

  // очистка
  mainEl.textContent   = '';
  pastEl.textContent   = '';
  futureEl.textContent = '';
  if (genderEl) genderEl.textContent = '';
  if (pluralEl) pluralEl.textContent = '';

  if (!isFlipped) {
    // лицевая сторона
    mainEl.textContent = currentLanguage === 'ru-gr'
      ? entry.translation
      : entry.greek;
  } else {
    // оборотная сторона
    mainEl.textContent = currentLanguage === 'ru-gr'
      ? entry.greek
      : entry.translation;

    if (currentSet === 'verbs') {
      pastEl.textContent   = entry.past;
      futureEl.textContent = entry.future;
    } else if (currentSet === 'nouns' && genderEl && pluralEl) {
      genderEl.textContent = entry.gender;
      pluralEl.textContent = entry.plural;
    }
    // advPron и adjectives — доп. полей нет
  }
}

function toggleFlip() {
  isFlipped = !isFlipped;
  showFlashcard();
}

function nextCard() {
  currentIndex = isRandomMode
    ? Math.floor(Math.random() * currentArray.length)
    : (currentIndex + 1) % currentArray.length;
  isFlipped = false;
  showFlashcard();
}

function previousCard() {
  currentIndex = isRandomMode
    ? Math.floor(Math.random() * currentArray.length)
    : (currentIndex - 1 + currentArray.length) % currentArray.length;
  isFlipped = false;
  showFlashcard();
}

// Переключатели
document.getElementById('set-switch').addEventListener('change', e => {
  currentSet   = e.target.value;
  currentArray = data[currentSet];
  currentIndex = 0;
  isFlipped    = false;
  showFlashcard();
});

document.getElementById('language-switch').addEventListener('change', e => {
  currentLanguage = e.target.value;
  isFlipped       = false;
  showFlashcard();
});

document.getElementById('mode-switch').addEventListener('change', e => {
  isRandomMode = (e.target.value === 'random');
  isFlipped    = false;
  showFlashcard();
});

// Навигация и переворот
cardEl.addEventListener('click', toggleFlip);
document.addEventListener('keydown', e => {
  if (e.key === ' ') {
    e.preventDefault();
    toggleFlip();
  } else if (e.key === 'ArrowRight') {
    nextCard();
  } else if (e.key === 'ArrowLeft') {
    previousCard();
  }
});

// Инициализация
showFlashcard();
