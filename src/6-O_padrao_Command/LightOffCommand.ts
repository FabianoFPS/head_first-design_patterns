import { Command } from './Command';
import { Light } from './Light';

export class LightOffCommnad implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
