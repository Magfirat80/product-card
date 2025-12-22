import { Coffee } from "./Coffee.js";
import { Tea } from "./Tea.js";
import { Lemonade } from "./Lemonade.js";

/* 
4. После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе". 
Он у нас будет принимать 2 параметра, например название кафе и его месторасположение. Реализуем 2 метода 
внутри него:
1) получить информацию про кафе
2) заказать напиток

При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы, 
например - подать напиток, А этот метод внутри себя вызывает метод для готовки напитка и выполняет всякие 
побочные действия, по типу изменения температуры и прочее.

Что итоговое должно получиться:
1. Можем получить информацию про кафе
2. Можем заказать напиток
3. Можем получить информацию про напиток */

class Cafe {
  constructor(nameCafe, location) {
    this.nameCafe = nameCafe;
    this.location = location;
  }

  getInfo() {
    return `Кафе ${this.nameCafe} по адресу: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Кафе ${this.nameCafe} по адресу: ${this.location} приняло заказ:`);
    drink.showInfo();
    drink.serveDrink();
  }
}

const romashka = new Cafe('Ромашка', 'г. Волгоград ул.Набережная 1 Мая, д.102');

const latte = new Coffee('Латте', 0.3, 40, 30, 'эспрессо 25мл', 'молоко 250мл');
const capuchino = new Coffee('Капучино', 0.15, 40, 30, 'эспрессо 25мл', 'молоко 100мл');
const flatWhite = new Coffee('Флэт Уайт', 0.15, 40, 30, 'эспрессо 50мл', 'молоко 100мл');

const teaNuriBlack = new Tea('Чай принцесса Нури', 0.3, 30, 30, 'черный');
const teaNuriGreen = new Tea('Чай принцесса Нури', 0.3, 30, 30, 'зеленый');

const limoDuchess = new Lemonade('Лимонад', 0.5, 50, 35, 'дюшес');
const limoTarragon = new Lemonade('Лимонад', 0.5, 50, 35, 'тархун');
