const Config = require('../config');

/**
 *
 */
class CarFinderApi  {
  /**
   *
   * @param {NissanConnectApi} api
   */
  constructor(api) {
    this.api = api;
  }


  /**
   * Returned error code -5256
   * @deprecated
   * @param {Leaf} leaf
   * @param {CustomerInfo} customerInfo
   * @param {string} username
   * @returns {Promise.<string>}
   */
  async request(leaf, customerInfo, username) {
    this.api.log('car finder');
    return this.api.request(Config.endPoints.carFinder, {
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
  async requestResult(leaf, customerInfo, resultKey) {
    this.api.log('car finder result');
    return this.api.request(Config.endPoints.carFinderResult, {
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
  async latLng(leaf, customerInfo, dateFrom) {
    this.api.log('lat lng');
    return this.api.request(Config.endPoints.carFinderLatLng, {
      lg: customerInfo.language,
      DCMID: leaf.dmcId,
      VIN: leaf.vin,
      tz: customerInfo.timezone,
      custom_sessionid: leaf.sessionId,
      TimeFrom: dateFrom
    });
  }
}

module.exports = CarFinderApi;
