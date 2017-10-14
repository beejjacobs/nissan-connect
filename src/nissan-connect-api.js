const request = require('request-promise-native');
const crypto = require('crypto');
const LoginResponse = require('./responses/login-response');
const UpdateResultResponse = require('./responses/update-result-response');
const DriveAnalysis = require('./responses/drive-analysis');

/**
 * @typedef {object} EndPoints
 * @property {string} app
 * @property {string} login
 * @property {string} batteryStatus
 * @property {string} batteryStatusResult
 * @property {string} batteryRemoteCharging
 * @property {string} batteryStatusRecords
 * @property {string} acRemote
 * @property {string} acRemoteResult
 * @property {string} acRemoteOff
 * @property {string} acRemoteOffResult
 * @property {string} acRemoteNew
 * @property {string} acRemoteUpdate
 * @property {string} acRemoteCancel
 * @property {string} acRemoteRecords
 * @property {string} scheduledACRemote
 * @property {string} driveAnalysis
 * @property {string} priceSimulator
 */

/**
 * @typedef {object} Config
 * @property {string} baseUrl
 * @property {string} initialAppString
 * @property {EndPoints} endPoints
 */

class NissanConnectApi {
  /**
   *
   * @param {Config} config
   * @param {string} region
   */
  constructor(config, region) {
    this.baseUrl = config.baseUrl;
    this.initialAppString = config.initialAppString;
    this.endPoints = config.endPoints;
    this.region = region;
  }

  /**
   *
   * @returns {Promise.<string>}
   */
  async connect() {
    NissanConnectApi.log('connecting');
    return this.request(this.endPoints.app, {
        lg: 'en-US',
    })
        .then(res => res.baseprm);
  }

  /**
   *
   * @param {string} username
   * @param {string} password
   * @returns {Promise.<LoginResponse>}
   */
  async login(username, password) {
    const key = await this.connect();
    NissanConnectApi.log('logging in');
    return this.request(this.endPoints.login, {
      UserId: username,
      Password: NissanConnectApi.encryptPassword(password, key)
    })
        .then(res => new LoginResponse(res));
  }

  /**
   *
   * @returns {Promise.<string>}
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   */
  async requestUpdate(leaf, customerInfo) {
    NissanConnectApi.log('requesting update');
    return this.request(this.endPoints.batteryStatus, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      UserId: leaf.gdcUserId,
      custom_sessionid: leaf.sessionId
    })
        .then(res => {
          return res.resultKey;
        });
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} resultKey
   * @returns {Promise.<UpdateResultResponse|null>}
   */
  async requestUpdateResult(leaf, customerInfo, resultKey) {
    NissanConnectApi.log('requesting update result');
    return this.request(this.endPoints.batteryStatusResult, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      resultKey: resultKey,
      custom_sessionid: leaf.sessionId
    })
        .then(res => {
          return res.responseFlag === '1' ? new UpdateResultResponse(res) : null;
        });
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  async getDrivingAnalysis(leaf, customerInfo) {
    NissanConnectApi.log('get driving analysis');
    return this.request(this.endPoints.driveAnalysis, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId
    })
        .then(res => new DriveAnalysis(res));
  }

  /**
   * Make a request to the Nissan Connect end point
   * @param {string} endPoint
   * @param {object} data
   * @returns {Promise.<*>}
   */
  async request(endPoint, data) {
    const defaults = {
      initial_app_strings: this.initialAppString,
      RegionCode: this.region
    };
    const options = {
      uri: this.baseUrl + endPoint,
      method: 'POST',
      form: {},
      json: true
    };
    Object.assign(options.form, defaults, data);
    return request(options)
        .then(res => {
          if (res.status !== 200) {
            console.error(res);
            return Promise.reject(res.status);
          }
          return res;
        });
  }

  static encryptPassword(password, key) {
    const cipher = crypto.createCipheriv('bf-ecb', new Buffer(key), new Buffer(''));

    return cipher.update(password, 'utf8', 'base64') + cipher.final('base64');
  }

  static log(message) {
    console.log('[NissanConnectApi] ' + message);
  }
}

module.exports = NissanConnectApi;
