
/* 4. Создать файл Modal.js и в нем создать класс для модального окна под названием Modal. 
  Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:
    I. Для открытия модального окна.
    II. Для закрытия модального окна.
    III. Для проверки, открыто ли сейчас модальное окно.
  Используя данный класс - переписать логику задания №9, связанной с модальными окнами. Как? 
  Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием. */

export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
  }
  
  openModal() {
    this.modal.classList.add('modal-showed');
  }

  closeModal() {
    this.modal.classList.remove('modal-showed');
  }
  
  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
}
