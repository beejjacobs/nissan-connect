const AcOff = require('./src/ac/ac-off');
const AcOn = require('./src/ac/ac-on');
const AcRecord = require('./src/ac/ac-record');
const AcSchedule = require('./src/ac/ac-schedule');
const BatteryStatus = require('./src/battery/battery-status');
const BatteryStatusLast = require('./src/battery/battery-status-last');
const BatteryStatusResponse = require('./src/battery/battery-status-response');
const Calendar = require('./src/drive/records/calendar');
const CustomerInfo = require('./src/responses/customer-info');
const DriveAnalysis = require('./src/drive/drive-analysis');
const DriveAnalysisDaySummary = require('./src/drive/drive-analysis-day-summary');
const DriveAnalysisWeekSummary = require('./src/drive/drive-analysis-week-summary');
const DrivingRecord = require('./src/drive/records/driving-record');
const DrivingRecordDay = require('./src/drive/records/driving-record-day');
const DrivingRecordMonth = require('./src/drive/records/driving-record-month');
const DrivingRecordYear = require('./src/drive/records/driving-record-year');
const GraphResponse = require('./src/drive/records/graph-response');
const Leaf = require('./src/responses/leaf');
const LoginResponse = require('./src/responses/login-response');
const NissanConnect = require('./src/nissan-connect');
const TripSummary = require('./src/drive/trip/trip-summary');
const TripSummaryDay = require('./src/drive/trip/trip-summary-day');
const TripSummaryMonth = require('./src/drive/trip/trip-summary-month');
const TripSummaryTotal = require('./src/drive/trip/trip-summary-total');
const VehicleInfo = require('./src/responses/vehicle-info');

module.exports = {
  AcOff,
  AcOn,
  AcRecord,
  AcSchedule,
  BatteryStatus,
  BatteryStatusLast,
  BatteryStatusResponse,
  Calendar,
  CustomerInfo,
  DriveAnalysis,
  DriveAnalysisDaySummary,
  DriveAnalysisWeekSummary,
  DrivingRecord,
  DrivingRecordDay,
  DrivingRecordMonth,
  DrivingRecordYear,
  GraphResponse,
  Leaf,
  LoginResponse,
  NissanConnect,
  TripSummary,
  TripSummaryDay,
  TripSummaryMonth,
  TripSummaryTotal,
  VehicleInfo
};
