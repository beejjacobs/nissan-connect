const moment = require('moment');
const DrivingRecord = require('./driving-record');
/**
 * @typedef {object} DrivingRecordMonthResponse
 * @property {DrivingRecordMonthResponseInfo} CarKarteGraphInfoResponseMonthPersonalData
 */

/**
 * @typedef {object} DrivingRecordMonthResponseInfo
 * @property {string} ElectricCostScale
 * @property {DrivingRecordMonthResponseInfoDetail} MonthSummaryCarKarteDetailInfo
 */

/**
 * @typedef {DrivingRecordDetail} DrivingRecordMonthResponseInfoDetail
 * @property {string} TargetMonth
 */

/**
 * @extends DrivingRecord
 */
class DrivingRecordMonth extends DrivingRecord {
  /**
   * @param {DrivingRecordMonthResponse} info
   */
  constructor(info) {
    super(info.CarKarteGraphInfoResponseMonthPersonalData.MonthSummaryCarKarteDetailInfo);
    this.info = info;
  }

  /**
   * @return {DrivingRecordMonthResponseInfo}
   */
  get data() {
    return this.info.CarKarteGraphInfoResponseMonthPersonalData;
  }

  /**
   * @return {moment.Moment}
   */
  get date() {
    return moment(this.data.MonthSummaryCarKarteDetailInfo.TargetMonth + '01');
  }

  /**
   * @return {string}
   */
  get economyUnits() {
    return this.data.ElectricCostScale;
  }
}

module.exports = DrivingRecordMonth;
