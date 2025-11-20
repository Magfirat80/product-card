import { cards } from "./cards.js";

/* 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек. */

const cardTemplate = document.querySelector('#card-template');
const cardList = document.querySelector('#card-list');

function showCards(cards, limit = 5) {
  cards.slice(0, limit).forEach((card, index) => {
    const cardClone = cardTemplate.content.cloneNode(true);

    cardClone.querySelector('.product-category').textContent = card.productCategory;
    cardClone.querySelector('.product-name').textContent = card.productName;
    cardClone.querySelector('.product-description').textContent = card.productDescription;
    cardClone.querySelector('.content').textContent = card.content;
    cardClone.querySelector('#product-compound-item-1').textContent = card.productCompoundItem_1;
    cardClone.querySelector('#product-compound-item-2').textContent = card.productCompoundItem_2;
    cardClone.querySelector('#product-compound-item-3').textContent = card.productCompoundItem_3;
    cardClone.querySelector('.product-price-label').textContent = card.productPriceLabel;
    cardClone.querySelector('.product-price').textContent = card.productPrice;
    cardList.appendChild(cardClone)  
  });
}

// showCards(cards);

/* 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных 
точкой с запятой */

const namesProduct = cards.reduce((acc, card) => {
  acc.push(card.productName);
  return acc
}, [])

console.log('Упражнение 4:', namesProduct.join(';'))


/* 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением 
- его описание */

const objectsNameKeyValueDescription = cards.reduce((acc, card) => {
  acc[card.productName] = card;
  return acc
}, [])

console.log('Упражнение 5:', objectsNameKeyValueDescription);


/* 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек 
отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита 
от введенных других значений (имеется ввиду проверка if) */

function getValidCardCountThenDisplay() {
  let count;
  let isValid = false;
  while (!isValid) {
    const answer = prompt('Сколько карточек отобразить? Введите значение от 1 до 5:', '-');
    count = Number(answer);
    if (!isNaN(count) && count >= 1 && count <= 5 && Number.isInteger(count)) {
      isValid = true;
    } else {
      alert('Пожалуйста, введите значение от 1 до 5!')
    }
  }
  return showCards(cards, count)
}

console.log('Упражнение 6:', getValidCardCountThenDisplay())