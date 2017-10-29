/**
 * @typedef {object} DateSummary
 * @property {string} TargetDate
 * @property {string} ElectricMileage
 * @property {string} ElectricMileageLevel
 * @property {string} PowerConsumptMoter
 * @property {string} PowerConsumptMoterLevel
 * @property {string} PowerConsumptMinus
 * @property {string} PowerConsumptMinusLevel
 * @property {string} PowerConsumptMinusLevel
 * @property {string} PowerConsumptAUX
 * @property {string} PowerConsumptAUXLevel
 *
 */

/**
 * @typedef {Number} Level
 * @description 1 (below average) - 5 (very good)
 */

/**
 * @typedef {Number} Energy
 * @description in watt hours (Wh)
 */

/**
 *
 */
class DriveAnalysisDaySummary {
  /**
   *
   * @param {DateSummary} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @returns {string}
   */
  get targetDate() {
    return this.info.TargetDate;
  }

  /**
   * Check whether the summary contains data
   * @returns {boolean}
   */
  get hasData() {
    return this.info.hasOwnProperty('ElectricMileage');
  }

  /**
   * In units of {@link DriveAnalysis#economyUnits}
   * @returns {Number}
   */
  get averageEconomy() {
    return parseFloat(this.info.ElectricMileage);
  }

  /**
   * @returns {Level}
   */
  get averageEconomyLevel() {
    return parseInt(this.info.ElectricMileageLevel);
  }

  /**
   * @returns {Energy}
   */
  get accelerationEnergy() {
    return parseFloat(this.info.PowerConsumptMoter);
  }

  /**
   *
   * @returns {Level}
   */
  get accelerationEnergyLevel() {
    return parseInt(this.info.PowerConsumptMoterLevel);
  }

  /**
   * @returns {Energy}
   */
  get regen() {
    return parseFloat(this.info.PowerConsumptMinus);
  }

  /**
   * @returns {Level}
   */
  get regenLevel() {
    return parseInt(this.info.PowerConsumptMinusLevel);
  }

  /**
   * @returns {Energy}
   */
  get accessoryUsage() {
    return parseFloat(this.info.PowerConsumptAUX);
  }

  /**
   * @returns {Level}
   */
  get accessoryUsageLevel() {
    return parseInt(this.info.PowerConsumptAUXLevel);
  }
}

module.exports = DriveAnalysisDaySummary;
