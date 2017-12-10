/**
 * @typedef {object} RemoteAcRecords
 * @property {string} OperationResult
 * @property {string} OperationDateAndTime
 * @property {string} RemoteACOperation
 * @property {string} ACStartStopDateAndTime
 * @property {string} CruisingRangeAcOn
 * @property {string} CruisingRangeAcOff
 * @property {string} ACStartStopURL
 * @property {string} PluginState
 * @property {string} ACDurationBatterySec
 * @property {string} ACDurationPluggedSec
 */

/**
 * @typedef {object} AcRecordJson
 * @property {RemoteAcRecords} RemoteACRecords
 */

/**
 *
 */
class AcRecord {
  /**
   * @param {AcRecordJson} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @return {RemoteAcRecords}
   */
  get data() {
    return this.info.RemoteACRecords;
  }

  /**
   * @typedef {string} OperationResultEnum
   * START
   * START_QUICK
   * START_BATTERY
   */

  /**
   * @return {OperationResultEnum}
   */
  get operationResult() {
    return this.data.OperationResult;
  }

  /**
   * @typedef {string} AcOperationEnum
   * START
   * STOP
   */

  /**
   * @return {AcOperationEnum}
   */
  get acOperation() {
    return this.data.RemoteACOperation;
  }

  /**
   * @return {PluginStateEnum}
   */
  get pluginState() {
    return this.data.PluginState;
  }

  /**
   * @return {boolean}
   */
  get isOn() {
    if (this.acOperation !== 'START') {
      return false;
    }
    if (this.pluginState === 'CONNECTED' || this.pluginState === 'QC_CONNECTED') {
      return this.operationResult === 'START' ||
          this.operationResult === 'START_QUICK' ||
          this.operationResult === 'START_BATTERY';
    }
    if (this.pluginState !== 'NOT_CONNECTED') {
      return false;
    }
    return this.operationResult === 'START' ||
        this.operationResult === 'START_QUICK' ||
        this.operationResult === 'START_BATTERY';
  }

}

module.exports = AcRecord;
