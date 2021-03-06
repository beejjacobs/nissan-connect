const request = require('request-promise-native');
const crypto = require('crypto');
const Logger = require('./logger');
const Config = require('./config');
const AcApi = require('./ac/ac-api');
const BatteryApi = require('./battery/battery-api');
const CarFinderApi = require('./car-finder/car-finder-api');
const DriveApi = require('./drive/drive-api');
const LoginResponse = require('./responses/login-response');
const VehicleInfo = require('./responses/vehicle-info');

/**
 * Client library for the Nissan Connect API
 */
class NissanConnectApi {
  /**
   *
   * @param {string} region
   */
  constructor(region) {
    this.region = region;
    this.logger = new Logger(this.constructor.name);
    /**
     * @type {AcApi}
     */
    this.ac = new AcApi(this);
    /**
     * @type {BatteryApi}
     */
    this.battery = new BatteryApi(this);
    /**
     * @type {CarFinderApi}
     */
    this.carFinder = new CarFinderApi(this);
    /**
     * @type {DriveApi}
     */
    this.drive = new DriveApi(this);
  }

  /**
   *
   * @returns {Promise.<string>}
   */
  async connect() {
    this.logger.log('connecting');
    let res = await this.request(Config.endPoints.app, {
      lg: 'en-US',
    });
    return res['baseprm'];
  }

  /**
   *
   * @param {string} username
   * @param {string} password
   * @returns {Promise.<LoginResponse>}
   */
  async login(username, password) {
    const key = await this.connect();
    this.logger.log('logging in');
    let res = await this.request(Config.endPoints.login, {
      UserId: username,
      Password: NissanConnectApi.encryptPassword(password, key)
    });
    return new LoginResponse(res);
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<VehicleInfo>}
   */
  async getVehicleInfo(leaf, customerInfo) {
    this.logger.log('vehicle info');
    let res = await this.request(Config.endPoints.vehicleInfo, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
    return new VehicleInfo(res);
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  async getCountries(leaf, customerInfo) {
    this.logger.log('countries');
    return this.request(Config.endPoints.countrySetting, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  async getRegionSettings(leaf, customerInfo) {
    this.logger.log('region');
    return this.request(Config.endPoints.regionSetting, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
  }

  /**
   * Returns 404
   * @deprecated
   * @param leaf
   * @param customerInfo
   * @returns {Promise.<*>}
   */
  async getContactNumbers(leaf, customerInfo) {
    this.logger.log('contact numbers');
    return this.request(Config.endPoints.contactNumber, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  async getDisplayDate(leaf, customerInfo) {
    this.logger.log('display date');
    return this.request(Config.endPoints.dateFormat, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
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
      uri: this.getBaseURL() + endPoint,
      method: 'POST',
      form: {},
      json: true
    };
    Object.assign(options.form, defaults, data);

    let res = await request(options);
    let status = res.status;
    if(status !== 200) {
      console.error(res);
      return Promise.reject(status);
    }
    return res;
  }

  /**
   * Make a request to the Nissan Connect end point
   * @param {string} endPoint
   * @param {object} data
   * @returns {Promise.<*>}
   */
  async requestHtml(endPoint, data) {
    const defaults = {
      initial_app_strings: Config.initialAppString,
      RegionCode: this.region
    };
    const options = {
      uri: this.getBaseURL() + endPoint,
      method: 'POST',
      form: {},
      json: true
    };
    Object.assign(options.form, defaults, data);
    return request(options);
  }

  log(message) {
    this.logger.log(message);
  }

  getBaseURL() {
    return this.region === 'NNA' ? Config.nnaBaseUrl : Config.neBaseUrl;
  }

  static encryptPassword(password, key) {
    const cipher = crypto.createCipheriv('bf-ecb', new Buffer(key), new Buffer(''));

    return cipher.update(password, 'utf8', 'base64') + cipher.final('base64');
  }
}

module.exports = NissanConnectApi;
