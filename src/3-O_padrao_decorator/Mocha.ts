import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  public getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost() {
    return (this.beverage.cost() * 100 + 20) / 100;
  }
}
