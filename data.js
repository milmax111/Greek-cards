// data.js

// Импортируем каждый набор из своего файла
import { verbs } from './verbs.js';
import { nouns } from './nouns.js';
import { advPron } from './advPron.js';
import { adjectives } from './adjectives.js';

// Экспортируем единый объект со всеми четырьмя наборами
export const data = {
  verbs,       // 200 глаголов с формами past/future
  nouns,       // 200 существительных
  advPron,     // 100 наречий и местоимений
  adjectives   // 100 прилагательных
};
