import {
  ITEM_TYPES,
  ROOMS,
  GUESTS
} from './data.js';

import {
  createMultiNames,
  removeExtra,
  fillPhotoOrDelete
} from './util.js';

const SIMILAR_CARD_TEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');

const displayAd = (data) => {
  const { offer, author } = data;
  const cardElement = SIMILAR_CARD_TEMPLATE.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = ITEM_TYPES[offer.type];

  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${createPluralNames(offer.rooms, ROOMS)} для ${offer.guests} ${createPluralNames(offer.guests, GUESTS)}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;

  const offerFeatureClasses = offer.features && offer.features.map((features) => `popup__feature--${features}`) || [];
  const featureElementList = cardElement.querySelectorAll('.popup__feature');

  removeExtra(featureElementList, offerFeatureClasses);

  cardElement.querySelector('.popup__description').textContent = offer.description;
  const POPUP_PHOTOS = cardElement.querySelector('.popup__photos');
  const POPUP_PHOTO = POPUP_PHOTOS.querySelector('.popup__photo');
  fillPhotoOrDelete(offer.photos, POPUP_PHOTOS, POPUP_PHOTO);

  cardElement.querySelector('.popup__avatar').src = author.avatar;

  return cardElement;
};

export {
  displayAd
};

displayAd = require("./popup");
