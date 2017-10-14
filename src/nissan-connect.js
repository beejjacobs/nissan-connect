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

  async getUpdate() {
    if (this.loggedIn) {
      try {
        return await this.api.requestUpdate(this.leaf, this.customerInfo);
      } catch (e) {
        if (e >= 400) {
          NissanConnect.error('error, retrying...');
          await this.login();
          return this.getUpdate();
        }
      }
    } else {
      await this.login();
      return this.getUpdate();
    }
  }

  static log(message) {
    console.log('[NissanConnect] ' + message);
  }

  static error(message) {
    console.error('[NissanConnect] ' + message);
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
