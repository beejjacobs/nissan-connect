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
 * @typedef {object} PersonalData
 * @property {DateSummary} DateSummary
 * @property {string} ElectricCostScale
 */

/**
 * @typedef {object} Advice
 * @property {string} title
 * @property {string} body
 */

/**
 * @typedef {object} DriveAnalysisJson
 * @property {PersonalData} DriveAnalysisBasicScreenResponsePersonalData:
 * @property {object} AdviceList
 * @property {Advice} AdviceList.Advice
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
class DriveAnalysis {
  /**
   *
   * @param {DriveAnalysisJson} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @returns {DateSummary}
   */
  get summary() {
    return this.info.DriveAnalysisBasicScreenResponsePersonalData.DateSummary;
  }

  /**
   * @returns {string}
   */
  get targetDate() {
    return this.summary.TargetDate;
  }

  /**
   * In units of {@link DriveAnalysis#economyUnits}
   * @returns {Number}
   */
  get averageEconomy() {
    return parseFloat(this.summary.ElectricMileage);
  }

  /**
   * @returns {Level}
   */
  get averageEconomyLevel() {
    return parseInt(this.summary.ElectricMileageLevel);
  }

  /**
   * e.g. miles/kWh
   * @returns {string}
   */
  get economyUnits() {
    return this.info.DriveAnalysisBasicScreenResponsePersonalData.ElectricCostScale;
  }

  /**
   * @returns {Energy}
   */
  get accelerationEnergy() {
    return parseFloat(this.summary.PowerConsumptMoter);
  }

  /**
   *
   * @returns {Level}
   */
  get accelerationEnergyLevel() {
    return parseInt(this.summary.PowerConsumptMoterLevel);
  }

  /**
   * @returns {Energy}
   */
  get regen() {
    return parseFloat(this.summary.PowerConsumptMinus);
  }

  /**
   * @returns {Level}
   */
  get regenLevel() {
    return parseInt(this.summary.PowerConsumptMinusLevel);
  }

  /**
   * @returns {Energy}
   */
  get accessoryUsage() {
    return parseFloat(this.summary.PowerConsumptAUX);
  }

  /**
   * @returns {Level}
   */
  get accessoryUsageLevel() {
    return parseInt(this.summary.PowerConsumptAUXLevel);
  }
}

module.exports = DriveAnalysis;
