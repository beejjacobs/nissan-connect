/**
 * @typedef {object} GraphDataPoint
 * @property {number} date
 * @property {?number} value
 */

/**
 * @typedef {GraphDataPoint[]} GraphDataPoints
 */

/**
 * @typedef {object} BaseGraphResponse
 * @property {GraphDataPoints} set1
 * @property {GraphDataPoints} set2
 */

/**
 * @typedef {object} DistanceTimeDataPoints
 * @property {GraphDataPoints} cumulativeDistance in km
 * @property {GraphDataPoints} time in hrs
 */

/**
 * @typedef {object} DistanceEconomyDataPoints
 * @property {GraphDataPoints} distance in km
 * @property {GraphDataPoints} economy in miles/kwh
 */

/**
 *
 */
class GraphResponse {
  /**
   * @param {string} res
   * @return {BaseGraphResponse}
   */
  static parse(res) {
    return {
      set1: GraphResponse.match(res, 's1'),
      set2: GraphResponse.match(res, 's2')
    };
  }

  /**
   * @param {BaseGraphResponse} res
   * @return {GraphDataPoints}
   */
  static singleSet(res) {
    return res.set1;
  }

  /**
   * @param {BaseGraphResponse} res
   * @return {DistanceTimeDataPoints}
   */
  static distanceTime(res) {
    return {
      cumulativeDistance: res.set1,
      time: res.set2
    }
  }

  /**
   * @param {BaseGraphResponse} res
   * @return {DistanceEconomyDataPoints}
   */
  static distanceEconomy(res) {
    return {
      distance: res.set1,
      economy: res.set2
    }
  }

  /**
   * @param {string} res
   * @param {string} id
   * @return {GraphDataPoints}
   */
  static match(res, id) {
    let regex = new RegExp(`var ${id} = (\\[(.|\\n)*?];)`);
    let match = res.match(regex)[1].replace(/(],\n).*(];)/,']]');
    /**
     * @type {Array}
     */
    let array;

    try {
      array = JSON.parse(match);
    } catch (e) {
      return [];
    }

    return array.map(val => {
      return {
        date: val[0],
        value: val[1]
      }
    });
  }
}

module.exports = GraphResponse;
