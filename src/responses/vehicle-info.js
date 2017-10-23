/**
 *
 */
class VehicleInfo {
  /**
   *
   * @param {VehicleInfoResponse} info
   */
  constructor(info) {
    this.info = info.vehicleInfo;
  }

  /**
   * @returns {string}
   */
  get vin() {
    return this.info.vin;
  }

  /**
   * @returns {string}
   */
  get nickname() {
    return this.info.nickname;
  }

  /**
   * @returns {bool}
   */
  get charger20066() {
    return this.info.charger20066;
  }

  /**
   * @returns {bool}
   */
  get telematicsEnabled() {
    return this.info.telematicsEnabled;
  }
}

module.exports = VehicleInfo;