//const AUTHOR = {
//  avatar: img/avatars/user{getImageNumber()}.png
//};

//offer:

const TITLES = [
  'Уютный рай в центре города',
  'Хайтек для продвинутых около метро',
  'Для творчества в тихом районе',
  'Молодежная для вечеринок',
  'Молодой семье рядом баня и детский сад',
];

//const ADDRESS = {{location.lat}}, {{location.lng}};

const PRICE = {
  min: 1000,
  max: 50000,
};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS = {
  min: 1,
  max: 5,
};

const GUESTS = {
  min: 1,
  max: 10,
};

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Лучшее жильё',
  'Солнце на небесах',
  'Ремонт хайтек',
  'Свежая техника - свежие чувства',
  'Добродушное окружение',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const Location = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
};


function randomDigit (min, max) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDigitPoint (min, max, nut) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }

  if (nut < 0) {
    throw new Error('Значение должно быть больше или равно 0');
  }

  if ((nut ^ 0) !== nut) {
    throw new Error('Значение должно быть целым числом');
  }

  const decimalPoint = Math.pow(10, nut);
  const random = +((min + Math.random() * (max - min)).toFixed(nut));
  return Math.floor((random) * decimalPoint) / decimalPoint;
}


const getRandomArrayElement = (elements) => elements[randomDigit(0, elements.length - 1)];

const getShuffleArray = (array) => array.sort(() => Math.random() - 0.5).slice(Math.floor(Math.random()*array.length));

const getImageNumber = () => {
  const number = randomDigit (1, 10);
  return (number < 10) ? `user0${number}` : `user${number}`;
};

const getAuthor = () => ({
  avatar: `img/avatars/user${getImageNumber()}.png`,
});

const getTitle = () => `Предложение №${randomDigit (1, 10)}`;

const getDescription = () => `Описание №${randomDigit (1, 10)}`;

const getLocation = () => {
  const lat = randomDigitPoint(Location.LAT_MIN, Location.LAT_MAX, 5);
  const lng = randomDigitPoint(Location.LNG_MIN, Location.LNG_MAX, 5);
  return  (`${lat} , ${lng}`);
};

//const pointLocation = new Array(10).fill().map(() => getLocation());

const getOffer = () => ({
  title: getTitle(TITLES),
  adress: getLocation(),
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

const createList = () => ({
  autor: getAuthor(),
  offer: getOffer(),
  location: getLocation(),
});

const getNewArray = new Array(10).fill().map(() => createList());
export {getNewArray};
