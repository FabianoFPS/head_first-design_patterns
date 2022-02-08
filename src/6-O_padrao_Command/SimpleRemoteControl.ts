import { Command } from './Command';

export class SimpleRemoteControl {
  private slot: Command | undefined = undefined;

  setCommand(commnad: Command) {
    this.slot = commnad;
  }

  buttonWasPressed() {
    if (typeof this.slot != 'undefined') this.slot.execute();
  }
}
