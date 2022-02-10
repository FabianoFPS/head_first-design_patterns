import { GarageDoor } from './GarageDoor';
import { GarageDoorOpenCommand } from './GarageDoorOpenCommnad';
import { Light } from './Light';
import { LightOnCommand } from './LightOnCommand';
import { SimpleRemoteControl } from './SimpleRemoteControl';

describe('Pattern Command', () => {
  let remoteControl: SimpleRemoteControl;

  beforeAll(() => {
    remoteControl = new SimpleRemoteControl();
  });

  describe('Light', () => {
    it('deve ligar a luz', () => {
      const light = new Light();
      const command = new LightOnCommand(light);
      remoteControl.setCommand(command);

      const log = jest.spyOn(console, 'log');

      remoteControl.buttonWasPressed();

      expect(log).toBeCalledWith('Luz ligada');
    });
  });

  describe('Garage Door', () => {
    it('deve abrir a porta da garagem', () => {
      const garageDoor = new GarageDoor();
      const garagemDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
      remoteControl.setCommand(garagemDoorOpenCommand);

      const log = jest.spyOn(console, 'log');

      remoteControl.buttonWasPressed();

      expect(log).toBeCalledWith('Garage Door is Open');
    });
  });
});
