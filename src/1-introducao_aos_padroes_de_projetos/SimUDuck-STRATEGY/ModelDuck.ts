import { Duck } from './Duck';
import { FlyBehavior } from './FlyBehavior';
import { QuackBehaivor } from './QuackBehavior';

export class ModelDuck extends Duck {
  constructor(
    protected flyBehavior: FlyBehavior,
    protected quackBehavior: QuackBehaivor
  ) {
    super(flyBehavior, quackBehavior);
  }

  display(): void {
    console.log("I'm a real model Duck");
  }
}
