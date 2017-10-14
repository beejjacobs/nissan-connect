/**
 *
 */
class Leaf {
  /**
   * @param {LoginResponseJson} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   *
   * @returns {ProfileResponse}
   */
  get profile() {
    return this.info.vehicle.profile;
  }

  /**
   *
   * @returns {VehicleInfoResponse}
   */
  get vehicleInfo() {
    return this.info.vehicleInfo[0];
  }

  /**
   *
   * @returns {string}
   */
  get vin() {
    return this.profile.vin;
  }

  /**
   *
   * @returns {string}
   */
  get dmcId() {
    return this.profile.dcmId;
  }

  /**
   *
   * @returns {string}
   */
  get nickname() {
    return this.profile.nickname;
  }

  /**
   *
   * @returns {string}
   */
  get sessionId() {
    return this.vehicleInfo.custom_sessionid;
  }

  /**
   *
   * @returns {string}
   */
  get gdcUserId() {
    return this.profile.gdcUserId;
  }
}

module.exports = Leaf;
