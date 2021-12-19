import { PizzaStore, TypePizza } from './PizzaStore';
import { Pizza } from './Pizza';
import { ChicagoStyleCheese } from './ChicagoStyleCheese';
import { NYStyleClam } from './NYStyleClam';
import { NYStylePepperoni } from './NYStylePepperoni';
import { NYStyleVeggie } from './NYStyleVeggie';

export class ChicagoPizaaStore extends PizzaStore {
  createPizza(type: TypePizza): Pizza {
    const pizzas = {
      CHEESE: new ChicagoStyleCheese(),
      PEPPERONI: new NYStylePepperoni(),
      CLAM: new NYStyleClam(),
      VEGGIE: new NYStyleVeggie(),
    };

    return pizzas[type];
  }
}
