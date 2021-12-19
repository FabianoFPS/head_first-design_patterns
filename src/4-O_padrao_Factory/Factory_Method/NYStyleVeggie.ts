import { Pizza } from './Pizza';

export class NYStyleVeggie extends Pizza {
  prepare(): void {
    console.log('prepare NY Style Veggie');
  }
}
