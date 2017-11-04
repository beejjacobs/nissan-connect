const moment = require('moment');
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
   * @returns {Promise.<*>}
   */
  async login() {
    this.loggingIn = true;
    let res = await this.api.login(this.username, this.password);
    NissanConnect.log('logged in');
    this.leaf = res.leaf;
    this.customerInfo = res.customerInfo;
    this.sessionId = res.sessionId;
    this.loggedIn = true;
    this.loggingIn = false;
  }

  /**
   * @returns {Promise.<BatteryStatusResponse>}
   */
  async getBatteryStatus() {
    await this.checkLogin();
    const key = await this.api.battery.requestStatus(this.leaf, this.customerInfo);
    let updateInfo = await this.api.battery.requestStatusResult(this.leaf, this.customerInfo, key);
    while (updateInfo === null) {
      NissanConnect.log('retrying requestBatteryStatusResult');
      [updateInfo] = await Promise.all([
        this.api.battery.requestStatusResult(this.leaf, this.customerInfo, key),
        NissanConnect.timeout(5000) //wait 5 seconds before continuing
      ]);
    }
    return updateInfo;
  }

  /**
   * @returns {Promise.<BatteryStatusLast>}
   */
  async getLastBatteryStatus() {
    await this.checkLogin();
    return this.api.battery.getStatusRecord(this.leaf, this.customerInfo);
  }

  /**
   * @returns {Promise.<AcOn>}
   */
  async acOn() {
    await this.checkLogin();
    const key = await this.api.ac.requestOn(this.leaf, this.customerInfo);
    let updateInfo = await this.api.ac.requestOnResult(this.leaf, this.customerInfo, key);
    while (updateInfo === null) {
      NissanConnect.log('retrying ac requestResult');
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
      NissanConnect.log('retrying ac requestResult');
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
   * @param {string} dateTime
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
   * @param {string} date
   * @returns {Promise.<DriveAnalysisWeekSummary>}
   */
  async getDrivingAnalysisWeek(date) {
    await this.checkLogin();
    return this.api.drive.getAnalysisDetail(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @return {Promise.<DrivingRecordMonth>}
   */
  async getDriveRecordsToday() {
    await this.checkLogin();
    return this.api.drive.records.getFor(this.leaf, this.customerInfo, moment());
  }

  /**
   * @param {string} date
   * @return {Promise.<DrivingRecordMonth>}
   */
  async getDriveRecords(date) {
    await this.checkLogin();
    return this.api.drive.records.getFor(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<Calendar>}
   */
  async getDriveRecordDays(date) {
    await this.checkLogin();
    return this.api.drive.records.getAvailableDays(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<DrivingRecordMonth>}
   */
  async getDriveRecordsMonth(date) {
    await this.checkLogin();
    return this.api.drive.records.graphInfoMonth(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<DrivingRecordYear>}
   */
  async getDriveRecordsYear(date) {
    await this.checkLogin();
    return this.api.drive.records.graphInfoYear(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @param {string} note
   * @return {Promise}
   */
  async addDriveRecordNote(date, note) {
    await this.checkLogin();
    return this.api.drive.records.addNote(this.leaf, this.customerInfo, moment(date), note);
  }


  /**
   * @param {string} date
   * @return {Promise.<GraphDataPoints>}
   */
  async getMonthlyTrips(date) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthTrips(this.leaf, this.customerInfo, moment(date));
  }

  /**
   *
   * @param {string} date
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async getMonthlyDistanceEconomy(date) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthDistanceEconomy(this.leaf, this.customerInfo, moment(date));
  }

  /**
   *
   * @param {string} date
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async getMonthlyDistanceTime(date) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthDistanceTime(this.leaf, this.customerInfo, moment(date));
  }

  /**
   *
   * @param {string} date
   * @return {Promise.<GraphDataPoints>}
   */
  async getMonthlyEnergyUsage(date) {
    await this.checkLogin();
    return this.api.drive.records.graphMonthEnergyUsage(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<GraphDataPoints>}
   */
  async getYearlyTrips(date) {
    await this.checkLogin();
    return this.api.drive.records.graphYearTrips(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<DistanceEconomyDataPoints>}
   */
  async getYearlyDistanceEconomy(date) {
    await this.checkLogin();
    return this.api.drive.records.graphYearDistanceEconomy(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<DistanceTimeDataPoints>}
   */
  async getYearlyDistanceTime(date) {
    await this.checkLogin();
    return this.api.drive.records.graphYearDistanceTime(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<GraphDataPoints>}
   */
  async getYearlyEnergyUsage(date) {
    await this.checkLogin();
    return this.api.drive.records.graphYearEnergyUsage(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @param {string} date
   * @return {Promise.<TripSummaryMonth>}
   */
  async getMonthTripSummary(date) {
    await this.checkLogin();
    return this.api.drive.trip.getMonthTripSummary(this.leaf, this.customerInfo, moment(date));
  }

  /**
   * @returns {Promise.<VehicleInfo>}
   */
  async getVehicleInfo() {
    await this.checkLogin();
    return this.api.getVehicleInfo(this.leaf, this.customerInfo);
  }

  async checkLogin() {
    NissanConnect.log('checkLogin loggedIn = ' + this.loggedIn);
    if (this.loggedIn) {
      return;
    }
    if (this.loggingIn) {
      await NissanConnect.timeout(2000);
      return this.checkLogin();
    }
    await this.login();
  }

  static log(message) {
    console.log('[NissanConnect] ' + message);
  }

  static error(message) {
    console.error('[NissanConnect] ' + message);
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
