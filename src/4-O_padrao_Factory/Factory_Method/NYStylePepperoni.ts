import { Pizza } from './Pizza';

export class NYStylePepperoni extends Pizza {
  prepare(): void {
    console.log('prepare NY Style Pepperoni');
  }
}
