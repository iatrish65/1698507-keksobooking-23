function randomDigit (min, max) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function randomDigitPoint (min, max, n) {
  if (min >= max || min < 0 || max <= 0) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше числа "до".');
  }

  if (n < 0) {
    throw new Error('Значение должно быть больше или равно 0');
  }

  if ((n ^ 0) !== n) {
    throw new Error('Значение должно быть целым числом');
  }

  const decimalPoint = Math.pow(10, n);
  const random = +((min + Math.random() * (max - min)).toFixed(n));
  return Math.floor((random) * decimalPoint) / decimalPoint;
}
