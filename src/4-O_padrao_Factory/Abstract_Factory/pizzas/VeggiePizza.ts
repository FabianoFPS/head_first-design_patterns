import { Pizza } from '../Pizza';
import { PizzaIngredienteFactory } from '../PizzaIngredientFactory';

export class VeggiePizza extends Pizza {
  constructor(private ingredientFactory: PizzaIngredienteFactory) {
    super();
  }
  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createeDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.veggies = this.ingredientFactory.createVeggies();
  }
}
