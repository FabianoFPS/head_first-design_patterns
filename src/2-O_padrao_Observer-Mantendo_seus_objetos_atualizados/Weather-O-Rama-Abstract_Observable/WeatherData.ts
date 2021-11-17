import { Observable } from './Observable';

export class WeatherData extends Observable {
  private temperature = 0;
  private humidity = 0;
  private pressure = 0;

  measurementsChanged() {
    this.setCahnged();
    this.notifyObservers(this);
  }

  setMeasurements(temperatura: number, humidity: number, pressure: number) {
    this.temperature = temperatura;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getPressure(): number {
    return this.pressure;
  }

  getHumidity(): number {
    return this.humidity;
  }
}
