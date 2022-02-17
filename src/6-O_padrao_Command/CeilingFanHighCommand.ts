import { CelingFan, speedOptions } from './CeilingFan';
import { Command } from './Command';

export class CeilFanHighCommand implements Command {
  private preSpeed: speedOptions | undefined;

  constructor(private ceilFan: CelingFan) {}

  execute(): void {
    this.preSpeed = this.ceilFan.getSpeed();

    this.ceilFan.high();
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

    //Não funciona pois perde a referencia com a instancia do objeto
    // if (!this.preSpeed) return;

    // const methods = {
    //   [speedOptions.HIGH]: this.ceilFan.high,
    //   [speedOptions.MEDIUN]: this.ceilFan.mediun,
    //   [speedOptions.LOW]: this.ceilFan.low,
    //   [speedOptions.OFF]: this.ceilFan.off,
    // };

    // // methods[this.preSpeed]();
  }
}
