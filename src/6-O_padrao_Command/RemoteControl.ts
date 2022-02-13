import { Command } from './Command';

export class RemoteControl {
  MAX_LENGTH_SLOTS = 7;
  private onCommand: Array<Command> = [];
  private offCommand: Array<Command> = [];
  private undoCommand: Command | undefined = undefined;

  public setCommnand(
    slot: number,
    onCommnad: Command,
    offCommand: Command
  ): void {
    if (slot < 0 || slot > this.MAX_LENGTH_SLOTS) return;

    this.onCommand[slot] = onCommnad;
    this.offCommand[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    if (!this.onCommand[slot]) return;

    this.onCommand[slot].execute();
    this.undoCommand = this.onCommand[slot];
  }

  public offButtonWasPushed(slot: number): void {
    if (!this.offCommand[slot]) return;

    this.offCommand[slot].execute();
    this.undoCommand = this.offCommand[slot];
  }

  public undoButtonWasPushed(): void {
    if (!this.undoCommand) return;

    this.undoCommand.undo();
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}

console.log(new RemoteControl().toString());
