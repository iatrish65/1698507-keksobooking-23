const PRICE = {
  min: 10000,
  max: 50000,
};

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
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

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function randomDigit (min, max) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//randomDigit (1, 5);

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

//randomDigitPoint (1, 9, 5);

const RandomArrayElement = (elements) => elements[randomDigit(0, elements.length - 1)];

const ShuffleArray = (array) => array.sort(() => Math.random() - 0.5).slice(Math.floor(Math.random()*array.length));

const ImageNumber = () => {
  const number = randomDigit (1, 10);

  if (number < 10) {
    return `user0${number}`;
  }
  return `user${number}`;
};

const Author = () => ({
  avatar: `img/avatars/${ImageNumber()}.png`,
});

const Title = () => `'Аппартаменты для вас'${randomDigit (1, 10)}`;

const Description = () => `'Наполнение обстановки по вашему настроению'${randomDigit (1, 10)}`;

const Location = () => ({
  lat: randomDigitPoint(35.65000, 35.70000, 5),
  lng: randomDigitPoint(139.70000, 139.80000, 5),
});

const Offer = () => ({
  title: Title(),
  adress: `${Location().lat} , ${Location().lng}`,
  price: randomDigit(PRICE.min, PRICE.max),
  rooms: randomDigit(1, 4),
  guests: randomDigit(1, 10),
  type: RandomArrayElement(TYPE),
  checkin: RandomArrayElement(CHECKIN),
  checkout: RandomArrayElement(CHECKOUT),
  features: ShuffleArray(FEATURES),
  photos: ShuffleArray(PHOTOS),
  description: Description(),

});

const createList = () => ({
  autor: Author(),
  offer: Offer(),
  location: Location(),
});

const NewArray = new Array(10).fill(null).map(() => createList());

export {NewArray};
