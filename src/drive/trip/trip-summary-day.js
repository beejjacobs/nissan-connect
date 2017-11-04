const moment = require('moment');
const TripSummary = require('./trip-summary');
/**
 *
 */
class TripSummaryDay {
  /**
   *
   * @param {TripSummaryDayDetail} info
   */
  constructor(info) {
    this.info = info;

    /**
     * @type {TripSummary[]}
     */
    this.trips = this.tripData.map(trip => new TripSummary(trip));
  }

  /**
   * @return {TripSummaryInfo[]}
   */
  get tripData() {
     return this.info.PriceSimulatorDetailInfoTripList.PriceSimulatorDetailInfoTrip;
  }

  /**
   * @return {moment.Moment}
   */
  get date() {
    return moment(this.info.TargetDate);
  }
  
}

module.exports = TripSummaryDay;
