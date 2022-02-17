export enum speedOptions {
  HIGH = 3,
  MEDIUN = 2,
  LOW = 1,
  OFF = 0,
}

export class CelingFan {
  private speed: speedOptions;

  constructor(private location: string) {
    this.speed = speedOptions.OFF;
  }

  high() {
    this.speed = speedOptions.HIGH;
  }

  mediun() {
    this.speed = speedOptions.MEDIUN;
  }

  low() {
    this.speed = speedOptions.LOW;
  }

  off() {
    this.speed = speedOptions.OFF;
  }

  setSpeed(speed: speedOptions) {
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }
}
