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
   * @return {string}
   */
  get updateTime() {
    if (!this.data) {
      return '';
    }
    return this.data.TargetDate;
  }

  /**
   * Range in metres
   * @returns {number}
   */
  get range() {
    if (!this.data) {
      return 0;
    }
    return parseInt(this.data.CruisingRangeAcOff);
  }

  /**
   * Range with AC on in metres
   * @returns {number}
   */
  get rangeWithAc() {
    if (!this.data) {
      return 0;
    }
    return parseInt(this.data.CruisingRangeAcOn);
  }

  /**
   * @returns {PluginStateEnum}
   */
  get pluginState() {
    if (!this.data) {
      return '';
    }
    return this.data.PluginState;
  }

  /**
   * @returns {ChargeStatusEnum}
   */
  get chargeStatus() {
    if (!this.data || !this.data.BatteryStatus) {
      return '';
    }
    return this.data.BatteryStatus.BatteryChargingStatus;
  }

  /**
   * @returns {Number}
   */
  get capacity() {
    if (!this.data || !this.data.BatteryStatus) {
      return 0;
    }
    return parseInt(this.data.BatteryStatus.BatteryCapacity);
  }

  /**
   * @returns {Number}
   */
  get chargeState() {
    if (!this.data || !this.data.BatteryStatus) {
      return 0;
    }
    return parseInt(this.data.BatteryStatus.BatteryRemainingAmount);
  }

  /**
   * @return {boolean}
   */
  get hasTimeToFull() {
    if (!this.data) {
      return false;
    }
    return this.data.hasOwnProperty('TimeRequiredToFull');
  }

  /**
   * @return {boolean}
   */
  get hasTimeToFull3kW() {
    if (!this.data) {
      return false;
    }
    return this.data.hasOwnProperty('TimeRequiredToFull200');
  }

  /**
   * @return {boolean}
   */
  get hasTimeToFull6kW() {
    if (!this.data) {
      return false;
    }
    return this.data.hasOwnProperty('TimeRequiredToFull200_6kW');
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull() {
    if (!this.data.TimeRequiredToFull) {
      return moment.duration(0);
    }
    return moment.duration({
      hours: this.data.TimeRequiredToFull.HourRequiredToFull,
      minutes: this.data.TimeRequiredToFull.MinutesRequiredToFull
    });
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull3kW() {
    if (!this.data.TimeRequiredToFull200) {
      return moment.duration(0);
    }
    return moment.duration({
      hours: this.data.TimeRequiredToFull200.HourRequiredToFull,
      minutes: this.data.TimeRequiredToFull200.MinutesRequiredToFull
    });
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull6kW() {
    if (!this.data.TimeRequiredToFull200_6kW) {
      return moment.duration(0);
    }
    return moment.duration({
      hours: this.data.TimeRequiredToFull200_6kW.HourRequiredToFull,
      minutes: this.data.TimeRequiredToFull200_6kW.MinutesRequiredToFull
    });
  }
}

module.exports = BatteryStatusLast;
