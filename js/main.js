function randomDigit (min, max) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomDigit (1, 5);

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

randomDigitPoint (1, 9, 5);
