const moment = require('moment');
const TripSummaryDay = require('./trip-summary-day');
const TripSummaryTotal = require('./trip-summary-total');

/**
 * @typedef {object} TripSummaryResponse
 * @property {TripSummaryResponseData} PriceSimulatorDetailInfoResponsePersonalData
 */

/**
 * @typedef {object} TripSummaryResponseData
 * @property {string} TargetMonth
 * @property {string} TotalPowerConsumptTotal
 * @property {string} TotalPowerConsumptMoter
 * @property {string} TotalPowerConsumptMinus
 * @property {string} ElectricPrice
 * @property {string} ElectricBill
 * @property {string} ElectricCostScale
 * @property {string} MainRateFlg
 * @property {string} ExistFlg
 * @property {TripSummaryDetailData} PriceSimulatorDetailInfoDateList
 * @property {TripSummaryTotalInfo} PriceSimulatorTotalInfo
 * @property {string} DisplayMonth
 */

/**
 * @typedef {object} TripSummaryDetailData
 * @property {TripSummaryDayDetail[]} PriceSimulatorDetailInfoDate
 */

/**
 * @typedef {object} TripSummaryDayDetail
 * @property {string} TargetDate
 * @property {string} DisplayDate
 * @property {TripSummaryDayDetailList} PriceSimulatorDetailInfoTripList
 */

/**
 * @typedef {object} TripSummaryDayDetailList
 * @property {TripSummaryInfo[]} PriceSimulatorDetailInfoTrip
 */

/**
 * @typedef {object} TripSummaryInfo
 * @property {string} TripId
 * @property {string} PowerConsumptTotal
 * @property {string} PowerConsumptMoter
 * @property {string} PowerConsumptMinus
 * @property {string} TravelDistance
 * @property {string} ElectricMileage
 * @property {string} CO2Reduction
 * @property {string} MapDisplayFlg
 * @property {string} GpsDatetime
 */

/**
 * @typedef {object} TripSummaryTotalInfo
 * @property {string} TotalNumberOfTrips
 * @property {string} TotalPowerConsumptTotal
 * @property {string} TotalPowerConsumptMoter
 * @property {string} TotalPowerConsumptMinus
 * @property {string} TotalTravelDistance
 * @property {string} TotalElectricMileage
 * @property {string} TotalCO2Reductiont
 */

/**
 *
 */
class TripSummaryMonth {
  /**
   *
   * @param {TripSummaryResponse} info
   */
  constructor(info) {
    this.info = info;
    /**
     * @type {TripSummaryTotal}
     */
    this.total = new TripSummaryTotal(this.data.PriceSimulatorTotalInfo);

    /**
     * @type {TripSummaryDay[]}
     */
    this.days = this.dayData.map(day => new TripSummaryDay(day));
  }

  /**
   * @return {TripSummaryResponseData}
   */
  get data() {
    return this.info.PriceSimulatorDetailInfoResponsePersonalData;
  }

  /**
   * @return {TripSummaryDayDetail[]}
   */
  get dayData() {
    return this.data.PriceSimulatorDetailInfoDateList.PriceSimulatorDetailInfoDate;
  }

  /**
   * @return {moment.Moment}
   */
  get date() {
    return moment(this.data.TargetMonth + '01');
  }

  /**
   * e.g. miles/kWh
   * @returns {string}
   */
  get economyUnits() {
    return this.data.ElectricCostScale;
  }

  toString() {
    let output = `Month Trip Summary for ${this.date.format('MMMM YYYY')}`;
    output += `

${this.total}
`;
    this.days.forEach(day => {
      output += `
${day}`;
    });
    return output;
  }

}

module.exports = TripSummaryMonth;
