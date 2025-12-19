import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, volume, price, temperature, color) {
    super(name, volume, price, temperature);
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  showInfo() {
    console.log(`${this.name}, ${this.color}, ${this.volume}L, ${this.price}Р`);
  }

  serveDrink() {
    const temperatureOfTheFinishedDrink = 95;
    this.setTemperature(temperatureOfTheFinishedDrink);
    super.serveDrink();
  }
}

const teaNuriBlack = new Tea('Чай принцесса Нури', 0.3, 30, 30, 'черный');
const teaNuriGreen = new Tea('Чай принцесса Нури', 0.3, 30, 30, 'зеленый');

// teaNuriBlack.showInfo();
// console.log(teaNuriBlack.getTemperature());
// teaNuriBlack.setTemperature(95);
// teaNuriBlack.serveDrink();
