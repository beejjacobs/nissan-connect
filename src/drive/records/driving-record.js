const moment = require('moment');
const Calendar = require('./calendar');

/**
 * @typedef {object} DrivingRecordResponseInfoDetail
 * @property {string} CalendarDisplayMonth
 * @property {string} CalendarTargetMonth
 * @property {string} CO2Reduction
 * @property {string} DisplayDate
 * @property {string} ElectricCostScale
 * @property {string} ElectricMileage
 * @property {string} PowerConsumptTotal
 * @property {string} TargetDate
 * @property {string} TravelDistance
 * @property {string} TravelTime
 */

/**
 * @typedef {CalendarResponse} DrivingRecordResponseInfo
 * @property {DrivingRecordResponseInfoDetail} DateSummaryCarKarteDetailInfo
 * @property {string} DrivingNote
 */

/**
 * @typedef {object} DrivingRecordResponse
 * @property {DrivingRecordResponseInfo} CarKarteDetailInfoResponsePersonalData
 */

/**
 *
 */
class DrivingRecord {
  /**
   * @param {DrivingRecordResponse} info
   */
  constructor(info) {
    this.info = info;
    this.calendar = new Calendar(this.data);
  }

  /**
   * @return {DrivingRecordResponseInfo}
   */
  get data() {
    return this.info.CarKarteDetailInfoResponsePersonalData;
  }

  /**
   * @return {DrivingRecordResponseInfoDetail}
   */
  get detail() {
    return this.data.DateSummaryCarKarteDetailInfo;
  }

  /**
   * @return {moment.Moment}
   */
  get date() {
    return moment(this.detail.TargetDate);
  }

  /**
   * In units of {@link economyUnits}
   * @returns {Number}
   */
  get averageEconomy() {
    return parseFloat(this.detail.ElectricMileage);
  }

  /**
   * e.g. miles/kWh
   * @returns {string}
   */
  get economyUnits() {
    return this.detail.ElectricCostScale;
  }

  /**
   * In kg
   * @return {number}
   */
  get co2Saving() {
    return parseFloat(this.detail.CO2Reduction);
  }

  /**
   * In hours
   * @return {Number}
   */
  get travelTime() {
    return parseFloat(this.detail.TravelTime);
  }

  /**
   * In kWh
   * @return {Number}
   */
  get energyUsage() {
    return parseFloat(this.detail.PowerConsumptTotal);
  }

  /**
   * @return {string}
   */
  get note() {
    return this.data.DrivingNote;
  }
}

module.exports = DrivingRecord;
