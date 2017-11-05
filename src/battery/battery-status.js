const moment = require('moment');
/**
 *
 */
class BatteryStatus {
  /**
   *
   * @param {BatteryStatusResponseJson} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * Range in metres
   * @returns {number}
   */
  get range() {
    return parseInt(this.info.cruisingRangeAcOff);
  }

  /**
   * Range with AC on in metres
   * @returns {number}
   */
  get rangeWithAc() {
    return parseInt(this.info.cruisingRangeAcOn);
  }

  /**
   * @returns {string}
   */
  get chargeLevel() {
    return this.info.currentChargeLevel;
  }

  /**
   * @returns {string}
   */
  get chargeMode() {
    return this.info.chargeMode;
  }

  /**
   * @typedef {string} PluginStateEnum
   * NOT_CONNECTED
   * QC_CONNECTED
   * CONNECTED
   */

  /**
   * @returns {PluginStateEnum}
   */
  get pluginState() {
    return this.info.pluginState;
  }

  /**
   * @returns {string}
   */
  get isCharging() {
    return this.info.charging;
  }

  /**
   * @typedef {string} ChargeStatusEnum
   * NOT_CHARGING
   * NORMAL_CHARGING
   * RAPIDLY_CHARGING
   * INVALID
   */

  /**
   * @returns {ChargeStatusEnum}
   */
  get chargeStatus() {
    return this.info.chargeStatus;
  }

  /**
   * @returns {Number}
   */
  get capacity() {
    return parseInt(this.info.batteryCapacity);
  }

  /**
   * @returns {Number}
   */
  get chargeState() {
    return parseInt(this.info.batteryDegradation);
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull() {
    return moment.duration({
      hours: this.info.timeRequiredToFull.hours,
      minutes: this.info.timeRequiredToFull.minutes
    });
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull3kW() {
    return moment.duration({
      hours: this.info.timeRequiredToFull200.hours,
      minutes: this.info.timeRequiredToFull200.minutes
    });
  }

  /**
   * @returns {moment.Duration}
   */
  get timeToFull6kW() {
    return moment.duration({
      hours: this.info.timeRequiredToFull200_6kW.hours,
      minutes: this.info.timeRequiredToFull200_6kW.minutes
    });
  }

}

module.exports = BatteryStatus;
