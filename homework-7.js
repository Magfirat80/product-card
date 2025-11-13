/* 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил 
массив чисел, начиная с 5. */

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArrayOfNumbers = arrayOfNumbers.filter(number => number >= 5);
console.log('Упражнение 2:', filteredArrayOfNumbers)


/* 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы,
 мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность. */

const fixedAssets = [
  {
    name: 'принтер  Epson Stylus T50',
    number: '10104.1.0000009',
    balanceCost: 12633,
    amortization: 12633
  },
  {
    name: 'Компьютер',
    number: '110104.1.00002',
    balanceCost: 18000,
    amortization: 18000
  },
  {
    name: 'Шкаф жарочный ШЖЭ-3',
    number: '110104.1.000200',
    balanceCost: 64449,
    amortization: 54781
  },
  {
    name: 'Рейсмусовый станок',
    number: '110104.2.0140',
    balanceCost: 30847,
    amortization: 23039
  },
  {
    name: 'телевизор Toshiba',
    number: '110104.1.0072',
    balanceCost: 5348,
    amortization: 5348
  },
  {
    name: 'Холодильник Атлант',
    number: '310104.1.0170',
    balanceCost: 20990,
    amortization: 2448
  },
  {
    name: 'Видеорегистратор BestDVD801',
    number: '110104.3.0196',
    balanceCost: 40217,
    amortization: 27057
  }
]
 
const findedItems = fixedAssets.find(item => item.balanceCost > item.amortization);
console.log('Упражнение 3:',findedItems);


/* 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на 
противоположный ("переворачивать"). Два вышеуказанных массива с помощью этой функции перевернуть. */

function reverseArray(array) {
  return array.reverse()
};

reverseArray(arrayOfNumbers);
console.log('Упражнение 4_1:', arrayOfNumbers);

reverseArray(fixedAssets);
console.log('Упражнение 4_2:', fixedAssets);


/* 5. Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов 
этого массива (https://jsonplaceholder.typicode.com/comments). Данный массив представляет собой 
пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу. Не забудьте
 удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это
  вручную) */

/* 6. Сделать константу экспортируемой, добавив перед "const" ключевое слово "export". Таким образом
 мы сможем внедрить переменную из comments.js в homework-7.js и работать с ней. Когда мы введем 
 название переменной, нам предложит импортировать ее - так и делаем. */

import {comments} from "./comments.js"
console.log('Упражнение 6:', comments)


/* 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"*/

const arrayWithMailCom = comments.filter(item => item.email.includes('.com'));
console.log('Упражнение 7:', arrayWithMailCom);


/* 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели
 postId: 2, а те, у кого id больше 5, имели postId: 1 */

const arrayIdPostId = comments.map(item => {
  return {...item, postId: item.id <=5 ? 2 : 1}
})

console.log('Упражнение 8:', arrayIdPostId)


/* 9. Перебрать массив, что бы объекты состояли только из айди и имени */

const arrayIdName = comments.map(item => ({id: item.id, name: item.name}))
console.log('Упражнение 9:', arrayIdName)


/* 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела 
сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */

const arrayWithPropertyLengthBody = comments.map(item => {
  return {...item, isInvalid: item.body.length > 180 ? true : false}
})
console.log('Упражнение 10:', arrayWithPropertyLengthBody)


/* 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже 
самое с помощью метода map */

const arrMail = comments.reduce((acc, item) => {
  acc.push(item.email);
  return acc;
}, []);
console.log('Упражнение 11_1:', arrMail);

const arrMailMap = comments.map(item => item.email)
console.log('Упражнение 11_2:', arrMailMap);


/* 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к 
строке. */

console.log('Упражнение 12_1:', arrMail.toString());
console.log('Упражнение 12_2:', arrMailMap.join())