import { Pizza } from '../Pizza';
import { PizzaIngredienteFactory } from '../PizzaIngredientFactory';

export class CheesePizza extends Pizza {
  constructor(private ingredientFactory: PizzaIngredienteFactory) {
    super();
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createeDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}
