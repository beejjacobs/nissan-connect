const Config = require('../../config');
const TripSummaryMonth = require('./trip-summary-month');

/**
 *
 */
class TripApi {
  /**
   * @param {NissanConnectApi} api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<TripSummaryMonth>}
   */
  async getMonthTripSummary(leaf, customerInfo, month) {
    this.api.log('get trip summary');
    let res = await this.api.request(Config.endPoints.priceSimulator, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: month.format('YYYYMM')
    });
    return new TripSummaryMonth(res);
  }
}

module.exports = TripApi;
