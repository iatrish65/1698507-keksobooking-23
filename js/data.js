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
  max: 1000000,
};

/*const HEAD_LINE = {
  MIN: 30,
  MAX: 100,
};

const PRICE_NITE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};*/

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ITEM_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const ROOMS = [
  'комната',
  'комнаты',
  'комнат',
];

const GUESTS = [
  'гостя',
  'гостей',
  'не для гостей',
];

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

export {
  DECIMAL_PLACES,
  VARIABLE_MIN,
  VARIABLE_MAX,
  NUMBER_ADS,
  TITLES,
  //HEAD_LINE,
  PRICE,
  //PRICE_NITE,
  TYPES,
  ITEM_TYPES,
  ROOMS,
  GUESTS,
  CHECKIN,
  CHECKOUT,
  FEATURES,
  DESCRIPTIONS,
  PHOTOS,
  LOCATION
};
