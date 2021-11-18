import { Beverage } from './Beverage';

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.descrption = 'Dark Roast Coffee';
  }

  public cost(): number {
    return 5.99;
  }
}
