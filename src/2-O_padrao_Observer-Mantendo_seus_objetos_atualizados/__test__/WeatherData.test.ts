import { CurrentConditionsDisplay } from '../Weather-O-Rama-Subsject-interface/CurrentConditionsDsiplay';
import { HeatindexDisplay } from '../Weather-O-Rama-Subsject-interface/HeatIndexDisplay';
import { WeatherData } from '../Weather-O-Rama-Subsject-interface/WeatherData';

import { WeatherData as WeatherDataObservable } from '../Weather-O-Rama-Abstract_Observable/WeatherData';
import { CurrentConditionsDisplay as CurrentConditionsDisplayObservable } from '../Weather-O-Rama-Abstract_Observable/CurrentConditionsDsiplay';
import { Observable } from '../Weather-O-Rama-Abstract_Observable/Observable';
import { HeatIndexDisplay } from '../Weather-O-Rama-Abstract_Observable/HeatIndexDisplay';

describe('WeatherData | Interface Subject', () => {
  let weatherData: WeatherData;
  const temperature = 50;
  const humidity = 30;
  const pressure = 90;

  beforeEach(() => {
    weatherData = new WeatherData();
  });

  it('deve ser possível incluir um observer', () => {
    const registerObserver = jest.spyOn(weatherData, 'registerObserver');
    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    expect(registerObserver).toBeCalledWith(currentConditionsDisplay);
  });

  it('deve ser possível remover um observer', () => {
    const removeObserver = jest.spyOn(weatherData, 'removeObserver');
    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    const display = jest.spyOn(currentConditionsDisplay, 'display');

    weatherData.removeObserver(currentConditionsDisplay);

    expect(removeObserver).toBeCalledWith(currentConditionsDisplay);
    expect(display).toHaveBeenCalledTimes(0);
  });

  it('deve notificar os observers', () => {
    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    const update = jest.spyOn(currentConditionsDisplay, 'update');
    new HeatindexDisplay(weatherData);

    weatherData.setMeasurements(temperature, humidity, pressure);

    expect(update).toBeCalledWith({
      temperature,
      humidity,
      pressure,
    });
  });

  it('deve ser possível incluir mais de um observer', () => {
    const registerObserver = jest.spyOn(weatherData, 'registerObserver');
    new CurrentConditionsDisplay(weatherData);
    new HeatindexDisplay(weatherData);
    expect(registerObserver).toBeCalledTimes(2);
  });
});

describe('WeatherData | Abstract Observable', () => {
  let weatherData: WeatherDataObservable;
  const temperature = 55;
  const humidity = 35;
  const pressure = 95;

  beforeAll(() => {
    weatherData = new WeatherDataObservable();
  });

  it('deve ser possível incluir um observer', () => {
    const registerObserver = jest.spyOn(Observable.prototype, 'addObserver');
    const currentConditionsDisplay = new CurrentConditionsDisplayObservable(
      weatherData
    );
    expect(registerObserver).toBeCalledWith(currentConditionsDisplay);
  });

  it('deve notificar os observers', () => {
    const currentConditionsDisplay = new CurrentConditionsDisplayObservable(
      weatherData
    );
    const updateCurrentConditionsDisplay = jest.spyOn(
      currentConditionsDisplay,
      'update'
    );
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);
    const updateHeatIndexDisplay = jest.spyOn(heatIndexDisplay, 'update');

    weatherData.setMeasurements(temperature, humidity, pressure);

    expect(updateCurrentConditionsDisplay).toHaveBeenCalledWith(weatherData);

    expect(updateHeatIndexDisplay).toBeCalledWith(weatherData);
  });
});
