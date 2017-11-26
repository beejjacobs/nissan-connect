const moment = require('moment');
/**
 * @typedef {object} CalendarDateList
 * @property {string[]} CalendarDate
 */

/**
 * @typedef {object} CalendarInfo
 * @property {string} CalendarDisplayMonth
 * @property {string} [CalendarTargetMonth]
 * @property {CalendarDateList} CalendarDateList
 */

/**
 * @typedef {object} CalendarResponse
 * @property {CalendarResponse} Calendar
 */

/**
 *
 */
class Calendar {
  /**
   * @param {CalendarResponse} info
   */
  constructor(info) {
    this.info = info;
  }

  /**
   * @returns {moment.Moment}
   */
  get date() {
    if (this.info.Calendar.hasOwnProperty('CalendarTargetMonth')) {
      return moment(this.info.Calendar.CalendarTargetMonth + '01');
    } else {
      return moment(this.info.Calendar.CalendarDisplayMonth + '01');
    }
  }

  /**
   * @returns {string[]}
   */
  get availableDays() {
    return this.info.Calendar.CalendarDateList.CalendarDate;
  }

  /**
   * @returns {moment.Moment[]}
   */
  get availableDates() {
    return this.availableDays.map(day => this.date.date(day));
  }
}

module.exports = Calendar;
