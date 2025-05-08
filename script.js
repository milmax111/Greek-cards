// script.js

import { verbs }      from './verbs.js';
import { nouns }      from './nouns.js';
import { advPron }    from './advPron.js';
import { adjectives } from './adjectives.js';

// Все наборы слов
const data = { verbs, nouns, advPron, adjectives };

// Текущие состояния
let currentSet      = 'verbs';
let currentArray    = data[currentSet];
let currentIndex    = 0;
let isRandomMode    = false;
let currentLanguage = 'ru-gr';
let isFlipped       = false;

// DOM-элементы
const cardEl        = document.getElementById('flashcard');
const wordEl        = document.getElementById('greek-word');
const pastEl        = document.getElementById('past-tense');
const futureEl      = document.getElementById('future-tense');
const genderEl      = document.getElementById('gender');
const pluralEl      = document.getElementById('plural');
const prevBtn       = document.getElementById('previous');
const nextBtn       = document.getElementById('next');
const setSelect     = document.getElementById('set-switch');
const langSelect    = document.getElementById('language-switch');
const modeSelect    = document.getElementById('mode-switch');

// Отрисовывает карточку в зависимости от состояния
function showFlashcard() {
  const entry = currentArray[currentIndex];

  // Очистка всех полей
  wordEl.textContent   = '';
  pastEl.textContent   = '';
  futureEl.textContent = '';
  if (genderEl) genderEl.textContent = '';
  if (pluralEl) pluralEl.textContent = '';

  if (!isFlipped) {
    // лицевая сторона: показываем перевод или слово
    wordEl.textContent = currentLanguage === 'ru-gr'
      ? entry.translation
      : entry.greek;
  } else {
    // оборотная сторона: показываем обратную сторону + доп. поля
    wordEl.textContent = currentLanguage === 'ru-gr'
      ? entry.greek
      : entry.translation;

    if (currentSet === 'verbs') {
      pastEl.textContent   = entry.past;
      futureEl.textContent = entry.future;
    } else if (currentSet === 'nouns' && genderEl && pluralEl) {
      genderEl.textContent = entry.gender;
      pluralEl.textContent = entry.plural;
    }
    // advPron и adjectives не имеют доп. полей
  }
}

// Переворачивает карточку
function toggleFlip() {
  isFlipped = !isFlipped;
  showFlashcard();
}

// Переход к следующей карточке
function nextCard() {
  currentIndex = isRandomMode
    ? Math.floor(Math.random() * currentArray.length)
    : (currentIndex + 1) % currentArray.length;
  isFlipped = false;
  showFlashcard();
}

// Переход к предыдущей карточке
function previousCard() {
  currentIndex = isRandomMode
    ? Math.floor(Math.random() * currentArray.length)
    : (currentIndex - 1 + currentArray.length) % currentArray.length;
  isFlipped = false;
  showFlashcard();
}

// Обработчики переключателей
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

// Обработчики кнопок
prevBtn.addEventListener('click', previousCard);
nextBtn.addEventListener('click', nextCard);

// Клик по карточке и пробел — переворот
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
