const Calendar = require('./calendar');
const DrivingRecord = require('./driving-record');
const Config = require('../../config');

class RecordApi {
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
   * @return {Promise.<DrivingRecord>}
   */
  getFor(leaf, customerInfo, date) {
    this.api.log('get record');
    return this.api.request(Config.endPoints.carMapDetailInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetDate: date.format('YYYY-MM-DD')
    })
        .then(res => new DrivingRecord(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} date
   * @return {Promise.<Calendar>}
   */
  getAvailableDays(leaf, customerInfo, date) {
    this.api.log('get available days');
    return this.api.request(Config.endPoints.carMapDetailCalender, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: date.format('YYYYMM')
    })
        .then(res => new Calendar(res));
  }
}

module.exports = RecordApi;
