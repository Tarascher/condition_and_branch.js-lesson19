/*let a = true;
let b = false;
console.log(`A`, a, typeof a);
console.log(`B`, b, typeof b);*/

/*let a = 0; //true(+ / -) and false(0) любое число true , 0 только false
if (a) {
  console.log(`first `, a, typeof a);
} else {
  console.log(`second`, a, typeof a);
}*/

/*let a = 7 != 6; // !  true - если операторы разлечается
if (a) {
  console.log(`true`, a, typeof a);
} else {
  console.log(`false`, a, typeof a);
}*/

/*let age = +prompt(`какой ваш возраст`);

if (age >= 18) {
  //условие true
  alert(`Добро пожаловать`);
  // else  условие
} else {
  alert(`к сожалению но вы еще малы`);
  window.location = `https://sinoptik.ua`; //перенос при неправельном возрасте на другой сайт
}
*/
/*
// тернарный оператор
let sum = 25;
let taxTape = sum > 17 ? 18 : 0; //тернарный если сумма больше 17 то процент 18 если же меньше то не надо
let incomeTaxtRate = (sum * taxTape) / 100;
console.log(`incomeTaxtRate :  `, incomeTaxtRate, `грв`);
*/

/*let ege = +prompt(`введите возраст`);
let height = +prompt(`введите возраст`);
// \\ ИЛИ     && - и два должно быть TRUE
if (ege > 11 || height > 145) {
  console.log(`авто кресло не нужно`);
} else {
  console.log(`купи автокресло`);
}
*/

/*
// пин код с помощью do b while
let primeSum;

do {
  primeSum = +prompt(`введите код`);
  if (primeSum == `4455`) {
    console.log(`все верно`);
  } else {
    console.log(`к сожалению не верный пин`);
  }
} while (primeSum != `4455`);
*/
/*
//while() - цикл , способ многократного повторения фрагмента
let currentTemperatyre = 101;
let temperatyreLimit = 100;

while (currentTemperatyre < temperatyreLimit) {
  console.log(`temperature ${currentTemperatyre} C`);
  currentTemperatyre = currentTemperatyre + 5;
}
console.log(`heating ended at${currentTemperatyre} C`);
*/
/*
//цикл for для тех случаяв когда извесно сколько раз нужно повторить или иное действие
let steps = 10;
for (let i = 1; i < steps; i++) {
  console.log(`step ${i} of ${steps} `);
}

*/
/*
//операторы break  / continue
let steps = 100;
for (let i = 1; i <= steps; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  if (i == 18) {
    break;
  }
  console.log(`step ${i} of ${steps}`);
}
 */

/*
let sum = +prompt(
  `Введите необходимую сумму для снятия чтоб расчитать процент`
);
let rate = 0.01;
let low = 10;
let high = 250;
let fee = sum * rate;
console.log(`сумма платежа ${sum}`);
console.log(`предварительный процент${fee}`);
if (fee <= low) {
  fee = low;
}
if (fee >= high) {
  fee = high;
}
console.log(`ваш процент отсуммы ${sum} составит ${fee}грв`);
alert(`ваш процент отсуммы ${sum} составит ${fee}грв`);
*/
/* 
//даны две даты расчитываем полное количество лет

let d = 18;
let m = 12;
let y = 2022;

let bd = 17;
let bm = 09;
let by = 1987;

let age = y - by;

if (bm > m || (bm == m && bd > d)) {
  age--;
}
console.log(age);
*/

// body mass index  /  индекс массы тела
let height = +prompt(`укажите свой рост`);
let mass = +prompt(`укажите свой вес`);
let bodyMassIndex = (mass / Math.pow(height, 2)).toFixed(2);
console.log(bodyMassIndex);
if (bodyMassIndex <= 16) {
  console.log(
    `ваш коэфициент ${bodyMassIndex} - это выраженный дефецит массы тела`
  );
} else if (bodyMassIndex < 18.5) {
  console.log(`ваш коэфициент ${bodyMassIndex} - это недостаточная масс тела`);
} else if (bodyMassIndex < 25) {
  console.log(`ваш коэфициент ${bodyMassIndex} - это норма`);
} else if (bodyMassIndex < 30) {
  console.log(
    `ваш коэфициент ${bodyMassIndex} - это избыточная масса тела предожирение`
  );
} else if (bodyMassIndex < 35) {
  console.log(`ваш коэфициент ${bodyMassIndex} - это ожирение первой стадии`);
} else if (bodyMassIndex < 40) {
  console.log(`ваш коэфициент ${bodyMassIndex} - это ожирение второй стадии`);
} else if (40 < bodyMassIndex) {
  console.log(`ваш коэфициент ${bodyMassIndex} - это ожирение третей стадии`);
}

//высокосный год  /  leap year
let year = +prompt(`введите номер года который вы хотите проверить!!!`);
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`год высокосный ура `);
} else {
  console.log(`к сожалению но этот год не высокосный`);
}
