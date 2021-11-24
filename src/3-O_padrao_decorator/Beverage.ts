export enum Size {
  Small = 'SMALL',
  Mediun = 'MEDIUN',
  Big = 'BIG',
}

export abstract class Beverage {
  protected descrption = 'Unknown Beverage';
  protected size = Size.Mediun;

  public getDescription(): string {
    return this.descrption;
  }

  public abstract cost(): number;

  setSize(size: Size) {
    this.size = size;
  }

  getSize(): Size {
    return this.size;
  }
}
