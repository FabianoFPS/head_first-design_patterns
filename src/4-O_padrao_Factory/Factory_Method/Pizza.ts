export abstract class Pizza {
  protected name = '';
  protected dough = '';
  protected sauce = '';
  protected toppings: Array<string> = [];

  prepare(): void {
    console.log(`Prepare ${this.name}`);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings: ');
    for (const topping of this.toppings) {
      console.log(`   ${topping}`);
    }
  }

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
}
