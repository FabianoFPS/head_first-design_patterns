import { Command } from './Command';
import { Stereo } from './Stereo';

export class StereoOnWithCDCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute(): void {
    this.stereo.on();
    this.stereo.setCd('Nirvana');
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.off();
  }
}
