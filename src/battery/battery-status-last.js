const moment = require('moment');
/**
 * @typedef {object} HoursMinutesFull
 * @property {string} HourRequiredToFull
 * @property {string} MinutesRequiredToFull
 */

/**
 * @typedef {object} BatteryStatusJson
 * @property {string} BatteryChargingStatus
 * @property {string} BatteryCapacity
 * @property {string} BatteryRemainingAmount
 */
/**
 * @typedef {object} BatteryStatusLastJson
 * @property {string} TargetDate
 * @property {string} CruisingRangeAcOn
 * @property {string} CruisingRangeAcOff
 * @property {string} PluginState
 * @property {BatteryStatusJson} BatteryStatus
 * @property {HoursMinutesFull} TimeRequiredToFull
 * @property {HoursMinutesFull} TimeRequiredToFull200
 * @property {HoursMinutesFull} TimeRequiredToFull200_6kW
 */

/**
 * @typedef {object} BatteryStatusLastResponseJson
 * @property {BatteryStatusLastJson} BatteryStatusRecords
 */


class BatteryStatusLast {
  /**
   * @param {BatteryStatusLastResponseJson} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @returns {BatteryStatusLastJson}
   */
  get data() {
    return this.info.BatteryStatusRecords;
  }

  /**
   * Range in metres
   * @returns {number}
   */
  get range() {
    return parseInt(this.data.CruisingRangeAcOff);
  }

  /**
   * Range with AC on in metres
   * @returns {number}
   */
  get rangeWithAc() {
    return parseInt(this.data.CruisingRangeAcOn);
  }

  /**
   * @returns {PluginStateEnum}
   */
  get pluginState() {
    return this.data.PluginState;
  }

  /**
   * @returns {ChargeStatusEnum}
   */
  get chargeStatus() {
    return this.data.BatteryStatus.BatteryChargingStatus;
  }

  /**
   * @returns {Number}
   */
  get capacity() {
    return parseInt(this.data.BatteryStatus.BatteryCapacity);
  }

  /**
   * @returns {Number}
   */
  get chargeState() {
    return parseInt(this.data.BatteryStatus.BatteryRemainingAmount);
  }

  /**
   * @return {boolean}
   */
  get hasTimeToFull() {
    return this.data.hasOwnProperty('TimeRequiredToFull');
  }

  /**
   * @return {boolean}
   */
  get hasTimeToFull3kW() {
    return this.data.hasOwnProperty('TimeRequiredToFull200');
  }

  /**
   * @return {boolean}
   */
  get hasTimeToFull6kW() {
    return this.data.hasOwnProperty('TimeRequiredToFull200_6kW');
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull() {
    return moment.duration({
      hours: this.data.TimeRequiredToFull.HourRequiredToFull,
      minutes: this.data.TimeRequiredToFull.MinutesRequiredToFull
    });
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull3kW() {
    return moment.duration({
      hours: this.data.TimeRequiredToFull200.HourRequiredToFull,
      minutes: this.data.TimeRequiredToFull200.MinutesRequiredToFull
    });
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull6kW() {
    return moment.duration({
      hours: this.data.TimeRequiredToFull200_6kW.HourRequiredToFull,
      minutes: this.data.TimeRequiredToFull200_6kW.MinutesRequiredToFull
    });
  }
}

module.exports = BatteryStatusLast;
