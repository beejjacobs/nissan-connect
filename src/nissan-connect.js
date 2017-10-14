const config = require('./config.json');
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
    this.api = new Api(config, region);
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
    return this.api.login(this.username, this.password)
        .then(loginResponse => {
          NissanConnect.log('logged in');
          this.leaf = loginResponse.leaf;
          this.customerInfo = loginResponse.customerInfo;
          this.sessionId = loginResponse.sessionId;
          this.loggedIn = true;
        });
  }

  /**
   * @returns {Promise.<UpdateResultResponse>}
   */
  async getUpdate() {
    if (this.loggedIn) {
      try {
        const key = await this.api.requestUpdate(this.leaf, this.customerInfo);
        let updateInfo = await this.api.requestUpdateResult(this.leaf, this.customerInfo, key);
        while (updateInfo === null) {
          NissanConnect.log('retrying requestUpdateResult');
          [updateInfo] = await Promise.all([
            this.api.requestUpdateResult(this.leaf, this.customerInfo, key),
            NissanConnect.timeout(5000) //wait 5 seconds before continuing
          ]);
        }
        return updateInfo;
      } catch (e) {
        return e;
      }
    } else {
      try {
        await this.login();
      } catch (e) {
        return e;
      }
      return this.getUpdate();
    }
  }

  /**
   * @returns {Promise.<DriveAnalysis>}
   */
  async getDrivingAnalysis() {
    if(this.loggedIn) {
      return this.api.getDrivingAnalysis(this.leaf, this.customerInfo);
    } else {
      try {
        await this.login();
      } catch (e) {
        return e;
      }
      return this.getDrivingAnalysis();
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

NissanConnect.Region = {
  Australia: 'NMA',
  Canada: 'NCI',
  Europe: 'NE',
  Japan: 'NML',
  USA: 'NNA'
};

module.exports = NissanConnect;
