import { QuackBehaivor } from './QuackBehavior';

export class Quack implements QuackBehaivor {
  quack() {
    console.log('Quack!');
  }
}
