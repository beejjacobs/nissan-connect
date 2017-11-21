class Logger {
  constructor(prefix) {
    this.name = prefix;
  }

  log(...args) {
    console.log(Logger.time, this.prefix, ...args);
  }

  get prefix() {
    return `[${this.name}]`;
  }

  static get time() {
    return new Date().toISOString().replace('T', ' ').replace('Z', '');
  }
}

module.exports = Logger;
