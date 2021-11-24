import { Beverage, Size } from './Beverage';

export abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;

  public abstract getSize(): Size;

  public abstract setSize(size: Size): void;
}
