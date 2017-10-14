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
    /**
     *
     * @type {Leaf|null}
     */
      this.leaf = null;
    /**
     *
     * @type {CustomerInfo|null}
     */
      this.customerInfo = null;
    /**
     *
     * @type {string|null}
     */
      this.sessionId = null;

      this.api.login(username, password)
          .then(loginResponse => {
            NissanConnect.log('logged in');
            this.leaf = loginResponse.leaf;
            this.customerInfo = loginResponse.customerInfo;
            this.sessionId = loginResponse.sessionId;
            NissanConnect.log('Nickname: ' + loginResponse.leaf.nickname);
            NissanConnect.log('Email: ' + loginResponse.customerInfo.email);
          })
          .catch(e => {
            NissanConnect.error(e);
          });

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
