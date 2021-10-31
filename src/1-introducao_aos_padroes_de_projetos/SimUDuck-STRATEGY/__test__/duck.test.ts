import { Duck } from '../Duck';
import { FlyNoWay } from '../FlyNoWay';
import { FlyRocketPowered } from '../FlyRocketPowered';
import { FlyWithWings } from '../FlyWithWings';
import { MallardDuck } from '../MallardDuck';
import { ModelDuck } from '../ModelDuck';
import { MuteQuack } from '../MuteQuack';
import { Quack } from '../Quack';
import { Squeak } from '../Squeak';

describe('Duck', () => {
  describe('Mallard', () => {
    const mallard: Duck = new MallardDuck(new FlyWithWings(), new Quack());

    it('deve ser possível grasnar', () => {
      const log = jest.spyOn(console, 'log');

      mallard.performQuack();

      expect(log).toBeCalledWith('Quack!');
    });

    it('deve ser possível voar', () => {
      const log = jest.spyOn(console, 'log');

      mallard.performFly();

      expect(log).toBeCalledWith("I'm flying!");
    });
  });

  describe('Model Duck', () => {
    const modelDuck: Duck = new ModelDuck(new FlyNoWay(), new MuteQuack());

    it('não deve ser possivel voar', () => {
      const fly = jest.spyOn(console, 'log');

      modelDuck.performFly();

      expect(fly).toBeCalledWith("I can't fly!");
    });

    it('não deve ser possivel grasnar', () => {
      const fly = jest.spyOn(console, 'log');

      modelDuck.performQuack();

      expect(fly).toBeCalledWith('<< Silent >>');
    });

    it('deve ser possível mudar o comportamento de voo', () => {
      const fly = jest.spyOn(console, 'log');

      modelDuck.setFlyBehavior(new FlyRocketPowered());
      modelDuck.performFly();

      expect(fly).toBeCalledWith("I'm flying with a rocket!");
    });

    it('deve ser possível mudar o comportamento de grasnar', () => {
      const grasnar = jest.spyOn(console, 'log');

      modelDuck.setQuackBehavior(new Squeak());
      modelDuck.performQuack();

      expect(grasnar).toBeCalledWith('Squeak!');
    });
  });
});
