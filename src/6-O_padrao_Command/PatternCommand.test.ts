import { GarageDoor } from './GarageDoor';
import { GarageDoorOpenCommand } from './GarageDoorOpenCommnad';
import { Light } from './Light';
import { LightOffCommnad } from './LightOffCommand';
import { LightOnCommand } from './LightOnCommand';
import { RemoteControl } from './RemoteControl';
import { SimpleRemoteControl } from './SimpleRemoteControl';
import { Stereo } from './Stereo';
import { StereoOnWithCDCommand } from './StereoOnWithCDCommand';
import { StereoOffCommand } from './StereoOffCommand';
import { GarageDoorCloseCommand } from './GaragemDoorCloseCommand';
import { CelingFan } from './CeilingFan';
import { CeilFanHighCommand } from './CeilingFanHighCommand';
import { CeilFanOffCommand } from './CeilFabOffCommand';
import { CeilFanMediunCommand } from './CeilFabMediunCommand';

describe('Pattern Command', () => {
  const log = jest.spyOn(console, 'log');
  let simpleRemoteControl: SimpleRemoteControl;
  let light: Light;
  let lightOnCommand: LightOnCommand;
  let remoteControl: RemoteControl;

  beforeAll(() => {
    light = new Light('Living Room');
    simpleRemoteControl = new SimpleRemoteControl();
    lightOnCommand = new LightOnCommand(light);
    remoteControl = new RemoteControl();
  });

  describe('Light', () => {
    it('deve ligar a luz na Cozinha', () => {
      const lightOnKitchen = new Light('Kithcen');
      const onCommand = new LightOnCommand(lightOnKitchen);
      simpleRemoteControl.setCommand(onCommand);

      simpleRemoteControl.buttonWasPressed();

      expect(log).toBeCalledWith('Kithcen Luz ligada');
    });
  });

  describe('Garage Door', () => {
    it('deve abrir a porta da garagem', () => {
      const garageDoor = new GarageDoor();
      const garagemDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
      simpleRemoteControl.setCommand(garagemDoorOpenCommand);

      simpleRemoteControl.buttonWasPressed();

      expect(log).toBeCalledWith('Garage Door is Open');
    });
  });

  describe.only('Remote Control', () => {
    it('deve ligar a luz em "Living Room"', () => {
      const lightOffCommand = new LightOffCommnad(light);

      remoteControl.setCommnand(0, lightOnCommand, lightOffCommand);
      remoteControl.onButtonWasPushed(0);

      expect(log).toBeCalledWith('Living Room Luz ligada');
    });

    it('deve desligar a luz', () => {
      const lightOffCommand = new LightOffCommnad(light);
      remoteControl.setCommnand(0, lightOnCommand, lightOffCommand);

      remoteControl.offButtonWasPushed(0);

      expect(log).toBeCalledWith('Living Room Luz desligada');
    });

    it('deve ligar com o CD "Nirvana" e com o volume 11 e desligar o Stereo', () => {
      const stereo = new Stereo();
      const stereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
      const stereoOffCommand = new StereoOffCommand(stereo);

      remoteControl.setCommnand(1, stereoOnWithCDCommand, stereoOffCommand);

      remoteControl.onButtonWasPushed(1);
      expect(log).toBeCalledWith('Stereo is on');
      expect(log).toBeCalledWith('Stereo is set for Nirvana CD');
      expect(log).toBeCalledWith('Stereo is set volume to 11');

      remoteControl.offButtonWasPushed(1);
      expect(log).toBeCalledWith('Stereo is off');
    });

    it('deve fechar o portão da garagem', () => {
      const garageDoor = new GarageDoor('Front');
      const garagemDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
      const garagemDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);
      remoteControl.setCommnand(
        2,
        garagemDoorOpenCommand,
        garagemDoorCloseCommand
      );

      remoteControl.offButtonWasPushed(2);

      expect(log).toBeCalledWith('Front Close Door');
    });

    it('deve desfazer a ultima operação', () => {
      const lightOffCommand = new LightOffCommnad(light);

      remoteControl.setCommnand(0, lightOnCommand, lightOffCommand);
      remoteControl.onButtonWasPushed(0);

      remoteControl.undoButtonWasPushed();

      expect(log).toBeCalledWith('Living Room Luz desligada');
    });

    it.only('deve retornar ao ultimo nível de potencia do ventilador', () => {
      const mediunSpeed = 2;
      const ceilingFan = new CelingFan('Living Room');
      const ceilFanHighCommand = new CeilFanHighCommand(ceilingFan);
      const ceilFanOffCommand = new CeilFanOffCommand(ceilingFan);
      const ceilFanMediunCommand = new CeilFanMediunCommand(ceilingFan);

      remoteControl.setCommnand(3, ceilFanHighCommand, ceilFanOffCommand);
      remoteControl.setCommnand(4, ceilFanMediunCommand, ceilFanOffCommand);

      remoteControl.onButtonWasPushed(4);
      remoteControl.onButtonWasPushed(3);
      remoteControl.undoButtonWasPushed();

      expect(ceilingFan.getSpeed()).toBe(mediunSpeed);
    });
  });
});
