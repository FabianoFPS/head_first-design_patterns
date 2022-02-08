import { Light } from './Light';
import { LightOnCommand } from './LightOnCommand';
import { SimpleRemoteControl } from './SimpleRemoteControl';

describe('Pattern Command', () => {
  describe('Light', () => {
    it('deve ligar a luz', () => {
      const light = new Light();
      const command = new LightOnCommand(light);
      const remoteControl = new SimpleRemoteControl();
      remoteControl.setCommand(command);

      const log = jest.spyOn(console, 'log');

      remoteControl.buttonWasPressed();

      expect(log).toBeCalledWith('Luz ligada');
    });
  });
});
