import { Command } from './Command';
import { Light } from './Light';

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.on();
  }
}
