const DriveAnalysis = require('./drive-analysis');
const DriveAnalysisWeekSummary = require('./drive-analysis-week-summary');
const Config = require('../config');

/**
 *
 */
class DriveApi {
  /**
   *
   * @param {NissanConnectApi} api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<DriveAnalysis>}
   */
  async getAnalysis(leaf, customerInfo) {
    this.api.log('get driving analysis');
    return this.api.request(Config.endPoints.driveAnalysis, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId
    })
        .then(res => new DriveAnalysis(res));
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} date
   * @returns {Promise.<DriveAnalysisWeekSummary>}
   */
  async getAnalysisDetail(leaf, customerInfo, date) {
    this.api.log('get driving analysis detail');
    return this.api.request(Config.endPoints.driveAnalysisDetail, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetDate: date.format('YYYY-MM-DD')
    })
        .then(res => new DriveAnalysisWeekSummary(res));
  }

}

module.exports = DriveApi;
