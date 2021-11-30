import { Pizza } from './Pizza';

export class NYStyleCheese extends Pizza {
  constructor() {
    super();

    this.name = 'NY Style Sauce and Chesse Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marina Sauce';
    this.toppings.push('Grated Reggiano');
  }
}
