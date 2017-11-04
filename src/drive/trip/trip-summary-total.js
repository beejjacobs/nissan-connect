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
    return parseFloat(this.info.TotalElectricMileage) * 1000;
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
    return parseFloat(this.info.TotalCO2Reductiont);
  }

  /**
   * In metres
   * @return {Number}
   */
  get travelDistance() {
    return parseFloat(this.info.TotalTravelDistance);
  }

  toString() {
    return `Trip Summary Total
Number of Trips: ${this.numberOfTrips}
Total Distance: ${this.travelDistance / 1000} km
Total Energy Usage: ${this.accelerationEnergy} kWh
Total Regen: ${this.regen} kWh
Total Net Energy Usage: ${this.energyUsage} kWh
Total Efficiency: ${this.averageEconomy} miles/kWh
Total CO2 Saving: ${this.co2Saving} kg`;
  }

}

module.exports = TripSummaryTotal;
