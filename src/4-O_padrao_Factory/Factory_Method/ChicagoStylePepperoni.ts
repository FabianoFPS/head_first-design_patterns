import { Pizza } from './Pizza';

export class ChicagoStylePepperoni extends Pizza {
  prepare(): void {
    console.log('Prepare ChicagoStyle Pepperoni');
  }
}
