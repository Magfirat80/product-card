/* 3. Создать функцию, которая принимает 2 параметра: 
город и температуру и выводит сообщение в консоль 
"Сейчас в X температура  — Y градусов по Цельсию" */

function showCityTemperature(city, temperature) {
  console.log(`Сейчас в городе ${city} температура - ${temperature} градусов по Цельсию`)
}

showCityTemperature('Дубай', 30);

/* 4. Создать переменную, которая хранит внутри себя скорость звука (гуглим).
Создать функцию, которая принимает 1 параметр - скорость, 
внутри функции происходит проверка: если переданная скорость
 выше скорости звука - выводим лог "Сверхзвуковая скорость", 
 если ниже - "Дозвуковая скорость" */

const SPEED_SOUND = 343;

function checkSpeed(currentSpeed) {
  if (currentSpeed > SPEED_SOUND) {
    console.log('Сверхзвуковая скорость')
  } else {
    console.log('Дозвуковая скорость')
  }
}

checkSpeed(340);

/* 5. Создать переменную №1, которая содержит продукт и переменную №2, 
которая содержит его цену (на ваше усмотрение). Далее создаем функцию, 
которая принимает 1 параметр - текущий бюджет, внутри функции происходит 
проверка: если бюджет превышает цену товара - выводим лог 
"(ваше название товара) приобретён. Спасибо за покупку!", если нет - 
обсчитываем разницу и выводим лог "Вам не хватает X$, пополните баланс". */

const nameProduct = 'Хлеб';
const priceProduct = 45;

function buyProduct(budget) {
  if (budget >= priceProduct) {
    console.log(`${nameProduct} прибретен. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${priceProduct - budget}, пополните баланс`)
  }
}

buyProduct(50);

/* 6. Создать 1 функцию и именовать её по своему усмотрению */

const currentLogin = 'AdminITSim'
const currenPassword = 'JSTSAng'
function checkAccess(login, password) {
  if (login === currentLogin && password === currenPassword) {
    console.log('Access is allowed!')
  } else {
    console.log('Access is denied!')
  }
}

checkAccess('AdminITSim', 'JSTSAnG');

/* 7. Создать 3 переменных (без разницы каких) и 
именовать их по своему усмотрению */

let nameStudent = 'John';

let sizeShoes = 42;

let isMarried = true;
