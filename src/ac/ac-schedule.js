/**
 * @typedef {object} AcScheduleJson
 * @property {string} LastScheduledTime
 * @property {string} ExecuteTime
 * @property {string} DisplayExecuteTime
 * @property {string} TargetDate
 */
/**
 *
 */
class AcSchedule {
  /**
   * @param {AcScheduleJson} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @returns {boolean}
   */
  get isSet() {
    return this.targetDate !== "";
  }

  /**
   * @returns {string}
   */
  get lastScheduledTime() {
    return this.info.LastScheduledTime;
  }

  /**
   * @returns {string}
   */
  get executeTime() {
    return this.info.ExecuteTime;
  }

  /**
   * @returns {string}
   */
  get targetDate() {
    return this.info.TargetDate;
  }
}

module.exports = AcSchedule;
