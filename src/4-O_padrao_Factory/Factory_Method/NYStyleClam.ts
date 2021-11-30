import { Pizza } from './Pizza';

export class NYStyleClam extends Pizza {
  prepare(): void {
    console.log('prepare NY Style Clam');
  }
}
