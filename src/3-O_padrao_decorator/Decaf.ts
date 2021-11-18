import { Beverage } from './Beverage';

export class Decaf extends Beverage {
  constructor() {
    super();
    this.descrption = 'Decaf Coffe';
  }

  public cost(): number {
    return 3.99;
  }
}
