/**
 * @typedef {object} AcOnResponse
 * @property {string} operationResult
 * @property {string} acContinueTime
 * @property {string} cruisingRangeAcOn
 * @property {string} cruisingRangeAcOff
 * @property {string} timeStamp
 * @property {string} hvacStatus
 */

/**
 *
 */
class AcOn {
  /**
   *
   * @param {AcOnResponse} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @typedef {string} OperationResult
   * INVALID
   * START
   * START_QUICK
   * START_BATTERY
   * FINISH
   * NG
   * INTERNAL_ERROR
   * ELECTRIC_WAVE_ABNOMAL
   */

  /**
   * @returns {OperationResult}
   */
  get result() {
    return this.info.operationResult;
  }

  /**
   * @returns {boolean}
   */
  get success() {
    return this.hvacStatus === 'ON';
  }

  /**
   * @returns {string}
   */
  get continueTime() {
    return this.info.acContinueTime;
  }

  /**
   * @typedef {string} HvacStatus
   * ON
   * OFF
   */

  /**
   * @returns {HvacStatus}
   */
  get hvacStatus() {
    return this.info.hvacStatus;
  }

  /**
   * @returns {string}
   */
  get time() {
    return this.info.timeStamp;
  }

}

module.exports = AcOn;
