import { Cheese } from './ingredients/Cheese';
import { Clam } from './ingredients/Clam';
import { Dough } from './ingredients/Dough';
import { Pepperoni } from './ingredients/Pepperoni';
import { Sauce } from './ingredients/Sauce';
import { Veggies } from './ingredients/Veggies';

export abstract class Pizza {
  protected name = '';
  protected dough: Dough | undefined;
  protected sauce: Sauce | undefined;
  protected veggies: Veggies | undefined;
  protected cheese: Cheese | undefined;
  protected pepperoni: Pepperoni | undefined;
  protected clam: Clam | undefined;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cut the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
