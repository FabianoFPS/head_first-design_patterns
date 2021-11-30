import { Pizza } from './Pizza';
import { SimplePizzaFactory, TypePizza } from './SimplePizzaFactory';

export class PizzaStore {
  constructor(private factory: SimplePizzaFactory) {}

  public orderPizza(type: TypePizza): Pizza {
    const pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
