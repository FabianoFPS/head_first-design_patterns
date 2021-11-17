import { DisplayElement } from './DisplayElement';
import { Measurements } from './Measurements';
import { Observer } from './Observer';
import { Subject } from './Subject';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature = 0;
  private humidity = 0;

  constructor(private weatherData: Subject) {
    this.weatherData.registerObserver(this);
  }

  update({ humidity, pressure: _, temperature }: Measurements) {
    this.temperature = temperature;
    this.humidity = humidity;

    this.display();
  }

  display() {
    console.info(
      `Current conditions: ${this.temperature} F degress and ${this.humidity} % humidity`
    );
  }
}
