const DriveAnalysisDaySummary = require('./drive-analysis-day-summary');
const moment = require('moment');
/**
 * @typedef {object} DateSummaryList
 * @property {DateSummary[]} DateSummary
 */

 /**
 * @typedef {object} DriveAnalysisDetailJson
 * @property {string} ElectricCostScale
 * @property {string} RequestTargetDate
 * @property {DateSummaryList} DateSummaryList
 */

/**
 * @typedef {object} DriveAnalysisWeekSummaryJson
 * @property {DriveAnalysisDetailJson} DriveAnalysisDetailResponsePersonalData
 */

/**
 *
 */
class DriveAnalysisWeekSummary {
  /**
   *
   * @param {DriveAnalysisWeekSummaryJson} info
   */
  constructor(info) {
    this.info = info;

    let yearMonth = this.data.RequestTargetDate.substr(0, this.data.RequestTargetDate.length - 2);

    /**
     * First day is Sunday
     * @type {DriveAnalysisDaySummary[]}
     */
    this.days = this.dateSummaries.map(summary => {
      if (summary.TargetDate.length === 2) {
        summary.TargetDate = yearMonth + summary.TargetDate;
      }
      return new DriveAnalysisDaySummary(summary);
    });
  }

  /**
   * @returns {DriveAnalysisDetailJson}
   */
  get data() {
    return this.info.DriveAnalysisDetailResponsePersonalData;
  }

  /**
   * @returns {DateSummary[]}
   */
  get dateSummaries() {
    return this.data.DateSummaryList.DateSummary;
  }

  /**
   * @returns {moment.Moment}
   */
  get startDate() {
    return this.endDate.subtract(6, 'days');
  }

  /**
   * @returns {moment.Moment}
   */
  get endDate() {
    return moment(this.data.RequestTargetDate);
  }

  /**
   * e.g. miles/kWh
   * @returns {string}
   */
  get economyUnits() {
    return this.data.ElectricCostScale;
  }

}

module.exports = DriveAnalysisWeekSummary;
