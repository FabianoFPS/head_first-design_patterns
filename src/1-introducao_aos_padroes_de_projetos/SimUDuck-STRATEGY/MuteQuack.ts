import { QuackBehaivor } from './QuackBehavior';

export class MuteQuack implements QuackBehaivor {
  quack() {
    console.log('<< Silent >>');
  }
}
