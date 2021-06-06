//первая функция

let accountRoom = function() {
  let daysRoom = 5;
  let roomPrice = 100;
  let accountRoom = daysRoom * roomPrice;

  console.log("Стоимость проживания составит за " + daysRoom + " дней: " + accountRoom + " рублей.");

  return accountRoom;

    if (daysRoom => roomPrice) {
     return accountRoom*0.5;
    };
};
  //accoutRoom();

//вторая функция.

function sumNamber(min, max, maxDigits = 0) {
    if (min > max || min < 0 || max <= 0) {
      return ('Задан неверный диапазон! Укажите другие числа.');
    }

    const digitsDegree = 3 ** maxDigits;
    return ((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  }
  //sumNamber(1, 2, 6);
