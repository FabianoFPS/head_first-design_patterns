import { Command } from './Command';
import { GarageDoor } from './GarageDoor';

export class GarageDoorOpenCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  execute(): void {
    this.garageDoor.up();
  }
}
