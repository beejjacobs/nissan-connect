const moment = require('moment');
const Calendar = require('./calendar');
const DrivingRecord = require('./driving-record');

/**
 * @typedef {DrivingRecordDetail} DrivingRecordResponseInfoDetail
 * @property {string} CalendarDisplayMonth
 * @property {string} CalendarTargetMonth
 * @property {string} DisplayDate
 * @property {string} ElectricCostScale
 * @property {string} TargetDate
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
 * @extends DrivingRecord
 */
class DrivingRecordDay extends DrivingRecord {
  /**
   * @param {DrivingRecordResponse} info
   */
  constructor(info) {
    super(info.CarKarteDetailInfoResponsePersonalData.DateSummaryCarKarteDetailInfo);
    this.info = info;
    /**
     * @type {Calendar}
     */
    this.calendar = new Calendar(this.data);
  }

  /**
   * @return {DrivingRecordResponseInfo}
   */
  get data() {
    return this.info.CarKarteDetailInfoResponsePersonalData;
  }
  /**
   * @return {moment.Moment}
   */
  get date() {
    return moment(this.data.DateSummaryCarKarteDetailInfo.TargetDate);
  }

  /**
   * e.g. miles/kWh
   * @returns {string}
   */
  get economyUnits() {
    return this.data.DateSummaryCarKarteDetailInfo.ElectricCostScale;
  }

  /**
   * @return {string}
   */
  get note() {
    return this.data.DrivingNote;
  }
}

module.exports = DrivingRecordDay;
