import { CelingFan, speedOptions } from './CeilingFan';
import { Command } from './Command';

export class CeilFanOffCommand implements Command {
  private preSpeed: speedOptions | undefined;

  constructor(private ceilFan: CelingFan) {}

  execute(): void {
    this.preSpeed = this.ceilFan.getSpeed();

    this.ceilFan.off();
  }

  undo(): void {
    switch (this.preSpeed) {
      case speedOptions.HIGH:
        this.ceilFan.high();
        break;

      case speedOptions.MEDIUN:
        this.ceilFan.mediun();
        break;

      case speedOptions.LOW:
        this.ceilFan.low();
        break;

      case speedOptions.OFF:
        this.ceilFan.off();
        break;

      default:
        break;
    }
  }
}
