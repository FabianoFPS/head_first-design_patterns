class Singleton {
  #config;

  constructor() {
    this.#config = { appName: 'Not configured' }
  }

  setConfig(config) {
    this.#config = config;
  }

  log(message, ...params) {
    console.log(this.#config, message, params);
  }
}

module.exports = new Singleton();
