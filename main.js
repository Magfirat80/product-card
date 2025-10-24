

//Кнопка окрашивания первой карточки
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');
const ultramarineColor = '#250580';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = ultramarineColor
})

//Кнопка окрашивания всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards-button');
const teaColor = '#802505';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => {card.style.backgroundColor = teaColor
  })
})

//Кнопка открытия страницы Google
const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')
  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Кнопка вывода предупреждения и сообщения в консоль
const alertAndMessageToConsoleButton = document.querySelector('#alert-and-message-to-console-button');

alertAndMessageToConsoleButton.addEventListener('click', () => outputAlertAndMessageToConsole('ДЗ №4'))

function outputAlertAndMessageToConsole(message) {
  alert(message)
  console.log(message)
}

// Кнопка, меняющая свои цвета
const changeOwnColorButton = document.querySelector('#change-own-color-button');

changeOwnColorButton.addEventListener('click', () => {
  changeOwnColorButton.classList.toggle('bg-aqua')
})

// При наведении на главный заголовок ("Выбери свой продукт") - он выводится в консоль.
const mainHeader = document.querySelector('.main-header');

mainHeader.addEventListener('mouseover', outputToConsole);

function outputToConsole() {
  console.log(mainHeader.textContent)
}