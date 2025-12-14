/* 5. Создать файл Form.js и реализовать класс для формы под названием Form. Он будет принимать 1 параметр - 
айди формы. Внутри класса будут методы:
  I. Для получения всех значений формы.
 II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма.
 III. Для сброса всех значений формы.
Используя данный класс - переписать логику задания №9, связанной с формами. Как? 
Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка. */

export class Form {
  constructor(idForm) {
    this.idForm = document.getElementById(idForm);
  }

  getAllValuesForm() {
    const formData = new FormData(this.idForm);
    const formValues = Object.fromEntries(formData.entries());
    return formValues;
  }

  checkFormValidity() {
    const values = this.getAllValuesForm();
    for(const key in values) {
      if(values[key].trim === '') {
        return false
      }
    }
    return true
  }

  clearAllValuesForm() {
    this.idForm.reset();
  }

}

