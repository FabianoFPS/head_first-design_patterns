interface config {
  appName: string;
}

class Singleton {
  constructor(private config = { appName: 'Not configured' }) {}

  setConfig(config: config) {
    this.config = config;
  }

  log(message: string, ...params: string[]) {
    console.log(this.config, message, params);
  }
}

const singleton = new Singleton();

export { config, singleton };

//https://k94n.com/es6-modules-single-instance-pattern
