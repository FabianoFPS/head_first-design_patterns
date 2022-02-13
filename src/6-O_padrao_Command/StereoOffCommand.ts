import { Command } from './Command';
import { Stereo } from './Stereo';

export class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {}
  execute(): void {
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
  }
}
