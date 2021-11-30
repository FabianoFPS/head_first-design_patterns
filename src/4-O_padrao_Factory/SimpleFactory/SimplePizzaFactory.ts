import { Cheese } from './Cheese';
import { Clam } from './Clam';
import { Pepperoni } from './Pepperoni';
import { Pizza } from './Pizza';
import { Veggie } from './Veggie';

export enum TypePizza {
  Cheese = 'CHEESE',
  Pepperoni = 'PEPPERONI',
  Clam = 'CLAM',
  Veggie = 'VEGGIE',
}

export class SimplePizzaFactory {
  public createPizza(type: TypePizza): Pizza {
    const pizza = {
      CHEESE: new Cheese(),
      PEPPERONI: new Pepperoni(),
      CLAM: new Clam(),
      VEGGIE: new Veggie(),
    };

    return pizza[type];
  }
}
