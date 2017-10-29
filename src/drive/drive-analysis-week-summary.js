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

    this.days = [];

    this.yearMonth = this.data.RequestTargetDate.substr(0, this.data.RequestTargetDate.length - 2);

    this.dateSummaries.forEach(summary => {
      summary.TargetDate = this.yearMonth + summary.TargetDate;
      this.days.push(new DriveAnalysisDaySummary(summary));
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
   * First day is Sunday
   * @returns {DriveAnalysisDaySummary[]}
   */
  get daySummaries() {
    return this.days;
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
