const request = require('request-promise-native');
const crypto = require('crypto');
const Config = require('./config');
const AcApi = require('./ac/ac-api');
const BatteryApi = require('./battery/battery-api');
const CarFinderApi = require('./car-finder/car-finder-api');
const DriveApi = require('./drive/drive-api');
const LoginResponse = require('./responses/login-response');
const VehicleInfo = require('./responses/vehicle-info');

class NissanConnectApi {
  /**
   *
   * @param {string} region
   */
  constructor(region) {
    this.region = region;
    this.ac = new AcApi(this);
    this.battery = new BatteryApi(this);
    this.carFinder = new CarFinderApi(this);
    this.drive = new DriveApi(this);
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
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  async getCountries(leaf, customerInfo) {
    NissanConnectApi.log('countries');
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
    NissanConnectApi.log('region');
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
    NissanConnectApi.log('contact numbers');
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
    NissanConnectApi.log('display date');
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

  log(message) {
    NissanConnectApi.log(message);
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
