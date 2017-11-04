/**
 *
 */
class TripSummaryTotal {
  /**
   *
   * @param {TripSummaryTotalInfo} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @return {Number}
   */
  get numberOfTrips() {
    return parseInt(this.info.TotalNumberOfTrips);
  }

  /**
   * In units of {@link TripSummaryMonth#economyUnits}
   * @returns {Number}
   */
  get averageEconomy() {
    return parseFloat(this.info.TotalElectricMileage);
  }

  /**
   * @returns {Energy}
   */
  get accelerationEnergy() {
    return parseFloat(this.info.TotalPowerConsumptMoter);
  }

  /**
   * @returns {Energy}
   */
  get regen() {
    return parseFloat(this.info.TotalPowerConsumptMinus);
  }

  /**
   * In kWh
   * @return {Number}
   */
  get energyUsage() {
    return parseFloat(this.info.TotalPowerConsumptTotal);
  }

  /**
   * In kg
   * @return {number}
   */
  get co2Saving() {
    return parseFloat(this.info.TotalCO2Reduction);
  }

  /**
   * In metres
   * @return {Number}
   */
  get travelDistance() {
    return parseFloat(this.info.TotalTravelDistance);
  }

}

module.exports = TripSummaryTotal;
