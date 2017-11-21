const BatteryStatusResponse = require('./battery-status-response');
const BatteryStatusLast = require('./battery-status-last');
const Config = require('../config');

/**
 *
 */
class BatteryApi {
  /**
   *
   * @param {NissanConnectApi} api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<string>}
   */
  async requestStatus(leaf, customerInfo) {
    this.api.log('requesting battery status');
    let res = await this.api.request(Config.endPoints.batteryStatus, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      UserId: leaf.gdcUserId,
      custom_sessionid: leaf.sessionId
    });
    return res.resultKey;
  }

  /**
   *
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} resultKey
   * @returns {Promise.<BatteryStatusResponse|null>}
   */
  async requestStatusResult(leaf, customerInfo, resultKey) {
    this.api.log('requesting battery status result');
    let res = await this.api.request(Config.endPoints.batteryStatusResult, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      resultKey: resultKey,
      custom_sessionid: leaf.sessionId
    });
    return res.responseFlag === '1' ? new BatteryStatusResponse(res) : null;
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<BatteryStatusLast>}
   */
  async getStatusRecord(leaf, customerInfo) {
    this.api.log('battery status record');
    let res = await this.api.request(Config.endPoints.batteryStatusRecords, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId
    });
    return new BatteryStatusLast(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @return {Promise}
   */
  async startCharging(leaf, customerInfo) {
    this.api.log('start charging');
    return this.api.request(Config.endPoints.batteryRemoteCharging, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId
    });
  }

  /**
   * Returned error code 400
   * @deprecated
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  async getChargingCompletion(leaf, customerInfo) {
    this.api.log('battery charging completion');
    return this.api.request(Config.endPoints.batteryChargingCompletionRecords, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId
    });
  }

}

module.exports = BatteryApi;
