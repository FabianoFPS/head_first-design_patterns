import { Pizza } from './Pizza';

export class Cheese implements Pizza {
  prepare(): void {
    console.log('prepare');
  }

  bake(): void {
    console.log('bake');
  }

  cut(): void {
    console.log('cut');
  }

  box(): void {
    console.log('box');
  }
}
