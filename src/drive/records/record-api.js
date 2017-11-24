const Calendar = require('./calendar');
const DrivingRecordDay = require('./driving-record-day');
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
   * @return {Promise.<DrivingRecordDay>}
   */
  async getFor(leaf, customerInfo, date) {
    this.api.log('get record');
    let res = await this.api.request(Config.endPoints.carMapDetailInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetDate: date.format('YYYY-MM-DD')
    });
    return new DrivingRecordDay(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<Calendar>}
   */
  async getAvailableDays(leaf, customerInfo, month) {
    this.api.log('get available days');
    let res = await this.api.request(Config.endPoints.carMapDetailCalender, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: month.format('YYYYMM')
    });
    return new Calendar(res);
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
  async graphInfoMonth(leaf, customerInfo, month) {
    this.api.log('graph info month');
    let res = await this.api.request(Config.endPoints.carMapGraphInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: month.format('YYYYMM'),
      DateRangeLevel: 'DAILY'
    });
    return new DrivingRecordMonth(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<DrivingRecordYear>}
   */
  async graphInfoYear(leaf, customerInfo, year) {
    this.api.log('graph info year');
    let res = await this.api.request(Config.endPoints.carMapGraphInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetYear: year.format('YYYY'),
      DateRangeLevel: 'MONTHLY'
    });
    return new DrivingRecordYear(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  async graphMonthTrips(leaf, customerInfo, month) {
    let res = await this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_TRIPS');
    return GraphResponse.singleSet(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async graphMonthDistanceTime(leaf, customerInfo, month) {
    let res = await this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_DISTTIME');
    return GraphResponse.distanceTime(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  async graphMonthEnergyUsage(leaf, customerInfo, month) {
    let res = await this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_CONSUME');
    return GraphResponse.singleSet(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async graphMonthDistanceEconomy(leaf, customerInfo, month) {
    let res = await this.graphMonth(leaf, customerInfo, month, 'CARKARTE_DAILY_DISTMILEAGE');
    return GraphResponse.distanceEconomy(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} month
   * @param {string} type
   * @return {Promise.<BaseGraphResponse>}
   */
  async graphMonth(leaf, customerInfo, month, type) {
    this.api.log('graph month ' + type);
    let res = await this.api.requestHtml(Config.endPoints.carMapGraph, {
      lg: customerInfo.language,
      lng: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetMonth: month.format('YYYYMM'),
      GraphType: type
    });
    return GraphResponse.parse(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  async graphYearTrips(leaf, customerInfo, year) {
    let res = await this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_TRIPS');
    return GraphResponse.singleSet(res);
  }

  /**
   * Distance in km
   * Time in hours
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async graphYearDistanceTime(leaf, customerInfo, year) {
    let res = await this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_DISTTIME');
    return GraphResponse.distanceTime(res);
  }

  /**
   * Energy usage in kwh
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  async graphYearEnergyUsage(leaf, customerInfo, year) {
    let res = await this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_CONSUME');
    return GraphResponse.singleSet(res);
  }

  /**
   * Distance in km
   * Economy in miles/kwh
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async graphYearDistanceEconomy(leaf, customerInfo, year) {
    let res = await this.graphYear(leaf, customerInfo, year, 'CARKARTE_MONTHLY_DISTMILEAGE');
    return GraphResponse.distanceEconomy(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} year
   * @param {string} type
   * @return {Promise.<BaseGraphResponse>}
   */
  async graphYear(leaf, customerInfo, year, type) {
    this.api.log('graph year ' + type);
    let res = await this.api.requestHtml(Config.endPoints.carMapGraph, {
      lg: customerInfo.language,
      lng: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetYear: year.format('YYYY'),
      GraphType: type
    });
    return GraphResponse.parse(res);
  }
}

module.exports = RecordApi;
