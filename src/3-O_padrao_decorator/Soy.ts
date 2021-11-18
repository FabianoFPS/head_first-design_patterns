import { Beverage } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Soy extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  public getDescription() {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost() {
    return (this.beverage.cost() * 100 + 40) / 100;
  }
}
