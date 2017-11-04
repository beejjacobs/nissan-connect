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
 * @typedef {object} DrivingRecordYearResponseInfoDetail
 * @property {string} TargetYear
 * @property {string} TravelDistance
 * @property {string} ElectricMileage
 * @property {string} PowerConsumptTotal
 * @property {string} TravelTime
 * @property {string} CO2Reduction
 */

/**
 *
 */
class DrivingRecordYear {
  /**
   * @param {DrivingRecordYearResponse} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @return {DrivingRecordYearResponseInfoDetail}
   */
  get data() {
    return this.info.CarKarteGraphInfoResponseYearPersonalData.YearSummaryCarKarteDetailInfo;
  }

  /**
   * @return {string}
   */
  get year() {
    return this.data.TargetYear;
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
    return this.info.CarKarteGraphInfoResponseYearPersonalData.ElectricCostScale;
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

module.exports = DrivingRecordYear;
