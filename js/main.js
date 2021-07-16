const DECIMAL_PLACES = 5;
const VARIABLE_MIN = 1;
const VARIABLE_MAX = 10;
const NUMBER_ADS = 11;

const TITLES = [
  'Уютный рай в центре города',
  'Хайтек для продвинутых около метро',
  'Для творчества в тихом районе',
  'Молодежная для вечеринок',
  'Молодой семье рядом баня и детский сад',
];

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

const LOCATION = {
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
