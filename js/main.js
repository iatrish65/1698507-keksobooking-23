import './util.js';
import './data.js';
import './popup.js';

/*import {
  getRandomArrayElement,
  getShuffleArray,
  getAuthor,
  getTitle,
  getDescription,
  getLocation,
  getOffer,
  createList,
  getNewArray
} from './util.js';

import {
  DECIMAL_PLACES,
  VARIABLE_MIN,
  VARIABLE_MAX,
  NUMBER_ADS,
  TITLES,
  PRICE,
  TYPES,
  ROOMS,
  GUESTS,
  CHECKIN,
  CHECKOUT,
  FEATURES,
  DESCRIPTIONS,
  PHOTOS,
  LOCATION
} from './data.js';
*/
function randomDigit (min, max) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDigitPoint (min, max, num) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }

  if (num < 0) {
    throw new Error('Значение должно быть больше или равно 0');
  }

  if ((num ^ 0) !== num) {
    throw new Error('Значение должно быть целым числом');
  }

  const decimalPoint = Math.pow(10, num);
  const random = +((min + Math.random() * (max - min)).toFixed(num));
  return Math.floor((random) * decimalPoint) / decimalPoint;
}

export {
  randomDigit,
  randomDigitPoint
};
