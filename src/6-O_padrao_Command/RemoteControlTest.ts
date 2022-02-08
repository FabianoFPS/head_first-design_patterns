import { Light } from './Light';
import { LightOnCommand } from './LightOnCommand';
import { SimpleRemoteControl } from './SimpleRemoteControl';

export class RemoteControltest {
  static main() {
    const remote: SimpleRemoteControl = new SimpleRemoteControl();
    const light: Light = new Light();
    const lightOn: LightOnCommand = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
  }
}

RemoteControltest.main();
