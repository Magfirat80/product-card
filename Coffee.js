import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, volume, price, temperature, grains, milk) {
    super(name, volume, price, temperature);
    this.grains = grains;
    this.milk = milk;
  }

  getGrainsAndMilk() {
    return `${this.grains}, ${this.milk}`;
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

const latte = new Coffee('Латте', 0.3, 40, 30, 'эспрессо 25мл', 'молоко 250мл');
const capuchino = new Coffee('Капучино', 0.15, 40, 30, 'эспрессо 25мл', 'молоко 100мл');
const flatWhite = new Coffee('Флэт Уайт', 0.15, 40, 30, 'эспрессо 50мл', 'молоко 100мл');
