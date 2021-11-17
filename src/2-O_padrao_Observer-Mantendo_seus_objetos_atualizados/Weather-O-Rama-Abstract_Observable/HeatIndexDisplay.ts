import { DisplayElement } from './DisplayElement';
import { Observable } from './Observable';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class HeatIndexDisplay implements Observer, DisplayElement {
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
    const t = this.temperature;
    const rh = this.humidity;
    const heatIndex =
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh);

    console.log(`Heat index is ${heatIndex}`);
  }
}
