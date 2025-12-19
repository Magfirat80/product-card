import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, volume, price, temperature, grains, milk) {
    super(name, volume, price, temperature);
    this.grains = grains;
    this.milk = milk;
  }

  getGrainsAndMilk() {
    return [this.grains, this.milk];
  }

  showInfo() {
    console.log(`Кофе ${this.name}, ${this.volume}L, ${this.price}Р`);
  }

  serveDrink() {
    const temperatureOfTheFinishedDrink = 90;
    this.setTemperature(temperatureOfTheFinishedDrink);
    super.serveDrink();
  }
}

const latte = new Coffee('Латте', 0.3, 40, 30, 'Эспрессо 25мл', 'Молоко 250мл');
const capuchino = new Coffee('Капучино', 0.15, 40, 30, 'Эспрессо 25мл', 'Молоко 100мл');
const flatWhite = new Coffee('Флэт Уайт', 0.15, 40, 30, 'Эспрессо 50мл', 'Молоко 100мл');



















// console.log(latte.getGrainsAndMilk());
// console.log(capuchino.getGrainsAndMilk());
// console.log(flatWhite.getGrainsAndMilk());
// latte.setTemperature(90);
// console.log(latte.getTemperature());
// latte.serveDrink();
// flatWhite.showInfo();
// console.log(flatWhite.getTemperature());
// flatWhite.setTemperature(80);
// console.log(flatWhite.getTemperature());
// flatWhite.serveDrink();
// console.log(flatWhite.price);