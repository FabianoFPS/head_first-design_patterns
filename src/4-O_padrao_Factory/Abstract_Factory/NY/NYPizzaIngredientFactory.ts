import { Cheese } from '../ingredients/Cheese';
import { Clam } from '../ingredients/Clam';
import { Dough } from '../ingredients/Dough';
import { FreshClam } from '../ingredients/FreshClam';
import { MarinaSauce } from '../ingredients/MarinaSauce';
import { Onion } from '../ingredients/Onion';
import { Pepperoni } from '../ingredients/Pepperoni';
import { PizzaIngredienteFactory } from '../PizzaIngredientFactory';
import { ReggieChesse } from '../ingredients/ReggieChesse';
import { Sauce } from '../ingredients/Sauce';
import { SlicePepperoni } from '../ingredients/SlicePepperoni';
import { ThinCrustDough } from '../ingredients/ThinCrustDough';
import { Veggies } from '../ingredients/Veggies';

export class NYPizzaIngredientFactory implements PizzaIngredienteFactory {
  createeDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaSauce();
  }

  createCheese(): Cheese {
    return new ReggieChesse();
  }

  createVeggies(): Veggies[] {
    return [new Onion()];
  }

  createPepperoni(): Pepperoni {
    return new SlicePepperoni();
  }

  createClam(): Clam {
    return new FreshClam();
  }
}
