const AcOn = require('./ac-on');

/**
 *
 */
class AcOff extends AcOn {

  /**
   * @param {AcOnResponse} info
   */
  constructor(info) {
    super(info);
  }

  /**
   * @returns {boolean}
   */
  success() {
    return this.hvacStatus === 'OFF';
  }
}

module.exports = AcOff;
