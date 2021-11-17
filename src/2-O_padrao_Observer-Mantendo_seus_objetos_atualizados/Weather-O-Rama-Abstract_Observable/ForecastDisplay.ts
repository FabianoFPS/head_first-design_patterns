import { DisplayElement } from './DisplayElement';
import { Observable } from './Observable';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure = 29.92;
  private lastPressure = 0;
  private weatherData: WeatherData;

  constructor(observable: Observable) {
    this.weatherData = observable as WeatherData;

    observable.addObserver(this);
  }

  update(observable: Observable) {
    if (observable instanceof WeatherData) {
      this.lastPressure = this.currentPressure;
      this.currentPressure = observable.getPressure();
      this.display();
    }
  }

  display() {
    let forecat = 'unknown';

    if (this.currentPressure > this.lastPressure) {
      forecat = 'Improving weather on the way!';
    } else if (this.currentPressure == this.lastPressure) {
      forecat = 'More of the same';
    } else if (this.currentPressure < this.lastPressure) {
      forecat = 'Watch out for cooler, rainy weather';
    }

    console.log(`Forecast: ${forecat}`);
  }
}
