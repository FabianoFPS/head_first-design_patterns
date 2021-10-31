import { QuackBehaivor } from './QuackBehavior';

export class Squeak implements QuackBehaivor {
  quack() {
    console.log('Squeak!');
  }
}
