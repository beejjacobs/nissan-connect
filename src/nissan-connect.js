const moment = require('moment');

const Logger = require('./logger');
const Api = require('./nissan-connect-api');

/**
 * Wrapper for the {@link NissanConnectApi} to make it more user friendly.
 */
class NissanConnect {
  /**
   *
   * @param {string} username
   * @param {string} password
   * @param {string} [region=NE]
   */
  constructor(username, password, region = NissanConnect.Region.Europe) {
    /**
     * @type {NissanConnectApi}
     */
    this.api = new Api(region);
    this.username = username;
    this.password = password;

    this.logger = new Logger(this.constructor.name);
    /**
     * @type {Leaf|null}
     */
    this.leaf = null;
    /**
     * @type {CustomerInfo|null}
     */
    this.customerInfo = null;
    /**
     * @type {string|null}
     */
    this.sessionId = null;
    /**
     * @type {boolean}
     */
    this.loggedIn = false;
    this.loggingIn = false;
  }

  /**
   * Login and save the necessary information for future requests
   * @returns {Promise.<*>}
   */
  async login() {
    this.loggingIn = true;
    let res = await this.api.login(this.username, this.password);
    this.logger.log('logged in');
    this.leaf = res.leaf;
    this.customerInfo = res.customerInfo;
    this.sessionId = res.sessionId;
    this.loggedIn = true;
    this.loggingIn = false;
  }

  /**
   * Request the latest battery status from the car
   * @returns {Promise.<BatteryStatusResponse>}
   */
  async getBatteryStatus() {
    await this.checkLogin();
    const key = await this.api.battery.requestStatus(this.leaf, this.customerInfo);
    let updateInfo = await this.api.battery.requestStatusResult(this.leaf, this.customerInfo, key);
    while (updateInfo === null) {
      this.logger.log('retrying requestBatteryStatusResult');
      [updateInfo] = await Promise.all([
        this.api.battery.requestStatusResult(this.leaf, this.customerInfo, key),
        NissanConnect.timeout(5000) //wait 5 seconds before continuing
      ]);
    }
    return updateInfo;
  }

  /**
   * Request the last know battery status
   * @returns {Promise.<BatteryStatusLast>}
   */
  async getLastBatteryStatus() {
    await this.checkLogin();
    return this.api.battery.getStatusRecord(this.leaf, this.customerInfo);
  }

  /**
   * @return {Promise}
   */
  async startCharging() {
    await this.checkLogin();
    return this.api.battery.startCharging(this.leaf, this.customerInfo);
  }

  /**
   * @returns {Promise.<AcOn>}
   */
  async acOn() {
    await this.checkLogin();
    const key = await this.api.ac.requestOn(this.leaf, this.customerInfo);
    let updateInfo = await this.api.ac.requestOnResult(this.leaf, this.customerInfo, key);
    while (updateInfo === null) {
      this.logger.log('retrying ac requestResult');
      [updateInfo] = await Promise.all([
        this.api.ac.requestOnResult(this.leaf, this.customerInfo, key),
        NissanConnect.timeout(5000) //wait 5 seconds before continuing
      ]);
    }
    return updateInfo;
  }

  /**
   * @returns {Promise.<AcOff>}
   */
  async acOff() {
    await this.checkLogin();
    const key = await this.api.ac.requestOff(this.leaf, this.customerInfo);
    let updateInfo = await this.api.ac.requestOffResult(this.leaf, this.customerInfo, key);
    while (updateInfo === null) {
      this.logger.log('retrying ac requestResult');
      [updateInfo] = await Promise.all([
        this.api.ac.requestOffResult(this.leaf, this.customerInfo, key),
        NissanConnect.timeout(5000) //wait 5 seconds before continuing
      ]);
    }
    return updateInfo;
  }

  /**
   * @returns {Promise.<AcSchedule>}
   */
  async getAcSchedule() {
    await this.checkLogin();
    return this.api.ac.getSchedule(this.leaf, this.customerInfo);
  }

  /**
   * @param {string|moment.Moment} dateTime
   * @returns {Promise.<AcSchedule>}
   */
  async setAcSchedule(dateTime) {
    await this.checkLogin();
    return this.api.ac.setSchedule(this.leaf, this.customerInfo, moment(dateTime));
  }

  /**
   * @returns {Promise}
   */
  async cancelAcSchedule() {
    await this.checkLogin();
    return this.api.ac.cancelSchedule(this.leaf, this.customerInfo);
  }

  /**
   * @returns {Promise.<DriveAnalysis>}
   */
  async getDrivingAnalysisToday() {
    await this.checkLogin();
    return this.api.drive.getAnalysis(this.leaf, this.customerInfo);
  }

  /**
   *
   * @param {string|moment.Moment} date
   * @returns {Promise.<DriveAnalysisWeekSummary>}
   */
  async getDrivingAnalysisWeek(date) {
    await this.checkLogin();
    return this.api.drive.getAnalysisDetail(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @return {Promise.<DrivingRecordDay>}
   */
  async getDriveRecordsToday() {
    await this.checkLogin();
    return this.api.drive.records.getFor(this.leaf, this.customerInfo, moment());
  }

  /**
   * @param {string|moment.Moment} date
   * @return {Promise.<DrivingRecordDay>}
   */
  async getDriveRecords(date) {
    await this.checkLogin();
    return this.api.drive.records.getFor(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<Calendar>}
   */
  async getDriveRecordDays(month) {
    await this.checkLogin();
    return this.api.drive.records.getAvailableDays(this.leaf, this.customerInfo, moment(month));
  }

  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<DrivingRecordMonth>}
   */
  async getDriveRecordsMonth(month) {
    await this.checkLogin();
    return this.api.drive.records.graphInfoMonth(this.leaf, this.customerInfo, moment(month));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<DrivingRecordYear>}
   */
  async getDriveRecordsYear(year) {
    await this.checkLogin();
    return this.api.drive.records.graphInfoYear(this.leaf, this.customerInfo, moment(year));
  }

  /**
   * @param {string|moment.Moment} date
   * @param {string} note
   * @return {Promise}
   */
  async addDriveRecordNote(date, note) {
    await this.checkLogin();
    return this.api.drive.records.addNote(this.leaf, this.customerInfo, moment(date), note);
  }


  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  async getMonthlyTrips(month) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthTrips(this.leaf, this.customerInfo, moment(month));
  }

  /**
   *
   * @param {string|moment.Moment} month
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async getMonthlyDistanceEconomy(month) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthDistanceEconomy(this.leaf, this.customerInfo, moment(month));
  }

  /**
   *
   * @param {string|moment.Moment} month
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async getMonthlyDistanceTime(month) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthDistanceTime(this.leaf, this.customerInfo, moment(month));
  }

  /**
   *
   * @param {string|moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  async getMonthlyEnergyUsage(month) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthEnergyUsage(this.leaf, this.customerInfo, moment(month));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  async getYearlyTrips(year) {
    await this.checkLogin();
    return this.api.drive.records.graphYearTrips(this.leaf, this.customerInfo, moment(year));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async getYearlyDistanceEconomy(year) {
    await this.checkLogin();
    return this.api.drive.records.graphYearDistanceEconomy(this.leaf, this.customerInfo, moment(year));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async getYearlyDistanceTime(year) {
    await this.checkLogin();
    return this.api.drive.records.graphYearDistanceTime(this.leaf, this.customerInfo, moment(year));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  async getYearlyEnergyUsage(year) {
    await this.checkLogin();
    return this.api.drive.records.graphYearEnergyUsage(this.leaf, this.customerInfo, moment(year));
  }

  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<TripSummaryMonth>}
   */
  async getMonthTripSummary(month) {
    await this.checkLogin();
    return this.api.drive.trip.getMonthTripSummary(this.leaf, this.customerInfo, moment(month));
  }

  /**
   * @returns {Promise.<VehicleInfo>}
   */
  async getVehicleInfo() {
    await this.checkLogin();
    return this.api.getVehicleInfo(this.leaf, this.customerInfo);
  }

  /**
   * Check the login state and call login if necessary
   * @return {Promise}
   */
  async checkLogin() {
    this.logger.log('checkLogin loggedIn = ' + this.loggedIn);
    if (this.loggedIn) {
      return;
    }
    if (this.loggingIn) {
      await NissanConnect.timeout(2000);
      return this.checkLogin();
    }
    await this.login();
  }

  static timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 *
 * @type {{Australia: string, Canada: string, Europe: string, Japan: string, USA: string}}
 */
NissanConnect.Region = {
  Australia: 'NMA',
  Canada: 'NCI',
  Europe: 'NE',
  Japan: 'NML',
  USA: 'NNA'
};

module.exports = NissanConnect;
