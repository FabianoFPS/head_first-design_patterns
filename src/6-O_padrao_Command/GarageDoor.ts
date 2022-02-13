export class GarageDoor {
  constructor(private area: string = '') {}

  up() {
    this.print('Garage Door is Open');
  }

  down() {
    this.print('Close Door');
  }

  stop() {
    this.print('Stop Door');
  }

  lightOn() {
    this.print('Light Garage is on');
  }

  lightOff() {
    this.print('light Gara is off');
  }

  private print(action: string) {
    const pre = this.area ? `${this.area} ` : '';
    console.log(`${pre}${action}`);
  }
}
