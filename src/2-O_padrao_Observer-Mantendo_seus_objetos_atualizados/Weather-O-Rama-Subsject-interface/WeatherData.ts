import { Observer } from './Observer';
import { Subject } from './Subject';

export class WeatherData implements Subject {
  private observers: Array<Observer>;
  private temperatura = 0;
  private humidity = 0;
  private pressure = 0;

  constructor() {
    this.observers = [];
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.findIndex(
      (observerInArray) => observerInArray === observer
    );

    if (!(index === -1)) this.observers.splice(index, 1);
  }

  notifyObservers() {
    this.observers.forEach((observer) =>
      observer.update({
        humidity: this.humidity,
        pressure: this.pressure,
        temperature: this.temperatura,
      })
    );
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperatura: number, humidity: number, pressure: number) {
    this.temperatura = temperatura;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
