/* 3. Реализовать абстрактный класс Drink (абстрактный он, потому что не должен иметь экземпляров. Он используется
 только для наследования). От него мы будем создавать наследников - лимонад, чай, кофе и прочие напитки, которые
  посчитаете нужным. Их должно быть от 3 до 5. 

Наш абстрактный класс должен содержать общие свойства, связанные со всеми напитками (это то, что есть у каждого
 напитка), а это: 
1) название
2) размер
3) цена
4) температура (приватный). Почему? Потому что мы не можем влиять на температуру вне класса.

Также наш класс должен содержать общие методы, такие как:
1) получить информацию про напиток
2) получить температуру напитка
3) установить температуру напитка
4) приготовить напиток (приватный)
5) подать напиток

 После уже реализовываем наследников, например для кофе нам нужны дополнительные параметры, помимо тех 4,
  что названы выше. Это вид зёрен, вид молока и прочее.  */

export class Drink {
  #temperature;
  constructor(name, volume, price, temperature) {
    this.name = name;
    this.volume = volume;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return [this.name, this.volume, this.price, this.#temperature].toString();
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperatureOfTheFinishedDrink) {
    this.#temperature = temperatureOfTheFinishedDrink;
  }

  #prepareDrink() {
    this.setTemperature(this.#temperature);
    console.log(`Готовится напиток - ${this.name}, ожидайте...`);
  }

  serveDrink() {
    this.#prepareDrink();
    setTimeout(() => {
      console.log(`${this.name} приготовлен, t напитка = ${this.#temperature}°C, готов к подаче. Счет: ${this.price}Р`);
    }, 7000);
  }
}