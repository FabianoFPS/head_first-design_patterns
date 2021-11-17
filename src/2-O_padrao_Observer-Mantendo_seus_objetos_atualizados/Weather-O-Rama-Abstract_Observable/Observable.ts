import { Observer } from './Observer';

export abstract class Observable {
  private observers: Array<Observer> = [];
  private changed = false;

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  deleteObserver(observer: Observer) {
    const index = this.observers.findIndex(
      (observerInArray) => observerInArray === observer
    );

    if (!(index === -1)) this.observers.splice(index, 1);
  }

  notifyObservers(object: unknown) {
    if (!this.hasChanged()) return;

    this.observers.forEach((observer) => observer.update(object));

    this.clearChanged();
  }

  setCahnged() {
    this.changed = true;
  }

  clearChanged() {
    this.changed = false;
  }

  hasChanged(): boolean {
    return this.changed;
  }
}
