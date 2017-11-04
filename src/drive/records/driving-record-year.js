const DrivingRecord = require('./driving-record');

/**
 * @typedef {object} DrivingRecordYearResponse
 * @property {DrivingRecordYearResponseInfo} CarKarteGraphInfoResponseYearPersonalData
 */

/**
 * @typedef {object} DrivingRecordYearResponseInfo
 * @property {string} ElectricCostScale
 * @property {DrivingRecordYearResponseInfoDetail} YearSummaryCarKarteDetailInfo
 */

/**
 * @typedef {DrivingRecordDetail} DrivingRecordYearResponseInfoDetail
 * @property {string} TargetYear
 */

/**
 * @extends DrivingRecord
 */
class DrivingRecordYear extends DrivingRecord {
  /**
   * @param {DrivingRecordYearResponse} info
   */
  constructor(info) {
    super(info.CarKarteGraphInfoResponseYearPersonalData.YearSummaryCarKarteDetailInfo);
    this.info = info;
  }

  /**
   * @return {DrivingRecordYearResponseInfo}
   */
  get data() {
    return this.info.CarKarteGraphInfoResponseYearPersonalData;
  }

  /**
   * @return {string}
   */
  get year() {
    return this.data.YearSummaryCarKarteDetailInfo.TargetYear;
  }

  /**
   * @return {string}
   */
  get economyUnits() {
    return this.data.ElectricCostScale;
  }

}

module.exports = DrivingRecordYear;
