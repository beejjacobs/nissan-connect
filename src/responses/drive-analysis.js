const DriveAnalysisDaySummary = require('./drive-analysis-day-summary');

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
 *
 */
class DriveAnalysis {
  /**
   *
   * @param {DriveAnalysisJson} info
   */
  constructor(info) {
    this.info = info;

    this.day = new DriveAnalysisDaySummary(this.summary);
  }

  /**
   * @returns {DateSummary}
   */
  get summary() {
    return this.info.DriveAnalysisBasicScreenResponsePersonalData.DateSummary;
  }

  /**
   * @returns {DriveAnalysisDaySummary}
   */
  get daySummary() {
    return this.day;
  }

  /**
   * e.g. miles/kWh
   * @returns {string}
   */
  get economyUnits() {
    return this.info.DriveAnalysisBasicScreenResponsePersonalData.ElectricCostScale;
  }
}

module.exports = DriveAnalysis;
