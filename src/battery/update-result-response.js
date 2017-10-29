const BatteryStatus = require('./battery-status');
/**
 * @typedef {object} HoursMinutes
 * @property {string} hours
 * @property {string} minutes
 */

/**
 * @typedef {object} UpdateResultResponseJson
 * @property {string} timeStamp
 * @property {string} cruisingRangeAcOn
 * @property {string} cruisingRangeAcOff
 * @property {string} currentChargeLevel
 * @property {string} chargeMode
 * @property {string} pluginState
 * @property {string} charging
 * @property {string} chargeStatus
 * @property {string} batteryDegradation
 * @property {string} batteryCapacity
 * @property {HoursMinutes} timeRequiredToFull
 * @property {HoursMinutes} timeRequiredToFull200
 * @property {HoursMinutes} timeRequiredToFull200_6kW
 */

/**
 *
 */
class UpdateResultResponse {
  /**
   *
   * @param {UpdateResultResponseJson} info
   */
  constructor(info) {
    this.info = info;
    /**
     * @type {BatteryStatus}
     */
    this.batteryStatus = new BatteryStatus(info);
  }

  /**
   *
   * @returns {string}
   */
  get updateTime() {
    return this.info.timeStamp;
  }

}

module.exports = UpdateResultResponse;
