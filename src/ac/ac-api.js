const AcSchedule = require('./ac-schedule');
const AcOn = require('./ac-on');
const AcOff = require('./ac-off');
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
  async getSchedule(leaf, customerInfo) {
    this.api.log('get ac scheduled');
    let res = await this.api.request(Config.endPoints.scheduledACRemote, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
    return new AcSchedule(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} dateTime
   * @returns {Promise.<AcSchedule>}
   */
  async setSchedule(leaf, customerInfo, dateTime) {
    this.api.log('set schedule');
    let res = await this.api.request(Config.endPoints.acRemoteNew, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId,
      ExecuteTime: dateTime.format('YYYY-MM-DD HH:mm:ss')
    });
    return new AcSchedule(res);
  }

  /**
   * This works the same as {@link setSchedule}.
   * @deprecated
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {moment.Moment} dateTime
   * @returns {Promise.<AcSchedule>}
   */
  async updateSchedule(leaf, customerInfo, dateTime) {
    this.api.log('update schedule');
    let res = await this.api.request(Config.endPoints.acRemoteUpdate, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId,
      ExecuteTime: dateTime.format('YYYY-MM-DD HH:mm:ss')
    });
    return new AcSchedule(res);
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise}
   */
  cancelSchedule(leaf, customerInfo) {
    this.api.log('cancel schedule');
    return this.api.request(Config.endPoints.acRemoteCancel, {
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
  getRecord(leaf, customerInfo) {
    this.api.log('get ac record');
    return this.api.request(Config.endPoints.acRemoteRecords, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<string>}
   */
  async requestOn(leaf, customerInfo) {
    this.api.log('ac request');
    let res = await this.api.request(Config.endPoints.acRemote, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
    return res.resultKey;
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} resultKey
   * @returns {Promise.<AcOn|null>}
   */
  async requestOnResult(leaf, customerInfo, resultKey) {
    this.api.log('ac request result');
    let res = await this.api.request(Config.endPoints.acRemoteResult, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId,
      resultKey: resultKey
    });
    return res.responseFlag === '1' ? new AcOn(res) : null;
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @returns {Promise.<string>}
   */
  async requestOff(leaf, customerInfo) {
    this.api.log('ac request');
    let res = await this.api.request(Config.endPoints.acRemoteOff, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId
    });
    return res.resultKey;
  }

  /**
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} resultKey
   * @returns {Promise.<AcOff|null>}
   */
  async requestOffResult(leaf, customerInfo, resultKey) {
    this.api.log('ac request result');
    let res = await this.api.request(Config.endPoints.acRemoteOffResult, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      custom_sessionid: leaf.sessionId,
      resultKey: resultKey
    });
    return res.responseFlag === '1' ? new AcOff(res) : null;
  }
}

module.exports = AcApi;
