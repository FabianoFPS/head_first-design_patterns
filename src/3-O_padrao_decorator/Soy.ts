import { Beverage, Size } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Soy extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  public getDescription() {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost() {
    const sizeCost = this.getSizeCost();
    return (this.beverage.cost() * 100 + sizeCost) / 100;
  }

  getSize() {
    return this.beverage.getSize();
  }

  setSize(size: Size) {
    this.beverage.setSize(size);
  }

  private getSizeCost(): number {
    const cost = {
      SMALL: 10,
      MEDIUN: 15,
      BIG: 20,
    };

    return cost[this.getSize()];
  }
}
