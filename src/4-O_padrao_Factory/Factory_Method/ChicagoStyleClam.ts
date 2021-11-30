import { Pizza } from './Pizza';

export class ChicagoStyleClam extends Pizza {
  prepare(): void {
    console.log('Prepare ChicagoStyle Calm');
  }
}
