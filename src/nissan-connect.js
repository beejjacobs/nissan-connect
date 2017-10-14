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

      this.api.login(username, password)
          .then(t => {
            NissanConnect.log('logged in');
            NissanConnect.log('Nickname: ' + t.leaf.nickname);
            NissanConnect.log('Email: ' + t.customerInfo.email);
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
