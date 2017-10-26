const request = require('request-promise-native');
const crypto = require('crypto');
const Config = require('./config');
const LoginResponse = require('./responses/login-response');
const UpdateResultResponse = require('./responses/update-result-response');
const BatteryStatusLast = require('./responses/battery-status-last');
const DriveAnalysis = require('./responses/drive-analysis');
const DriveAnalysisWeekSummary = require('./responses/drive-analysis-week-summary');
const VehicleInfo = require('./responses/vehicle-info');

class NissanConnectApi {
  /**
   *
   * @param {string} region
   */
  constructor(region) {
    this.region = region;
  }

  /**
   *
   * @returns {Promise.<string>}
   */
  async connect() {
    NissanConnectApi.log('connecting');
    return this.request(Config.endPoints.app, {
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
    return this.request(Config.endPoints.login, {
      UserId: username,
      Password: NissanConnectApi.encryptPassword(password, key)
    })
        .then(res => new LoginResponse(res));
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<string>}
   */
  async requestBatteryStatus(leaf, customerInfo) {
    NissanConnectApi.log('requesting battery status');
    return this.request(Config.endPoints.batteryStatus, {
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
  async requestBatteryStatusResult(leaf, customerInfo, resultKey) {
    NissanConnectApi.log('requesting battery status result');
    return this.request(Config.endPoints.batteryStatusResult, {
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
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<BatteryStatusLast>}
   */
  async getBatteryStatusRecord(leaf, customerInfo) {
    return this.request(Config.endPoints.batteryStatusRecords, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId
    })
        .then(res => new BatteryStatusLast(res));
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<DriveAnalysis>}
   */
  async getDrivingAnalysis(leaf, customerInfo) {
    NissanConnectApi.log('get driving analysis');
    return this.request(Config.endPoints.driveAnalysis, {
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
   * @param {string} date
   * @returns {Promise.<DriveAnalysisWeekSummary>}
   */
  async getDrivingAnalysisDetail(leaf, customerInfo, date) {
    NissanConnectApi.log('get driving analysis detail');
    return this.request(Config.endPoints.driveAnalysisDetail, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TargetDate: date
    })
        .then(res => new DriveAnalysisWeekSummary(res));
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<VehicleInfo>}
   */
  async getVehicleInfo(leaf, customerInfo) {
    NissanConnectApi.log('vehicle info');
    return this.request(Config.endPoints.vehicleInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    })
        .then(res => new VehicleInfo(res));
  }

  /**
   * Returned error code -5256
   * @deprecated
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} username
   * @returns {Promise.<string>}
   */
  async requestCarFinder(leaf, customerInfo, username) {
    NissanConnectApi.log('car finder');
    return this.request(Config.endPoints.carFinder, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId,
      UserId: username
    });
  }

  /**
   * @deprecated
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} resultKey
   * @returns {Promise.<*>}
   */
  async requestCarFinderResult(leaf, customerInfo, resultKey) {
    NissanConnectApi.log('car finder result');
    return this.request(Config.endPoints.carFinderResult, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      resultKey: resultKey,
      custom_sessionid: leaf.sessionId
    })
        .then(res => {
          return res.responseFlag === '1' ? res : null;
        });
  }

  /**
   * Returned status 200, but no lat or lng values
   * @deprecated
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} dateFrom
   * @returns {Promise.<*>}
   */
  async carFinderLatLng(leaf, customerInfo, dateFrom) {
    NissanConnectApi.log('lat lng');
    return this.request(Config.endPoints.carFinderLatLng, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TimeFrom: dateFrom
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
      initial_app_strings: Config.initialAppString,
      RegionCode: this.region
    };
    const options = {
      uri: Config.baseUrl + endPoint,
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
