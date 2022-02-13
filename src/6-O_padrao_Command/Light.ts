export class Light {
  constructor(private area = '') {}

  public on() {
    console.log(`${this.area} Luz ligada`);
  }

  public off() {
    console.log(`${this.area} Luz desligada`);
  }
}
