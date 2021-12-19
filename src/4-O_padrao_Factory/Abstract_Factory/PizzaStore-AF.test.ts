import { TypePizza } from './PizzaStore';
import { NYPizzaIngredientFactory } from './NY/NYPizzaIngredientFactory';
import { NYPizzaStore } from './NY/NYPizzaStore';
import { ChicagoPizzaIngredientFactory } from './chicago/ChicagoPizzaIngredientFactory';
import { ChicagoPizaaStore } from './chicago/ChicagoPizzaStore';

describe('Pizza Stored', () => {
  let pizzaStore: NYPizzaStore;

  beforeAll(() => {
    const pizzaIngredientFactory = new NYPizzaIngredientFactory();
    pizzaStore = new NYPizzaStore(pizzaIngredientFactory);
  });

  describe('NY Pizza Store', () => {
    it('deve retornar pizza de Pepperoni no estilo de NY', () => {
      const log = jest.spyOn(console, 'log');

      pizzaStore.orderPizza(TypePizza.Pepperoni);

      expect(log).toBeCalledWith(
        'Preparing Pizza de Pepperoni no estilo de Nova York'
      );
    });

    it('deve retornar pizza de marisco no estilo de NY', () => {
      const pizza = pizzaStore.orderPizza(TypePizza.Clam);

      expect(pizza.getName()).toStrictEqual(
        'Pizza de marisco no estilo de Nova York'
      );
    });
  });

  describe('Chicago Pizza Store', () => {
    let chicagoStore: ChicagoPizaaStore;
    beforeAll(() => {
      const pizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
      chicagoStore = new ChicagoPizaaStore(pizzaIngredientFactory);
    });

    it('deve fabricar uma pizza Cheese no estilo Chicago', () => {
      const pizza = chicagoStore.orderPizza(TypePizza.Cheese);

      expect(pizza.getName()).toStrictEqual(
        'Chicago Style Deep Dish Cheese Pizza'
      );
    });

    it('deve fabricar uma pizza Vegana no estilo Chicago', () => {
      const pizza = chicagoStore.orderPizza(TypePizza.Veggie);

      expect(pizza.getName()).toStrictEqual(
        'Pizza de Veggie no estilo de Chicago'
      );
    });
  });
});
