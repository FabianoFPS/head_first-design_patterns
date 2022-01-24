/* eslint-disable @typescript-eslint/no-empty-function */
export class Singleton1 {
  private static uniqueinstance: Singleton1 | null;

  private constructor() {}

  public static getinstance(): Singleton1 {
    if (!this.uniqueinstance) {
      this.uniqueinstance = new Singleton1();
    }

    return this.uniqueinstance;
  }
}

export class Singleton2 {
  private static uniqueinstance: Singleton2 = new Singleton2();

  private constructor() {}

  public static getinstance(): Singleton2 {
    return this.uniqueinstance;
  }
}

export class Singleton3 {
  private static /*volatile*/ uniqueinstance: Singleton3 | null;

  private constructor() {}

  public static getinstance(): Singleton3 {
    if (!this.uniqueinstance) {
      //synchronized (Singleton3.class) {
      if (this.uniqueinstance === null) this.uniqueinstance = new Singleton3();
      //}
    }

    return this.uniqueinstance;
  }
}
