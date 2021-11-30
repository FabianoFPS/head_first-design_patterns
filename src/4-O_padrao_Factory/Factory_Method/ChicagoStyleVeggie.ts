import { Pizza } from './Pizza';

export class ChicagoStyleVeggie extends Pizza {
  prepare(): void {
    console.log('Prepare ChicagoStyle Veggie');
  }
}
