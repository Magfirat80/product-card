/* 4. К Форме, которая прикреплена в футере - добавить логику:
email должен соответствовать стандартам (добавить валидацию), если он 
не заполнен - форма не отправляется. Кнопка "Подписаться" и есть 
"отправкой формы", при нажатии на которую мы будем выводить консоль лог 
в виде объекта:  { email: 'введенная почта' } */

import { Form } from "./Form.js";
import { Modal } from "./Modal.js";

const emailForm = new Form('email-form');
emailForm.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const value = emailForm.getFormValues();
  const enteredMail = {email: value.valueOfMail};
  console.log(enteredMail);
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

const formRegistration = new Form('form-registration');
const inputPassword = formRegistration.form.password;
const inputPasswordRepetition = formRegistration.form.passwordRepetition;
let user = undefined;
formRegistration.form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formRegistration.isValid()) {
    alert('Форма не валидна!');
    return;
  }

  if (inputPasswordRepetition.value !== inputPassword.value) {
    alert('Пароли не совпадают. Регистрация отклонена!!!');
    inputPasswordRepetition.focus();
    return
  } else {
    alert('Регистрация принята!!!');
  }

  const formValues = formRegistration.getFormValues();
  formValues.createdOn = new Date().toString();
  user = formValues;
  console.log('Данные регистрации:', formValues);
})

formRegistration.form.addEventListener('reset', (event) => {
  formRegistration.resetForm();
})

/* 7. Создать кнопку "Аутентификация", не стесняемся добавлять стили, практикуем css. */

/* 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: 
при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed
к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
Важные правила создания модалки:
1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который 
будет затемнять всю страницу)
2) Модальное окно находиться ровно по центру страницы, независимо от масштаба */

const authenticationModal = new Modal('authentication-modal');
const buttonAuthentification = document.querySelector('#button-authentification');
buttonAuthentification.addEventListener('click', () => {
  authenticationModal.openModal();
})

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
const formAuthentification = new Form('form-authentification');
document.querySelector('.close').addEventListener('click', closeFormLogin)
function closeFormLogin() {
  authenticationModal.closeModal();
  formAuthentification.resetForm();
};

buttonFormLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const dataFormAuthentification = formAuthentification.getFormValues();
  console.log('Данные аутентификации:', dataFormAuthentification);
  if (dataFormAuthentification.loginAuthentification !== user.login || dataFormAuthentification.passwordAuthentification !== user.password) {
    alert('Логин и/или пароль введены не верно. Доступ закрыт!!!');
  } else {
    alert('Доступ открыт!!!');
    authenticationModal.closeModal();
    formAuthentification.resetForm();
    currentUser = user;
    currentUser.lastLogin = new Date ().toString();
    console.log('Проверка: currentUser = ', currentUser);
  }
})