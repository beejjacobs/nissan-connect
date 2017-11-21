const DriveAnalysis = require('./drive-analysis');
const DriveAnalysisWeekSummary = require('./drive-analysis-week-summary');
const RecordApi = require('./records/record-api');
const TripApi = require('./trip/trip-api');
const Config = require('../config');

/**
 *
 */
class DriveApi {
  /**
   * @param {NissanConnectApi} api
   */
  constructor(api) {
    this.api = api;
    /**
     * @type {RecordApi}
     */
    this.records = new RecordApi(api);
    /**
     * @type {TripApi}
     */
    this.trip = new TripApi(api);
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<DriveAnalysis>}
   */
  async getAnalysis(leaf, customerInfo) {
    this.api.log('get driving analysis');
    let res = await this.api.request(Config.endPoints.driveAnalysis, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId
    });
    return new DriveAnalysis(res);
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
    let res = await this.api.request(Config.endPoints.driveAnalysisDetail, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetDate: date.format('YYYY-MM-DD')
    });
    return new DriveAnalysisWeekSummary(res);
  }

}

module.exports = DriveApi;
