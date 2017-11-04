const moment = require('moment');
/**
 *
 */
class TripSummary {
  /**
   *
   * @param {TripSummaryInfo} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @return {Number}
   */
  get number() {
    return parseInt(this.info.TripId);
  }

  /**
   * In units of {@link TripSummaryMonth#economyUnits}
   * @returns {Number}
   */
  get averageEconomy() {
    return parseFloat(this.info.ElectricMileage);
  }

  /**
   * @returns {Energy}
   */
  get accelerationEnergy() {
    return parseFloat(this.info.PowerConsumptMoter);
  }

  /**
   * @returns {Energy}
   */
  get regen() {
    return parseFloat(this.info.PowerConsumptMinus);
  }

  /**
   * In kWh
   * @return {Number}
   */
  get energyUsage() {
    return parseFloat(this.info.PowerConsumptTotal);
  }

  /**
   * In kg
   * @return {number}
   */
  get co2Saving() {
    return parseFloat(this.info.CO2Reduction);
  }

  /**
   * In metres
   * @return {Number}
   */
  get travelDistance() {
    return parseFloat(this.info.TravelDistance);
  }

  /**
   * @return {moment.Moment}
   */
  get dateTime() {
    return moment(this.info.GpsDatetime);
  }
}

module.exports = TripSummary;
