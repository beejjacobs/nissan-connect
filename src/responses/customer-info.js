/**
 *
 */
class CustomerInfo {
  /**
   *
   * @param {CustomerInfoResponse} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   *
   * @returns {string}
   */
  get userId() {
    return this.info.UserId;
  }

  /**
   *
   * @returns {string}
   */
  get language() {
    return this.info.Language;
  }

  /**
   *
   * @returns {string}
   */
  get timezone() {
    return this.info.Timezone;
  }

  /**
   *
   * @returns {string}
   */
  get region() {
    return this.info.RegionCode;
  }

  /**
   *
   * @returns {string}
   */
  get email() {
    return this.info.EMailAddress;
  }

  /**
   *
   * @returns {string}
   */
  get nickname() {
    return this.info.Nickname;
  }

  /**
   *
   * @returns {string}
   */
  get country() {
    return this.info.Country;
  }

}

module.exports = CustomerInfo;
