const CustomerInfo = require('./customer-info');
const Leaf = require('./leaf');

/**
 * @typedef {object} VehicleInfoResponse
 * @property {string} vin
 * @property {string} nickname
 * @property {bool} [charger20066]
 * @property {bool} [telematicsEnabled]
 * @property {string} [custom_sessionid]
 */

/**
 * @typedef {object} VehicleResponse
 * @property {ProfileResponse} profile
 */

/**
 * @typedef {object} ProfileResponse
 * @property {string} vin
 * @property {string} gdcUserId
 * @property {string} gdcPassword
 * @property {string} dcmId
 * @property {string} nickname
 */

/**
 * @typedef {object} CustomerInfoResponse
 * @property {string} UserId
 * @property {string} Language
 * @property {string} Timezone
 * @property {string} RegionCode
 * @property {string} EMailAddress
 * @property {string} Nickname
 * @property {string} Country
 */

/**
 * @typedef {object} LoginResponseJson
 * @property {VehicleInfoResponse[]} vehicleInfo
 * @property {VehicleResponse} vehicle
 * @property {CustomerInfoResponse} CustomerInfo
 */

/**
 *
 */
class LoginResponse {
  /**
   *
   * @param {LoginResponseJson} responseJson
   */
  constructor(responseJson) {
    this.res = responseJson;

    if (!this.res.hasOwnProperty('vehicleInfo')) {
      throw new Error('no vehicle info');
    }
    if (!this.res.vehicleInfo instanceof Array) {
      throw new Error('expected vehicleInfo as array');
    }
    if (!this.res.hasOwnProperty('CustomerInfo')) {
      throw new Error('no customer info');
    }

    /**
     *
     * @type {CustomerInfo}
     */
    this.customerInfo = new CustomerInfo(this.res.CustomerInfo);
    /**
     *
     * @type {Leaf}
     */
    this.leaf = new Leaf(this.res);
    /**
     *
     * @type {string}
     */
    this.sessionId = this.leaf.sessionId;
  }
}

module.exports = LoginResponse;
