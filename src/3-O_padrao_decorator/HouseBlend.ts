import { Beverage } from './Beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.descrption = 'House Blend Coffee';
  }

  public cost(): number {
    return 0.89;
  }
}
