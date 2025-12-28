import { productCards } from "./cards.js";

/* 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек. */

const cardList = document.querySelector('#card-list');
const cardTemplate = document.querySelector('#card-template');

function createCards(productCards, limit = 5) {
  productCards.slice(0, limit).forEach(card => {
    const cardClone = cardTemplate.content.cloneNode(true);

    cardClone.querySelector('#product-image').src = `./images/${card.image}.png`;
    cardClone.querySelector('.product-category').textContent = card.category;
    cardClone.querySelector('.product-name').textContent = card.name;
    cardClone.querySelector('.product-description').textContent = card.description;
    cardClone.querySelector('.content').textContent = 'Состав:';
    
    const compoundList = cardClone.querySelector('#product-compound-list');
    
    card.compound.forEach(element => {
      const li = document.createElement('li');
      li.textContent = element;
      compoundList.appendChild(li);
    });
    
    cardClone.querySelector('.product-price-label').textContent = 'цена';
    cardClone.querySelector('.product-price').textContent = card.price + '\u20BD';
    cardList.appendChild(cardClone);
  })
}

/* 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных 
точкой с запятой */

const namesProduct = productCards.reduce((acc, card) => {
  acc.push(card.name);
  return acc;
}, []);

console.log('Упражнение 4:', namesProduct.join(';'));

/* 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением 
- его описание */

const objectsNameKeyValueDescription = productCards.reduce((acc, card) => {
  acc[card.name] = card.description;
  return acc;
}, []);

/* 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек 
отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита 
от введенных других значений (имеется ввиду проверка if) */

function showCards() {
  let count;
  let isValid = false;
  while (!isValid) {
    const answer = prompt('Сколько карточек отобразить? Введите значение от 1 до 5:', '-');
    count = Number(answer);
    if (!isNaN(count) && count >= 1 && count <= 5 && Number.isInteger(count)) {
      isValid = true;
    } else {
      alert('Пожалуйста, введите значение от 1 до 5!');
    }
  }
  createCards(productCards, count);
}

showCards();
