import { Aubergine } from '../ingredients/Aubergine';
import { Cheese } from '../ingredients/Cheese';
import { Clam } from '../ingredients/Clam';
import { Dough } from '../ingredients/Dough';
import { FrozenClam } from '../ingredients/FrozenClam';
import { Mozzarella } from '../ingredients/Mozzarella';
import { Pepperoni } from '../ingredients/Pepperoni';
import { PizzaIngredienteFactory } from '../PizzaIngredientFactory';
import { Sauce } from '../ingredients/Sauce';
import { SlicePepperoni } from '../ingredients/SlicePepperoni';
import { ThickDough } from '../ingredients/ThickDough';
import { TomatoSauce } from '../ingredients/TomatoSauce';
import { Veggies } from '../ingredients/Veggies';

export class ChicagoPizzaIngredientFactory implements PizzaIngredienteFactory {
  createeDough(): Dough {
    return new ThickDough();
  }

  createSauce(): Sauce {
    return new TomatoSauce();
  }

  createCheese(): Cheese {
    return new Mozzarella();
  }

  createVeggies(): Veggies[] {
    return [new Aubergine()];
  }

  createPepperoni(): Pepperoni {
    return new SlicePepperoni();
  }

  createClam(): Clam {
    return new FrozenClam();
  }
}
