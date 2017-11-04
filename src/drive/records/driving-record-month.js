const moment = require('moment');
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
 * @typedef {object} DrivingRecordMonthResponseInfoDetail
 * @property {string} TargetMonth
 * @property {string} TravelDistance
 * @property {string} ElectricMileage
 * @property {string} PowerConsumptTotal
 * @property {string} TravelTime
 * @property {string} CO2Reduction
 */

/**
 *
 */
class DrivingRecordMonth {
  /**
   * @param {DrivingRecordMonthResponse} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @return {DrivingRecordMonthResponseInfoDetail}
   */
  get data() {
    return this.info.CarKarteGraphInfoResponseMonthPersonalData.MonthSummaryCarKarteDetailInfo;
  }

  /**
   * @return {moment.Moment}
   */
  get date() {
    return moment(this.data.TargetMonth + '01');
  }

  /**
   * in metres
   * @return {string}
   */
  get distance() {
    return this.data.TravelDistance;
  }

  /**
   * In units of {@link economyUnits}
   * @returns {number}
   */
  get averageEconomy() {
    return parseFloat(this.data.ElectricMileage);
  }

  /**
   * @return {string}
   */
  get economyUnits() {
    return this.info.CarKarteGraphInfoResponseMonthPersonalData.ElectricCostScale;
  }

  /**
   * In kg
   * @return {number}
   */
  get co2Saving() {
    return parseFloat(this.data.CO2Reduction);
  }

  /**
   * In hours
   * @return {number}
   */
  get travelTime() {
    return parseFloat(this.data.TravelTime);
  }

  /**
   * In metres
   * @return {Number}
   */
  get travelDistance() {
    return parseFloat(this.data.TravelDistance);
  }

  /**
   * In kWh
   * @return {Number}
   */
  get energyUsage() {
    return parseFloat(this.data.PowerConsumptTotal);
  }

}

module.exports = DrivingRecordMonth;
