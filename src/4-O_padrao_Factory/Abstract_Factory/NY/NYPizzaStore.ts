import { PizzaStore, TypePizza } from '../PizzaStore';
import { Pizza } from '../Pizza';
import { CheesePizza } from '../pizzas/CheesePizza';
import { ClamPizza } from '../pizzas/ClamPizza';
import { PizzaIngredienteFactory } from '../PizzaIngredientFactory';
import { PepperoniPizza } from '../pizzas/PepperoniPizza';
import { VeggiePizza } from '../pizzas/VeggiePizza';

export class NYPizzaStore extends PizzaStore {
  constructor(protected ingredientFactory: PizzaIngredienteFactory) {
    super(ingredientFactory);
  }

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
    pizza.setName('Pizza de queijo no estilo de Nova York');

    return pizza;
  }

  private createClamPizza() {
    const pizza = new ClamPizza(this.ingredientFactory);
    pizza.setName('Pizza de marisco no estilo de Nova York');

    return pizza;
  }

  private createVeggiePizza() {
    const pizza = new VeggiePizza(this.ingredientFactory);
    pizza.setName('Pizza de Veggie no estilo de Nova York');

    return pizza;
  }

  private createPepperoniPizza() {
    const pizza = new PepperoniPizza(this.ingredientFactory);
    pizza.setName('Pizza de Pepperoni no estilo de Nova York');

    return pizza;
  }
}
