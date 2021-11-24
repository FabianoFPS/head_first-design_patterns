import { Beverage, Size } from './Beverage';
import { DarkRoast } from './DarkRoast';
import { Expresso } from './Expresso';
import { HouseBlend } from './HouseBlend';
import { Mocha } from './Mocha';
import { Soy } from './Soy';
import { Whip } from './Whip';

describe('Coffes', () => {
  describe('Expresso', () => {
    let beverage: Beverage;
    beforeAll(() => {
      beverage = new Expresso();
    });
    it('deve retornar a descrição', () => {
      expect(beverage.getDescription()).toBe('Expresso');
    });

    it('deve retornar o preço', () => {
      expect(beverage.cost()).toBe(1.99);
    });
  });

  describe('DarkRoast, Mocha, Whip', () => {
    let beverage: Beverage;
    beforeAll(() => {
      beverage = new DarkRoast();
      beverage = new Mocha(beverage);
      beverage = new Mocha(beverage);
      beverage = new Whip(beverage);
    });

    it('deve retornar a descrição', () => {
      expect(beverage.getDescription()).toBe(
        'Dark Roast Coffee, Mocha, Mocha, Whip'
      );
    });

    it('deve retornar o preço', () => {
      expect(beverage.cost()).toBe(6.69);
    });
  });

  describe('House Blend, Soy, Mocha, Whip', () => {
    let beverage: Beverage;
    beforeAll(() => {
      beverage = new HouseBlend();
      beverage = new Soy(beverage);
      beverage = new Mocha(beverage);
      beverage = new Whip(beverage);
    });

    it('deve retornar a descrição', () => {
      expect(beverage.getDescription()).toBe(
        'House Blend Coffee, Soy, Mocha, Whip'
      );
    });

    it('deve retornar o preço pequeno', () => {
      console.log('antes', beverage.getSize());

      beverage.setSize(Size.Small);
      console.log('depois', beverage.getSize());
      expect(beverage.cost()).toBe(1.49);
    });

    it('deve retornar o preço médio', () => {
      beverage.setSize(Size.Mediun);
      expect(beverage.cost()).toBe(1.54);
    });

    it('deve retornar o preço grande', () => {
      beverage.setSize(Size.Big);
      expect(beverage.cost()).toBe(1.59);
    });
  });
});
