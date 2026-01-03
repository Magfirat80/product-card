/*  При переходе на async.html мы отображаем по центру страницы строку: "Данные загружаются". 
  Это в том случае, если локальное хранилище не заполнено данными и мы еще не сделали запрос.
 
  Чтобы запросить данные - мы должны сделать запрос через fetch (используйте setTimeout 
для симуляции длительной загрузки) к нашему json файлу и получив их - сохранить в локальное 
хранилище (если их там не было при загрузке страницы. Если данные  изначально были в локальном 
хранилище, то делать запрос — нет смысла).

  Отобразить пользователей в виде карточек, по центру страницы, убрав надпись: "данные загружаются". 
  Реализовать кнопки для управления пользователями (Удалить все карточки, удалить определенную 
карточку, получить все карточки)

  Все данные должны быть синхронизированы с локальным хранилищем. Если вы удалили карточку — то после 
перезагрузки страницы их должно быть то же количество.

  Обработать различные сценарии (отображать ошибку через new Error, если данные не загрузились и 
отображать текст на странице "Ошибка при загрузке данных" и так далее, отображать информационное 
сообщение, если пользователь хочет получить всех пользователей, а у него отображены и так 
все пользователи  и т.д.)

Ключевой результат:
Если данных нет — показываем пользователю сообщение про загрузку
Данные не загрузились — отображаем ошибку
Данные загрузились или меняются — отображаем и синхронизируем с локальным хранилищем
Кнопка для удаления всех карточек
Кнопка для удаления определенной карточки (это делается через метод массива .filter())
Кнопка для получения всех карточек

Вёрстка по желанию */
const statusBar = document.querySelector('.status-bar');
let hasClickedShowAllCardsButton = false;
const cardList = document.querySelector('#card-list');
const cardTemplate = document.querySelector('#card-template');
const limitNumberOfCards = 4;

function createCards(arrayOfUsers, limit = arrayOfUsers.length) {
  cardList.innerHTML = '';
  arrayOfUsers.slice(0, limit).forEach(user => {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector('.user-name-label').textContent = 'Имя:';
    cardClone.querySelector('.user-name').textContent = user.name;
    
    cardClone.querySelector('.user-surname-label').textContent = 'Фамилия:';
    cardClone.querySelector('.user-surname').textContent = user.surname;

    cardClone.querySelector('.user-email-label').textContent = 'Почта:';
    cardClone.querySelector('.user-email').textContent = user.email;

    cardClone.querySelector('.user-age-label').textContent = 'Возраст:';
    cardClone.querySelector('.user-age').textContent = user.age;

    cardClone.querySelector('.user-country-label').textContent = 'Страна:';
    cardClone.querySelector('.user-country').textContent = user.country;

    cardClone.querySelector('.user-city-label').textContent = 'Город:';
    cardClone.querySelector('.user-city').textContent = user.city;

    const deleteCardButton = cardClone.querySelector('.delete-card-button');
    deleteCardButton.addEventListener('click', () => {
      deleteCard(user.id);
    });

    cardList.appendChild(cardClone);
  });
}

function deleteCard(userId) {
  const usersData = localStorage.getItem('users');
  const data = JSON.parse(usersData);
  data.users = data.users.filter(user => user.id !== userId);
  localStorage.setItem('users', JSON.stringify(data));

  const limit = hasClickedShowAllCardsButton ? data.users.length : limitNumberOfCards;
  createCards(data.users, limit);
};

const deleteAllCardsButton = document.querySelector('#delete-all-cards-button');
deleteAllCardsButton.addEventListener('click', () => {
  deleteAllCards();
});

function deleteAllCards() {
  localStorage.removeItem('users');
  cardList.innerHTML = '';
  hasClickedShowAllCardsButton = false;
  showDataProcessingStatus('Все карточки удалены', 'success');
};

const showAllCardsButton = document.querySelector('#show-all-cards-button');
showAllCardsButton.addEventListener('click', () => {
  hasClickedShowAllCardsButton = true;
  showAllCards();
});

function showAllCards() {
  const usersData = localStorage.getItem('users');
  if(!usersData) {
    return showDataProcessingStatus('Нет данных для отображения', 'info');
  };
  
  const data = JSON.parse(usersData);
  if(cardList.children.length === data.users.length) {
    return showDataProcessingStatus('Все пользователи уже отображены', 'info');
  }
  
  createCards(data.users);
  showDataProcessingStatus('Показаны все пользователи', 'success');
};

function showDataProcessingStatus(message, type = 'info') {
  if(!statusBar) return;
  statusBar.textContent = message;
  statusBar.className = `status-bar ${type}`;
}

const start = () => {
  const usersData = localStorage.getItem('users');
  if (!usersData) {
    showDataProcessingStatus('Загрузка данных...', 'info');

    setTimeout(() => {
      fetch('./users.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('users', JSON.stringify(data));
        createCards(data.users, limitNumberOfCards);
        showDataProcessingStatus('Данные загружены', 'success');
      })
      .catch(error => {
        showDataProcessingStatus('Ошибка при загрузке данных', 'error');
        throw new Error('Данные не загрузились')
      });
    }, 1500);
  } else {
    const data = JSON.parse(usersData);
    console.log('Данные содержатся в LocalStorage', data);
    createCards(data.users, limitNumberOfCards);
  }
}

start();
