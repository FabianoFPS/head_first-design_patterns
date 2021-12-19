import { Cheese } from './ingredients/Cheese';
import { Clam } from './ingredients/Clam';
import { Dough } from './ingredients/Dough';
import { Pepperoni } from './ingredients/Pepperoni';
import { Sauce } from './ingredients/Sauce';
import { Veggies } from './ingredients/Veggies';

export interface PizzaIngredienteFactory {
  createeDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clam;
}
