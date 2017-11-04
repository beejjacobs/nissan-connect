const moment = require('moment');
const Calendar = require('./calendar');

/**
 * @typedef {object} DrivingRecordDetail
 * @property {string} CO2Reduction
 * @property {string} ElectricMileage
 * @property {string} PowerConsumptTotal
 * @property {string} TravelDistance
 * @property {string} TravelTime
 */

/**
 *
 */
class DrivingRecord {
  /**
   * @param {DrivingRecordDetail} detail
   */
  constructor(detail) {
    this.detail = detail;
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
   * @returns {null|string}
   */
  get economyUnits() {
    return null;
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
   * In metres
   * @return {Number}
   */
  get travelDistance() {
    return parseFloat(this.detail.TravelDistance);
  }

  /**
   * In kWh
   * @return {Number}
   */
  get energyUsage() {
    return parseFloat(this.detail.PowerConsumptTotal);
  }
}

module.exports = DrivingRecord;
