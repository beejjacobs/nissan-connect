const moment = require('moment');

const Logger = require('./logger');
const Api = require('./nissan-connect-api');

const MAX_RETRIES = 20;
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
    let api = this.api.battery;
    return await this._runCommandAndRetryForResult(api, api.requestStatus, api.requestStatusResult);
  }

  /**
   * Request the last know battery status
   * @returns {Promise.<BatteryStatusLast>}
   */
  async getLastBatteryStatus() {
    let api = this.api.battery;
    return this.request(api, api.getStatusRecord);
  }

  /**
   * @return {Promise}
   */
  async startCharging() {
    let api = this.api.battery;
    return this.request(api, api.startCharging);
  }

  /**
   * @returns {Promise.<AcOn>}
   */
  async acOn() {
    let api = this.api.ac;
    return await this._runCommandAndRetryForResult(api, api.requestOn, api.requestOnResult);
  }

  /**
   * @returns {Promise.<AcOff>}
   */
  async acOff() {
    let api = this.api.ac;
    return await this._runCommandAndRetryForResult(api, api.requestOff, api.requestOffResult);
  }

  /**
   * @returns {Promise.<AcSchedule>}
   */
  async getAcSchedule() {
    let api = this.api.ac;
    return this.request(api, api.getSchedule);
  }

  /**
   * @param {string|moment.Moment} dateTime
   * @returns {Promise.<AcSchedule>}
   */
  async setAcSchedule(dateTime) {
    let api = this.api.ac;
    return this.request(api, api.setSchedule, moment(dateTime));
  }

  /**
   * @returns {Promise}
   */
  async cancelAcSchedule() {
    let api = this.api.ac;
    return this.request(api, api.cancelSchedule);
  }

  /**
   * @return {Promise.<AcRecord>}
   */
  async getAcRecord() {
    let api = this.api.ac;
    return this.request(api, api.getRecord);
  }

  /**
   * @returns {Promise.<DriveAnalysis>}
   */
  async getDrivingAnalysisToday() {
    let api = this.api.drive;
    return this.request(api, api.getAnalysis);
  }

  /**
   *
   * @param {string|moment.Moment} date
   * @returns {Promise.<DriveAnalysisWeekSummary>}
   */
  async getDrivingAnalysisWeek(date) {
    let api = this.api.drive;
    return this.request(api, api.getAnalysisDetail, moment(date));
  }

  /**
   * @return {Promise.<DrivingRecordDay>}
   */
  async getDriveRecordsToday() {
    let api = this.api.drive.records;
    return this.request(api, api.getFor, moment());
  }

  /**
   * @param {string|moment.Moment} date
   * @return {Promise.<DrivingRecordDay>}
   */
  async getDriveRecords(date) {
    let api = this.api.drive.records;
    return this.request(api, api.getFor, moment(date));
  }

  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<Calendar>}
   */
  async getDriveRecordDays(month) {
    let api = this.api.drive.records;
    return this.request(api, api.getAvailableDays, moment(month));
  }

  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<DrivingRecordMonth>}
   */
  async getDriveRecordsMonth(month) {
    let api = this.api.drive.records;
    return this.request(api, api.graphInfoMonth, moment(month));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<DrivingRecordYear>}
   */
  async getDriveRecordsYear(year) {
    let api = this.api.drive.records;
    return this.request(api, api.graphInfoYear, moment(year));
  }

  /**
   * @param {string|moment.Moment} date
   * @param {string} note
   * @return {Promise}
   */
  async addDriveRecordNote(date, note) {
    let api = this.api.drive.records;
    return this.request(api, api.addNote, [moment(date), note]);
  }


  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  async getMonthlyTrips(month) {
    let api = this.api.drive.records;
    return this.request(api, api.graphMonthTrips, moment(month));
  }

  /**
   *
   * @param {string|moment.Moment} month
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async getMonthlyDistanceEconomy(month) {
    let api = this.api.drive.records;
    return this.request(api, api.graphMonthDistanceEconomy, moment(month));
  }

  /**
   *
   * @param {string|moment.Moment} month
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async getMonthlyDistanceTime(month) {
    let api = this.api.drive.records;
    return this.request(api, api.graphMonthDistanceTime, moment(month));
  }

  /**
   *
   * @param {string|moment.Moment} month
   * @return {Promise.<GraphDataPoints>}
   */
  async getMonthlyEnergyUsage(month) {
    let api = this.api.drive.records;
    return this.request(api, api.graphMonthEnergyUsage, moment(month));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  async getYearlyTrips(year) {
    let api = this.api.drive.records;
    return this.request(api, api.graphYearTrips, moment(year));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async getYearlyDistanceEconomy(year) {
    let api = this.api.drive.records;
    return this.request(api, api.graphYearDistanceEconomy, moment(year));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async getYearlyDistanceTime(year) {
    let api = this.api.drive.records;
    return this.request(api, api.graphYearDistanceTime, moment(year));
  }

  /**
   * @param {string|moment.Moment} year
   * @return {Promise.<GraphDataPoints>}
   */
  async getYearlyEnergyUsage(year) {
    let api = this.api.drive.records;
    return this.request(api, api.graphYearEnergyUsage, moment(year));
  }

  /**
   * @param {string|moment.Moment} month
   * @return {Promise.<TripSummaryMonth>}
   */
  async getMonthTripSummary(month) {
    let api = this.api.drive.trip;
    return this.request(api, api.getMonthTripSummary, moment(month));
  }

  /**
   * @returns {Promise.<VehicleInfo>}
   */
  async getVehicleInfo() {
    let api = this.api;
    return this.request(api, api.getVehicleInfo);
  }

  /**
   * @param {object} api
   * @param {Function} func
   * @param {[]|*} [args]
   * @return {Promise<*>}
   */
  async request(api, func, args = []) {
    await this.checkLogin();
    let result;
    if (!Array.isArray(args)) {
      args = [args];
    }
    try {
      result = await func.call(api, this.leaf, this.customerInfo, ...args);
    } catch (e) {
      if (e === 401) {
        await this.reLogin();
        return await func.call(api, this.leaf, this.customerInfo, ...args);
      }
      throw e;
    }
    return result;
  }

  /**
   * @param {object} api
   * @param {Function} func1 Command to run
   * @param {Function} func2 Command to get the result. This will be retries ${MAX_RETRIES} times
   * @returns {Promise<*>}
   * @private
   */
  async _runCommandAndRetryForResult(api, func1, func2) {
    await this.checkLogin();
    const key = await this.request(api, func1);
    let updateInfo = await func2.call(api, this.leaf, this.customerInfo, key);
    let counter = 0;
    while (updateInfo === null && counter < MAX_RETRIES) {
      this.logger.log('retrying...');
      counter++;
      [updateInfo] = await Promise.all([
        func2.call(api, this.leaf, this.customerInfo, key),
        NissanConnect.timeout(5000) //wait 5 seconds before continuing
      ]);
    }
    if (updateInfo === null) {
      throw new Error('Server never answered.');
    }
    return updateInfo;
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

  async reLogin() {
    this.logger.log('not authorised, retrying');
    this.loggedIn = false;
    return this.checkLogin();
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
