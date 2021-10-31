import { FlyBehavior } from './FlyBehavior';
import { QuackBehaivor } from './QuackBehavior';

export abstract class Duck {
  constructor(
    protected flyBehavior: FlyBehavior,
    protected quackBehavior: QuackBehaivor
  ) {}

  public abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log('All ducks float, even decoys!');
  }

  public setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehaivor) {
    this.quackBehavior = quackBehavior;
  }
}
