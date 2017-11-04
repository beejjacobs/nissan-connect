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
   * @param {moment.Moment} date
   * @return {Promise.<TripSummaryMonth>}
   */
  getMonthTripSummary(leaf, customerInfo, date) {
    this.api.log('get trip summary');
    return this.api.request(Config.endPoints.priceSimulator, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: date.format('YYYYMM')
    })
        .then(res => new TripSummaryMonth(res));
  }
}

module.exports = TripApi;
