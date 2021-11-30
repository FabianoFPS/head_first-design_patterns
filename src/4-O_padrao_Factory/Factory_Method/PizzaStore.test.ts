import { ChicagoPizaaStore } from './ChicagoPizzaStore';
import { NYPizzaStore } from './NYPizzaStore';
import { PizzaStore, TypePizza } from './PizzaStore';

describe('Pizza Stored', () => {
  describe('NY Pizza Store', () => {
    it('deve retornar pizza no estilo de NY', () => {
      const log = jest.spyOn(console, 'log');

      const nyPizzaStore: PizzaStore = new NYPizzaStore();
      nyPizzaStore.orderPizza(TypePizza.Cheese);

      expect(log).toBeCalledWith('Prepare NY Style Sauce and Chesse Pizza');
    });
  });

  describe('Chicago Pizza Store', () => {
    let chicagoStore: PizzaStore;
    beforeAll(() => {
      chicagoStore = new ChicagoPizaaStore();
    });

    it('deve fabricar uma pizza Cheese no estilo Chicago', () => {
      const pizza = chicagoStore.orderPizza(TypePizza.Cheese);

      expect(pizza.getName()).toStrictEqual(
        'Chicago Style Deep Dish Cheese Pizza'
      );
    });
  });
});
