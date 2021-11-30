import { Pizza } from './Pizza';

export class ChicagoStyleCheese extends Pizza {
  constructor() {
    super();

    this.name = 'Chicago Style Deep Dish Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';
    this.toppings.push('Shredded Mozzarella Chesse');
  }

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}
