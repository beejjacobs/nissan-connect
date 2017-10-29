const Api = require('./nissan-connect-api');

/**
 * Nissan Connect class
 */
class NissanConnect {
  /**
   *
   * @param {string} username
   * @param {string} password
   * @param {string} [region=NE]
   */
  constructor(username, password, region = NissanConnect.Region.Europe) {
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
  }

  /**
   * @returns {Promise.<*>}
   */
  async login() {
    this.loggedIn = false;
    try {
      let res = await this.api.login(this.username, this.password);
      NissanConnect.log('logged in');
      this.leaf = res.leaf;
      this.customerInfo = res.customerInfo;
      this.sessionId = res.sessionId;
      this.loggedIn = true;
    } catch (e) {
      return e;
    }
  }

  /**
   * @returns {Promise.<UpdateResultResponse>}
   */
  async getBatteryStatus() {
    try {
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
    } catch (e) {
      return e;
    }
  }

  /**
   * @returns {Promise.<BatteryStatusLast>}
   */
  async getLastBatteryStatus() {
    try {
      await this.checkLogin();
    } catch (e) {
      return e;
    }
    return this.api.battery.getStatusRecord(this.leaf, this.customerInfo);
  }

  async com() {
    try {
      await this.checkLogin();
    } catch (e) {
      return e;
    }
    return this.api.ac.getRecord(this.leaf, this.customerInfo);
  }

  /**
   * @returns {Promise.<DriveAnalysis>}
   */
  async getDrivingAnalysisToday() {
    try {
      await this.checkLogin();
    } catch (e) {
      return e;
    }
    return this.api.drive.getAnalysis(this.leaf, this.customerInfo);
  }

  /**
   *
   * @param {string} date
   * @returns {Promise.<DriveAnalysisWeekSummary>}
   */
  async getDrivingAnalysisWeek(date) {
    try {
      await this.checkLogin();
    } catch (e) {
      return e;
    }
    return this.api.drive.getAnalysisDetail(this.leaf, this.customerInfo, date);
  }


  /**
   * @returns {Promise.<VehicleInfo>}
   */
  async getVehicleInfo() {
    try {
      await this.checkLogin();
    } catch (e) {
      return e;
    }
    return this.api.getVehicleInfo(this.leaf, this.customerInfo);
  }

  async checkLogin() {
    if (this.loggedIn) {
      return;
    }
    try {
      await this.login();
    } catch (e) {
      return e;
    }
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
