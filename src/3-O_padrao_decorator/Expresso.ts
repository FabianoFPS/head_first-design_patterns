import { Beverage } from './Beverage';

export class Expresso extends Beverage {
  constructor() {
    super();
    this.descrption = 'Expresso';
  }

  public cost(): number {
    return 1.99;
  }
}
