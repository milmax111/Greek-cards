// script.js

import { verbs }      from './verbs.js';
import { nouns }      from './nouns.js';
import { advPron }    from './advPron.js';
import { adjectives } from './adjectives.js';

const data = { verbs, nouns, advPron, adjectives };

let currentSet      = 'verbs';
let currentArray    = data[currentSet];
let currentIndex    = 0;
let isRandomMode    = false;
let currentLanguage = 'ru-gr';
let isFlipped       = false;

// DOM-элементы
const cardEl     = document.getElementById('flashcard');
const wordEl     = document.getElementById('greek-word');
const pastEl     = document.getElementById('past-tense');
const futureEl   = document.getElementById('future-tense');
const pluralEl   = document.getElementById('plural');
const prevBtn    = document.getElementById('previous');
const nextBtn    = document.getElementById('next');
const setSelect  = document.getElementById('set-switch');
const langSelect = document.getElementById('language-switch');
const modeSelect = document.getElementById('mode-switch');

// Вспомогательная: возвращает артикль по роду
function getArticle(gender) {
  switch (gender) {
    case 'm': return 'ο';
    case 'f': return 'η';
    case 'n': return 'το';
    default:  return '';
  }
}

function showFlashcard() {
  const entry = currentArray[currentIndex];

  // Очистка
  wordEl.textContent   = '';
  pastEl.textContent   = '';
  futureEl.textContent = '';
  pluralEl.textContent = '';

  if (currentSet === 'nouns') {
    // Для существительных используем особую логику
    const article = getArticle(entry.gender);
    if (!isFlipped) {
      // лицо: зависит от языка
      if (currentLanguage === 'ru-gr') {
        wordEl.textContent = entry.translation;      // русский перевод
      } else {
        // греческое слово с артиклем
        wordEl.textContent = `${article} ${entry.greek}`;
      }
    } else {
      // оборотная сторона: перевёрнутый показ
      if (currentLanguage === 'ru-gr') {
        // греческое слово с артиклем
        wordEl.textContent = `${article} ${entry.greek}`;
      } else {
        // русский перевод
        wordEl.textContent = entry.translation;
      }
      // показываем только множественное число
      pluralEl.textContent = entry.plural;
    }
    return;
  }

  // Для всех остальных наборов (verbs, advPron, adjectives)
  // Сначала очистка форм
  if (!isFlipped) {
    // лицо
    wordEl.textContent = currentLanguage === 'ru-gr'
      ? entry.translation
      : entry.greek;
  } else {
    // оборот
    wordEl.textContent = currentLanguage === 'ru-gr'
      ? entry.greek
      : entry.translation;

    if (currentSet === 'verbs') {
      pastEl.textContent   = entry.past;
      futureEl.textContent = entry.future;
    }
    // advPron и adjectives: нет доп. полей
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
setSelect.addEventListener('change', e => {
  currentSet   = e.target.value;
  currentArray = data[currentSet];
  currentIndex = 0;
  isFlipped    = false;
  showFlashcard();
});

langSelect.addEventListener('change', e => {
  currentLanguage = e.target.value;
  isFlipped       = false;
  showFlashcard();
});

modeSelect.addEventListener('change', e => {
  isRandomMode = (e.target.value === 'random');
  isFlipped    = false;
  showFlashcard();
});

// Кнопки и навигация
prevBtn.addEventListener('click', previousCard);
nextBtn.addEventListener('click', nextCard);
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

// Старт
showFlashcard();
