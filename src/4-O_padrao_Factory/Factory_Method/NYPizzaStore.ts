import { PizzaStore, TypePizza } from './PizzaStore';
import { Pizza } from './Pizza';
import { NYStyleCheese } from './NYStyleCheese';
import { NYStyleClam } from './NYStyleClam';
import { NYStylePepperoni } from './NYStylePepperoni';
import { NYStyleVeggie } from './NYStyleVeggie';

export class NYPizzaStore extends PizzaStore {
  createPizza(type: TypePizza): Pizza {
    const pizzas = {
      CHEESE: new NYStyleCheese(),
      PEPPERONI: new NYStylePepperoni(),
      CLAM: new NYStyleClam(),
      VEGGIE: new NYStyleVeggie(),
    };

    return pizzas[type];
  }
}
