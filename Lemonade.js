import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, volume, price, temperature, taste) {
    super(name, volume, price, temperature);
    this.taste = taste;
  }
  
  getTaste() {
    return this.taste;
  }

  showInfo() {
    console.log(`Напиток ${this.name}, ${this.volume}L, ${this.price}Р, ${this.taste}`);
  }

  serveDrink() {
    const temperatureOfTheFinishedDrink = 10;
    this.setTemperature(temperatureOfTheFinishedDrink);
    super.serveDrink();
  }
}

const limoDuchess = new Lemonade('Лимонад', 0.5, 50, 35, 'дюшес');
const limoTarragon = new Lemonade('Лимонад', 0.5, 50, 35, 'тархун');
