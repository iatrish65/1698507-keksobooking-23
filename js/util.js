import {
  randomDigit,
  randomDigitPoint
} from './main.js';

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

const getRandomArrayElement = (elements) => elements[randomDigit(0, elements.length - 1)];

const getShuffleArray = (array) => array.sort(() => Math.random() - 0.5).slice(Math.floor(Math.random()*array.length));

const digitLeft = (num) => String(num).padStart(2, '0');
const getAuthor = (num) => ({
  avatar: `img/avatars/user${digitLeft(num+1)}.png`,
});

const getTitle = () => `Предложение №${randomDigit (VARIABLE_MIN, VARIABLE_MAX)}`;

const getDescription = () => `Описание №${randomDigit (VARIABLE_MIN, VARIABLE_MAX)}`;

const getLocation = () => {
  const lat = randomDigitPoint(LOCATION.LAT_MIN, LOCATION.LAT_MAX, DECIMAL_PLACES);
  const lng = randomDigitPoint(LOCATION.LNG_MIN, LOCATION.LNG_MAX, DECIMAL_PLACES);
  return  {
    lat,
    lng,
  };
};

const getOffer = (pointLocation) => ({
  title: getTitle(TITLES),
  address: `${pointLocation.lat}, ${pointLocation.lng}`,
  price: randomDigit(PRICE.min, PRICE.max),
  rooms: randomDigit(ROOMS.min, ROOMS.max),
  guests: randomDigit(GUESTS.min, GUESTS.max),
  type: getRandomArrayElement(TYPES),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: getShuffleArray(FEATURES),
  photos: getShuffleArray(PHOTOS),
  description: getDescription(DESCRIPTIONS),
});

const createList = (num) => {
  const pointLocation = getLocation();
  return {
    author: getAuthor(num),
    offer: getOffer(pointLocation),
    location: pointLocation,
  };
};

const getNewArray = new Array(NUMBER_ADS).fill().map((it, num) => createList(num));

export {
  getRandomArrayElement,
  getShuffleArray,
  getAuthor,
  getTitle,
  getDescription,
  getLocation,
  getOffer,
  createList,
  getNewArray
};
