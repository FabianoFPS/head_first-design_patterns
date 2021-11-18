import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Whip extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  public getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost() {
    return (this.beverage.cost() * 100 + 30) / 100;
  }
}
