

//Кнопка окрашивания первой карточки
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first_card-button');
const colorHashFirst = '#250580';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = colorHashFirst
})

//Кнопка окрашивания всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all_card-button');
const colorHashAll = '#802505';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => {card.style.backgroundColor = colorHashAll
  })
})

//Кнопка открытия страницы Google
const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm ('Вы действительно хотите открыть Google?')
  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Кнопка вывода предупреждения и сообщения в консоль
const outputAlertAndMessageToConsoleLogButton = document.querySelector('#output-alert-and-message-to-console-log-button');
const productSelect = document.querySelector('.product-select');

outputAlertAndMessageToConsoleLogButton.addEventListener('click', () => outputMessageToConsoleLog('ДЗ №4'))

function outputMessageToConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Кнопка, меняющая свои цвета
const changeOwnColorButton = document.querySelector('#change-own-color-button');

changeOwnColorButton.addEventListener('click', () => {
  changeOwnColorButton.classList.toggle('second-color')
})

// При наведении на главный заголовок ("Выбери свой продукт") - он выводится в консоль. (контент элемента)
const headerProductSelect = document.querySelector('.product-select');

headerProductSelect.addEventListener('mouseover', outputToConsoleLog);

function outputToConsoleLog() {
  console.log(headerProductSelect.textContent)
}