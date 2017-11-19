const Calendar = require('./calendar');
const DrivingRecord = require('./driving-record');
const DrivingRecordMonth = require('./driving-record-month');
const DrivingRecordYear = require('./driving-record-year');
const GraphResponse = require('./graph-response');
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
   * @param {moment.Moment} month
   * @return {Promise.<Calendar>}
   */
  getAvailableDays(leaf, customerInfo, month) {
    this.api.log('get available days');
    return this.api.request(Config.endPoints.carMapDetailCalender, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: month.format('YYYYMM')
    })
        .then(res => new Calendar(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} date
   * @param {string} note
   * @return {Promise}
   */
  addNote(leaf, customerInfo, date, note) {
    this.api.log('add note');
    return this.api.request(Config.endPoints.carMapDrivingNote, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetDate: date.format('YYYY-MM-DD'),
      DrivingNote: note
    });
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<DrivingRecordMonth>}
   */
  graphInfoMonth(leaf, customerInfo, month) {
    this.api.log('graph info month');
    return this.api.request(Config.endPoints.carMapGraphInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: month.format('YYYYMM'),
      DateRangeLevel: 'DAILY'
    })
        .then(res => new DrivingRecordMonth(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<DrivingRecordYear>}
   */
  graphInfoYear(leaf, customerInfo, year) {
    this.api.log('graph info year');
    return this.api.request(Config.endPoints.carMapGraphInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetYear: year.format('YYYY'),
      DateRangeLevel: 'MONTHLY'
    })
        .then(res => new DrivingRecordYear(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  graphMonthTrips(leaf, customerInfo, month) {
    return this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_TRIPS')
        .then(res => GraphResponse.singleSet(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  graphMonthDistanceTime(leaf, customerInfo, month) {
    return this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_DISTTIME')
        .then(res => GraphResponse.distanceTime(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  graphMonthEnergyUsage(leaf, customerInfo, month) {
    return this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_CONSUME')
        .then(res => GraphResponse.singleSet(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  graphMonthDistanceEconomy(leaf, customerInfo, month) {
    return this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_DISTMILEAGE')
        .then(res => GraphResponse.distanceEconomy(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @param {string} type
   * @return {Promise.<BaseGraphResponse>}
   */
  graphMonth(leaf, customerInfo, month, type) {
    this.api.log('graph month ' + type);
    return this.api.requestHtml(Config.endPoints.carMapGraph, {
      lg: customerInfo.language,
      lng: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: month.format('YYYYMM'),
      GraphType: type
    })
        .then(res => GraphResponse.parse(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  graphYearTrips(leaf, customerInfo, year) {
    return this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_TRIPS')
        .then(res => GraphResponse.singleSet(res));
  }

  /**
   * Distance in km
   * Time in hours
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  graphYearDistanceTime(leaf, customerInfo, year) {
    return this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_DISTTIME')
        .then(res => GraphResponse.distanceTime(res));
  }

  /**
   * Energy usage in kwh
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  graphYearEnergyUsage(leaf, customerInfo, year) {
    return this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_CONSUME')
        .then(res => GraphResponse.singleSet(res));
  }

  /**
   * Distance in km
   * Economy in miles/kwh
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  graphYearDistanceEconomy(leaf, customerInfo, year) {
    return this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_DISTMILEAGE')
        .then(res => GraphResponse.distanceEconomy(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @param {string} type
   * @return {Promise.<BaseGraphResponse>}
   */
  graphYear(leaf, customerInfo, year, type) {
    this.api.log('graph year ' + type);
    return this.api.requestHtml(Config.endPoints.carMapGraph, {
      lg: customerInfo.language,
      lng: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetYear: year.format('YYYY'),
      GraphType: type
    })
        .then(res => GraphResponse.parse(res));
  }
}

module.exports = RecordApi;
