const request = require('request-promise-native');
const crypto = require('crypto');

class NissanConnectApi {
  /**
   *
   * @param config
   * @param {string} config.baseUrl
   * @param {string} config.initialAppString
   * @param {object} config.endPoints
   * @param {string} config.endPoints.app
   * @param {string} config.endPoints.login
   * @param {string} config.endPoints.batteryStatus
   * @param {string} config.endPoints.batteryStatusResult
   * @param {string} config.endPoints.batteryRemoteCharging
   * @param {string} config.endPoints.batteryStatusRecords
   * @param {string} config.endPoints.acRemote
   * @param {string} config.endPoints.acRemoteResult
   * @param {string} config.endPoints.acRemoteOff
   * @param {string} config.endPoints.acRemoteOffResult
   * @param {string} config.endPoints.acRemoteNew
   * @param {string} config.endPoints.acRemoteUpdate
   * @param {string} config.endPoints.acRemoteCancel
   * @param {string} config.endPoints.acRemoteRecords
   * @param {string} config.endPoints.scheduledACRemote
   * @param {string} config.endPoints.driveAnalysis
   * @param {string} config.endPoints.priceSimulator
   * @param {string} region
   */
  constructor(config, region) {
    this.baseUrl = config.baseUrl;
    this.initialAppString = config.initialAppString;
    this.endPoints = config.endPoints;
    this.region = region;
  }

  async connect() {
    NissanConnectApi.log('connecting');
    return this.request(this.endPoints.app, {
        lg: 'en-US',
    })
        .then(res => {
          return res.baseprm;
        });
  }

  /**
   *
   * @param username
   * @param password
   * @returns {Promise.<void>}
   */
  async login(username, password) {
    const key = await this.connect();
    NissanConnectApi.log('login');
    return this.request(this.endPoints.login, {
      UserId: username,
      Password: NissanConnectApi.encryptPassword(password, key)
    })
        .then(res => {
          return new Lo
        });
  }

  /**
   * Make a request to the Nissan Connect end point
   * @param {string} endPoint
   * @param {object} data
   * @returns {Promise.<*>}
   */
  async request(endPoint, data) {
    const defaults = {
      form: {
        initial_app_strings: this.initialAppString,
        RegionCode: this.region
      }
    };
    const options = {
      uri: this.baseUrl + endPoint,
      method: 'POST',
      form: {},
      json: true
    };
    Object.assign(options.form, defaults, data);
    return request(options);
  }

  static encryptPassword(password, key) {
    const cipher = crypto.createCipheriv('bf-ecb', new Buffer(key), new Buffer(''));

    return cipher.update(password, 'utf8', 'base64') + cipher.final('base64');
  }

  static log(message) {
    console.log('NissanConnectApi ' + message);
  }
}

module.exports = NissanConnectApi;
