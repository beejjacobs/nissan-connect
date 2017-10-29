/**
 *
 */
class BatteryStatus {
  /**
   *
   * @param {UpdateResultResponseJson} info
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
   * @returns {HoursMinutes}
   */
  get timeToFull() {
    return this.info.timeRequiredToFull;
  }

  /**
   * @returns {HoursMinutes}
   */
  get timeToFull3kW() {
    return this.info.timeRequiredToFull;
  }

  /**
   * @returns {HoursMinutes}
   */
  get timeToFull6kW() {
    return this.info.timeRequiredToFull200_6kW;
  }

}

module.exports = BatteryStatus;
