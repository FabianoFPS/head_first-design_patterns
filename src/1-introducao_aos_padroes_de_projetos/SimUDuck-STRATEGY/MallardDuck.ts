import { FlyBehavior } from './FlyBehavior';
import { Duck } from './Duck';
import { QuackBehaivor } from './QuackBehavior';

export class MallardDuck extends Duck {
  constructor(
    protected flyBehavior: FlyBehavior,
    protected quackBehavior: QuackBehaivor
  ) {
    super(flyBehavior, quackBehavior);
  }

  display(): void {
    console.log("I'm a real Mallard Duck");
  }
}
