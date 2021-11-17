import { DisplayElement } from './DisplayElement';
import { Observable } from './Observable';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature = 0;
  private humidity = 0;

  constructor(private weatherData: Observable) {
    this.weatherData.addObserver(this);
  }

  update(object: unknown) {
    const weatherData: WeatherData = object as WeatherData;

    this.temperature = weatherData.getTemperature();
    this.humidity = weatherData.getHumidity();

    this.display();
  }

  display() {
    console.info(
      `Current conditions: ${this.temperature} F degress and ${this.humidity} % humidity`
    );
  }
}
