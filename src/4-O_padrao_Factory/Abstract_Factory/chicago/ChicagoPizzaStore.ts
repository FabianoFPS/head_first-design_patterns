import { PizzaStore, TypePizza } from '../PizzaStore';
import { Pizza } from '../Pizza';
import { CheesePizza } from '../pizzas/CheesePizza';
import { ClamPizza } from '../pizzas/ClamPizza';
import { VeggiePizza } from '../pizzas/VeggiePizza';
import { PepperoniPizza } from '../pizzas/PepperoniPizza';

export class ChicagoPizaaStore extends PizzaStore {
  createPizza(type: TypePizza): Pizza {
    const pizzas = {
      CHEESE: this.createCheesePizza(),
      PEPPERONI: this.createPepperoniPizza(),
      CLAM: this.createClamPizza(),
      VEGGIE: this.createVeggiePizza(),
    };

    return pizzas[type];
  }

  private createCheesePizza() {
    const pizza = new CheesePizza(this.ingredientFactory);
    pizza.setName('Chicago Style Deep Dish Cheese Pizza');

    return pizza;
  }

  private createClamPizza() {
    const pizza = new ClamPizza(this.ingredientFactory);
    pizza.setName('Pizza de marisco no estilo de Chicago');

    return pizza;
  }

  private createVeggiePizza() {
    const pizza = new VeggiePizza(this.ingredientFactory);
    pizza.setName('Pizza de Veggie no estilo de Chicago');

    return pizza;
  }

  private createPepperoniPizza() {
    const pizza = new PepperoniPizza(this.ingredientFactory);
    pizza.setName('Pizza de Pepperoni no estilo de Chicago');

    return pizza;
  }
}
