import { Pizza } from './Pizza';

export enum TypePizza {
  Cheese = 'CHEESE',
  Pepperoni = 'PEPPERONI',
  Clam = 'CLAM',
  Veggie = 'VEGGIE',
}

export abstract class PizzaStore {
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
