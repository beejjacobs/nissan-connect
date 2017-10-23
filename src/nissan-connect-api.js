const request = require('request-promise-native');
const crypto = require('crypto');
const LoginResponse = require('./responses/login-response');
const UpdateResultResponse = require('./responses/update-result-response');
const DriveAnalysis = require('./responses/drive-analysis');
const VehicleInfo = require('./responses/vehicle-info');

/**
 * @typedef {object} EndPoints
 * @property {string} acRemote
 * @property {string} acRemoteCancel
 * @property {string} acRemoteNew
 * @property {string} acRemoteOff
 * @property {string} acRemoteOffResulting
 * @property {string} acRemoteRecords
 * @property {string} acRemoteResult
 * @property {string} acRemoteStart
 * @property {string} acRemoteUpdate
 * @property {string} app
 * @property {string} batteryChargingCompletionRecords
 * @property {string} batteryRemoteCharging
 * @property {string} batteryRemoteChargingRecords
 * @property {string} batteryStatus
 * @property {string} batteryStatusRecords
 * @property {string} batteryStatusResult
 * @property {string} carFinder
 * @property {string} carFinderLatLng
 * @property {string} carFinderResult
 * @property {string} carMapDetailCalender
 * @property {string} carMapDetailInfo
 * @property {string} carMapDrivingNote
 * @property {string} carMapGraph
 * @property {string} carMapGraphInfo
 * @property {string} contactNumber
 * @property {string} countrySetting
 * @property {string} dateFormat
 * @property {string} driveAnalysis
 * @property {string} driveAnalysisDetail
 * @property {string} ecoForestGraphInfo
 * @property {string} ecoForestReset
 * @property {string} ecoForestWorld
 * @property {string} login
 * @property {string} missingRecords
 * @property {string} nationalRanking
 * @property {string} nationalRankingGraph
 * @property {string} nationalRankings
 * @property {string} notificationHistory
 * @property {string} pathView
 * @property {string} preferenceNotification
 * @property {string} preferenceNotificationRegister
 * @property {string} priceSimulator
 * @property {string} priceSimulatorElectricPrice
 * @property {string} priceSimulatorMapData
 * @property {string} regionSetting
 * @property {string} routePlanner
 * @property {string} scheduledACRemote
 * @property {string} vehicleInfo
 * @property {string} worldRankingEntryCode
 * @property {string} worldRankingTop100
 * @property {string} worldRankingTopInfo
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
   * @returns {Promise.<DriveAnalysis>}
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
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  async getVehicleInfo(leaf, customerInfo) {
    NissanConnectApi.log('vehicle info');
    return this.request(this.endPoints.vehicleInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    })
        .then(res => new VehicleInfo(res));
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
