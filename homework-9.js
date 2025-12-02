/* 4. К Форме, которая прикреплена в футере - добавить логику:
email должен соответствовать стандартам (добавить валидацию), если он 
не заполнен - форма не отправляется. Кнопка "Подписаться" и есть 
"отправкой формы", при нажатии на которую мы будем выводить консоль лог 
в виде объекта:  { email: 'введенная почта' } */

const form = document.getElementById('subscribe-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('email');
  const value = input.value;
  const enteredMail = {email: value}
  console.log(enteredMail)
}

/* 5. Создать форму для регистрации. Она должна содержать поля: имя, 
фамилия, дата рождения, логин, пароль, повторение пароля. Используйте 
<label> для того, что бы указать пользователю, какое поле за что отвечает. 
Также важно использовать placeholder (обо всем этом можно будет почитать 
в документации в конце поста) Разрешается добавить поля на ваше усмотрение. 
Все поля должны иметь валидацию. Если пользователь ввел два разных пароля - 
мы должны предупредить его о том, что регистрация отклонена. Если регистрация 
успешна - также выводим объект с свойствами и их значениями, как в задании №4. 
Дополнительно мы должны добавить к этому объекту свойство createdOn и указать 
туда время создания (используем сущность new Date()) */

/* 6. Сохраняем этот объект в переменную для дальнейшего использования. */

const emailForm = document.querySelector('#form-registration');
const inputPassword = emailForm.password;
const inputPasswordRepetition = emailForm.passwordRepetition;
let user = undefined;
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputPasswordRepetition.value !== inputPassword.value) {
    alert('Пароли не совпадают. Регистрация отклонена!!!');
    inputPasswordRepetition.focus();
    return
  } else {
    alert('Регистрация принята!!!')
  }
  const formFromEvent = event.target;
  const formData = new FormData(formFromEvent);
  const dataForm = Object.fromEntries(formData.entries());
  dataForm.createdOn = (new Date ().toString());
  user = dataForm;
  console.log('Данные регистрации:', dataForm)
})

/* 7. Создать кнопку "Аутентификация", не стесняемся добавлять стили, практикуем css. */

/* 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: 
при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed
к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
Важные правила создания модалки:
1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который 
будет затемнять всю страницу)
2) Модальное окно находиться ровно по центру страницы, независимо от масштаба */

const modalDiv = document.querySelector('.modal');
const buttonAuthentification = document.querySelector('#button-authentification');
buttonAuthentification.addEventListener('click', () => {
  const result = modalDiv.classList.toggle('showed')
});

/* 9. В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти". Используя 
объект с задания №6, проверяем, ввели ли мы правильные данные? Если да - то по нажатию на кнопку 
"Войти", модальное окно должно закрыться и пользователь должен получить сообщение об успешном входе, 
если нет - модальное окно не закрывается, пользователь получает сообщение об ошибке, 
например: "Неверный логин или пароль". */
/* 10. Создаем глобальную переменную "currentUser". После успешной авторизации - присваиваем 
ей объект с задания №6 и добавляем свойство lastLogin и присваиваем ему дату/время 
последнего входа, используя new Date() */

let currentUser = undefined;
const buttonFormLogin = document.querySelector('.button-form-authentification');
const formAuthentification = document.querySelector('#form-authentification');

document.querySelector('.close').onclick = closeFormLogin;
function closeFormLogin() {
  modalDiv.classList.toggle('showed');
  formAuthentification.loginAuthentification.value = '';
  formAuthentification.passwordAuthentification.value = ''
}

buttonFormLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const formAuthentificationData = new FormData(formAuthentification);
  const dataFormAuthentification = Object.fromEntries(formAuthentificationData.entries());
  console.log('Данные аутентификации:', dataFormAuthentification)
  if (dataFormAuthentification.loginAuthentification !== user.login || dataFormAuthentification.passwordAuthentification !== user.password) {
    alert('Логин и/или пароль введены не верно. Доступ закрыт!!!')
  } else {
    alert('Доступ открыт!!!');
    modalDiv.classList.toggle('showed');
    formAuthentification.loginAuthentification.value = '';
    formAuthentification.passwordAuthentification.value = '';
    currentUser = user;
    currentUser.lastLogin = (new Date ().toString());
    console.log('Проверка: currentUser = ', currentUser)
  }
})