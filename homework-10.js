/* 3. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - 
с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов */

class Product {
  constructor(category, brand) {
    this.category = category;
    this.brand = brand;
  }
  showInfoProduct() {
    console.log(`${this.category}. Изготовитель: ${this.brand}`);
  }
}

class FoodProduct extends Product {
  constructor(category, brand, nutritionalValue) {
    super(category, brand);
    this.nutritionalValue = nutritionalValue;
  }
  showInfoProduct() {
    console.log(`${this.category}. Изготовитель: ${this.brand}. Пищевая ценность: ${this.nutritionalValue}`);
  }
}

const driedApricots = new FoodProduct('Курага', 'Fresh Bazar', '231ккал');

class bookProduct extends Product {
  constructor(category, brand, numberOfPages) {
    super(category, brand);
    this.numberOfPages = numberOfPages;
  }
  showInfoProduct() {
    console.log(`${this.category}. Издатель: ${this.brand}. Количество страниц: ${this.numberOfPages}`);
  }
}

const theMurderInTheRueMorgue = new bookProduct('Убийство на улице Морг', 'Эдгар Аллан По', '224');

class ElectricalProduct extends Product {
  constructor(category, brand, power) {
    super(category, brand);
    this.power = power;
  }
  showInfoProduct() {
    console.log(`${this.category}. Изготовитель: ${this.brand}. Мощность: ${this.power}`);
  }
}

const teapot = new ElectricalProduct('Чайник', 'Weissgauff', '1500Вт')

class LightingProduct extends ElectricalProduct {
  constructor(category, brand, power, luminousFlux) {
    super(category, brand, power);
    this.luminousFlux = luminousFlux;
  }
  showInfoProduct() {
    console.log(`${this.category}. Изготовитель: ${this.brand}. Мощность: ${this.power}. Световой поток: ${this.luminousFlux}`);
  }
}

const ledFloodLight = new LightingProduct('Прожектор светодиодный', 'ЭРА', '100Вт', '8000Лм');

driedApricots.showInfoProduct();
theMurderInTheRueMorgue.showInfoProduct();
teapot.showInfoProduct();
ledFloodLight.showInfoProduct();
