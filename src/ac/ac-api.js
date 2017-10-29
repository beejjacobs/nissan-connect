const AcSchedule = require('./ac-schedule');
const Config = require('../config');

/**
 *
 */
class AcApi  {
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
   * @returns {Promise.<AcSchedule>}
   */
  getSchedule(leaf, customerInfo) {
    this.api.log('get ac scheduled');
    return this.api.request(Config.endPoints.scheduledACRemote, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    })
        .then(res => new AcSchedule(res));
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<*>}
   */
  getRecord(leaf, customerInfo) {
    this.api.log('get ac record');
    return this.api.request(Config.endPoints.acRemoteRecords, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
  }
}

module.exports = AcApi;
