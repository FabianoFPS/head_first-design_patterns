export abstract class Beverage {
  protected descrption = 'Unknown Beverage';

  public getDescription(): string {
    return this.descrption;
  }

  public abstract cost(): number;
}
