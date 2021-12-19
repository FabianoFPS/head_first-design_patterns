import { Pizza } from './Pizza';
import { PizzaIngredienteFactory } from './PizzaIngredientFactory';

export enum TypePizza {
  Cheese = 'CHEESE',
  Pepperoni = 'PEPPERONI',
  Clam = 'CLAM',
  Veggie = 'VEGGIE',
}

export abstract class PizzaStore {
  constructor(protected ingredientFactory: PizzaIngredienteFactory) {}

  public orderPizza(type: TypePizza): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: TypePizza): Pizza;
}
