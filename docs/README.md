## Classes

<dl>
<dt><a href="#AcApi">AcApi</a></dt>
<dd></dd>
<dt><a href="#AcOff">AcOff</a></dt>
<dd></dd>
<dt><a href="#AcOn">AcOn</a></dt>
<dd></dd>
<dt><a href="#AcSchedule">AcSchedule</a></dt>
<dd></dd>
<dt><a href="#BatteryApi">BatteryApi</a></dt>
<dd></dd>
<dt><a href="#BatteryStatusLast">BatteryStatusLast</a></dt>
<dd></dd>
<dt><a href="#BatteryStatusResponse">BatteryStatusResponse</a></dt>
<dd></dd>
<dt><a href="#BatteryStatus">BatteryStatus</a></dt>
<dd></dd>
<dt><a href="#CarFinderApi">CarFinderApi</a></dt>
<dd></dd>
<dt><a href="#DriveAnalysisDaySummary">DriveAnalysisDaySummary</a></dt>
<dd></dd>
<dt><a href="#DriveAnalysisWeekSummary">DriveAnalysisWeekSummary</a></dt>
<dd></dd>
<dt><a href="#DriveAnalysis">DriveAnalysis</a></dt>
<dd></dd>
<dt><a href="#DriveApi">DriveApi</a></dt>
<dd></dd>
<dt><a href="#Calendar">Calendar</a></dt>
<dd></dd>
<dt><a href="#DrivingRecordDay">DrivingRecordDay</a> ⇐ <code><a href="#DrivingRecord">DrivingRecord</a></code></dt>
<dd></dd>
<dt><a href="#DrivingRecordMonth">DrivingRecordMonth</a> ⇐ <code><a href="#DrivingRecord">DrivingRecord</a></code></dt>
<dd></dd>
<dt><a href="#DrivingRecordYear">DrivingRecordYear</a> ⇐ <code><a href="#DrivingRecord">DrivingRecord</a></code></dt>
<dd></dd>
<dt><a href="#DrivingRecord">DrivingRecord</a></dt>
<dd></dd>
<dt><a href="#GraphResponse">GraphResponse</a></dt>
<dd></dd>
<dt><a href="#RecordApi">RecordApi</a></dt>
<dd></dd>
<dt><a href="#NissanConnectApi">NissanConnectApi</a></dt>
<dd><p>Client library for the Nissan Connect API</p>
</dd>
<dt><a href="#NissanConnect">NissanConnect</a></dt>
<dd><p>Wrapper for the <a href="#NissanConnectApi">NissanConnectApi</a> to make it more user friendly.</p>
</dd>
<dt><a href="#CustomerInfo">CustomerInfo</a></dt>
<dd></dd>
<dt><a href="#Leaf">Leaf</a></dt>
<dd></dd>
<dt><a href="#LoginResponse">LoginResponse</a></dt>
<dd></dd>
<dt><a href="#VehicleInfo">VehicleInfo</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#Config">Config</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AcOnResponse">AcOnResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#OperationResult">OperationResult</a> : <code>string</code></dt>
<dd><p>INVALID
START
START_QUICK
START_BATTERY
FINISH
NG
INTERNAL_ERROR
ELECTRIC_WAVE_ABNOMAL</p>
</dd>
<dt><a href="#HvacStatus">HvacStatus</a> : <code>string</code></dt>
<dd><p>ON
OFF</p>
</dd>
<dt><a href="#AcScheduleJson">AcScheduleJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#HoursMinutesFull">HoursMinutesFull</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BatteryStatusJson">BatteryStatusJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BatteryStatusLastJson">BatteryStatusLastJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BatteryStatusLastResponseJson">BatteryStatusLastResponseJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#HoursMinutes">HoursMinutes</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BatteryStatusResponseJson">BatteryStatusResponseJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#PluginStateEnum">PluginStateEnum</a> : <code>string</code></dt>
<dd><p>NOT_CONNECTED
QC_CONNECTED
CONNECTED</p>
</dd>
<dt><a href="#ChargeStatusEnum">ChargeStatusEnum</a> : <code>string</code></dt>
<dd><p>NOT_CHARGING
NORMAL_CHARGING
RAPIDLY_CHARGING
INVALID</p>
</dd>
<dt><a href="#DateSummary">DateSummary</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Level">Level</a> : <code>Number</code></dt>
<dd><p>1 (below average) - 5 (very good)</p>
</dd>
<dt><a href="#Energy">Energy</a> : <code>Number</code></dt>
<dd><p>in watt hours (Wh)</p>
</dd>
<dt><a href="#DateSummaryList">DateSummaryList</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DriveAnalysisDetailJson">DriveAnalysisDetailJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DriveAnalysisWeekSummaryJson">DriveAnalysisWeekSummaryJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#PersonalData">PersonalData</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Advice">Advice</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DriveAnalysisJson">DriveAnalysisJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CalendarDateList">CalendarDateList</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CalendarInfo">CalendarInfo</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CalendarResponse">CalendarResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DrivingRecordResponseInfoDetail">DrivingRecordResponseInfoDetail</a> : <code><a href="#DrivingRecordDetail">DrivingRecordDetail</a></code></dt>
<dd></dd>
<dt><a href="#DrivingRecordResponseInfo">DrivingRecordResponseInfo</a> : <code><a href="#CalendarResponse">CalendarResponse</a></code></dt>
<dd></dd>
<dt><a href="#DrivingRecordResponse">DrivingRecordResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DrivingRecordMonthResponse">DrivingRecordMonthResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DrivingRecordMonthResponseInfo">DrivingRecordMonthResponseInfo</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DrivingRecordMonthResponseInfoDetail">DrivingRecordMonthResponseInfoDetail</a> : <code><a href="#DrivingRecordDetail">DrivingRecordDetail</a></code></dt>
<dd></dd>
<dt><a href="#DrivingRecordYearResponse">DrivingRecordYearResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DrivingRecordYearResponseInfo">DrivingRecordYearResponseInfo</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DrivingRecordYearResponseInfoDetail">DrivingRecordYearResponseInfoDetail</a> : <code><a href="#DrivingRecordDetail">DrivingRecordDetail</a></code></dt>
<dd></dd>
<dt><a href="#DrivingRecordDetail">DrivingRecordDetail</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#GraphDataPoint">GraphDataPoint</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#GraphDataPoints">GraphDataPoints</a> : <code><a href="#GraphDataPoint">Array.&lt;GraphDataPoint&gt;</a></code></dt>
<dd></dd>
<dt><a href="#BaseGraphResponse">BaseGraphResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DistanceTimeDataPoints">DistanceTimeDataPoints</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DistanceEconomyDataPoints">DistanceEconomyDataPoints</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#VehicleInfoResponse">VehicleInfoResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#VehicleResponse">VehicleResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ProfileResponse">ProfileResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CustomerInfoResponse">CustomerInfoResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#LoginResponseJson">LoginResponseJson</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="AcApi"></a>

## AcApi
**Kind**: global class  

* [AcApi](#AcApi)
    * [new AcApi(api)](#new_AcApi_new)
    * [.getSchedule(leaf, customerInfo)](#AcApi+getSchedule) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
    * [.setSchedule(leaf, customerInfo, dateTime)](#AcApi+setSchedule) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
    * ~~[.updateSchedule(leaf, customerInfo, dateTime)](#AcApi+updateSchedule) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)~~
    * [.cancelSchedule(leaf, customerInfo)](#AcApi+cancelSchedule) ⇒ <code>Promise</code>
    * [.getRecord(leaf, customerInfo)](#AcApi+getRecord) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.requestOn(leaf, customerInfo)](#AcApi+requestOn) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.requestOnResult(leaf, customerInfo, resultKey)](#AcApi+requestOnResult) ⇒ <code>Promise.&lt;(AcOn\|null)&gt;</code>
    * [.requestOff(leaf, customerInfo)](#AcApi+requestOff) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.requestOffResult(leaf, customerInfo, resultKey)](#AcApi+requestOffResult) ⇒ <code>Promise.&lt;(AcOff\|null)&gt;</code>

<a name="new_AcApi_new"></a>

### new AcApi(api)

| Param | Type |
| --- | --- |
| api | [<code>NissanConnectApi</code>](#NissanConnectApi) | 

<a name="AcApi+getSchedule"></a>

### acApi.getSchedule(leaf, customerInfo) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="AcApi+setSchedule"></a>

### acApi.setSchedule(leaf, customerInfo, dateTime) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| dateTime | <code>moment.Moment</code> | 

<a name="AcApi+updateSchedule"></a>

### ~~acApi.updateSchedule(leaf, customerInfo, dateTime) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)~~
***Deprecated***

This works the same as [setSchedule](setSchedule).

**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| dateTime | <code>moment.Moment</code> | 

<a name="AcApi+cancelSchedule"></a>

### acApi.cancelSchedule(leaf, customerInfo) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="AcApi+getRecord"></a>

### acApi.getRecord(leaf, customerInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="AcApi+requestOn"></a>

### acApi.requestOn(leaf, customerInfo) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="AcApi+requestOnResult"></a>

### acApi.requestOnResult(leaf, customerInfo, resultKey) ⇒ <code>Promise.&lt;(AcOn\|null)&gt;</code>
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| resultKey | <code>string</code> | 

<a name="AcApi+requestOff"></a>

### acApi.requestOff(leaf, customerInfo) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="AcApi+requestOffResult"></a>

### acApi.requestOffResult(leaf, customerInfo, resultKey) ⇒ <code>Promise.&lt;(AcOff\|null)&gt;</code>
**Kind**: instance method of [<code>AcApi</code>](#AcApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| resultKey | <code>string</code> | 

<a name="AcOff"></a>

## AcOff
**Kind**: global class  

* [AcOff](#AcOff)
    * [new AcOff(info)](#new_AcOff_new)
    * [.success()](#AcOff+success) ⇒ <code>boolean</code>

<a name="new_AcOff_new"></a>

### new AcOff(info)

| Param | Type |
| --- | --- |
| info | [<code>AcOnResponse</code>](#AcOnResponse) | 

<a name="AcOff+success"></a>

### acOff.success() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AcOff</code>](#AcOff)  
<a name="AcOn"></a>

## AcOn
**Kind**: global class  

* [AcOn](#AcOn)
    * [new AcOn(info)](#new_AcOn_new)
    * [.result](#AcOn+result) ⇒ [<code>OperationResult</code>](#OperationResult)
    * [.success](#AcOn+success) ⇒ <code>boolean</code>
    * [.continueTime](#AcOn+continueTime) ⇒ <code>string</code>
    * [.hvacStatus](#AcOn+hvacStatus) ⇒ [<code>HvacStatus</code>](#HvacStatus)
    * [.time](#AcOn+time) ⇒ <code>string</code>

<a name="new_AcOn_new"></a>

### new AcOn(info)

| Param | Type |
| --- | --- |
| info | [<code>AcOnResponse</code>](#AcOnResponse) | 

<a name="AcOn+result"></a>

### acOn.result ⇒ [<code>OperationResult</code>](#OperationResult)
**Kind**: instance property of [<code>AcOn</code>](#AcOn)  
<a name="AcOn+success"></a>

### acOn.success ⇒ <code>boolean</code>
**Kind**: instance property of [<code>AcOn</code>](#AcOn)  
<a name="AcOn+continueTime"></a>

### acOn.continueTime ⇒ <code>string</code>
**Kind**: instance property of [<code>AcOn</code>](#AcOn)  
<a name="AcOn+hvacStatus"></a>

### acOn.hvacStatus ⇒ [<code>HvacStatus</code>](#HvacStatus)
**Kind**: instance property of [<code>AcOn</code>](#AcOn)  
<a name="AcOn+time"></a>

### acOn.time ⇒ <code>string</code>
**Kind**: instance property of [<code>AcOn</code>](#AcOn)  
<a name="AcSchedule"></a>

## AcSchedule
**Kind**: global class  

* [AcSchedule](#AcSchedule)
    * [new AcSchedule(info)](#new_AcSchedule_new)
    * [.isSet](#AcSchedule+isSet) ⇒ <code>boolean</code>
    * [.lastScheduledTime](#AcSchedule+lastScheduledTime) ⇒ <code>string</code>
    * [.executeTime](#AcSchedule+executeTime) ⇒ <code>string</code>
    * [.targetDate](#AcSchedule+targetDate) ⇒ <code>string</code>

<a name="new_AcSchedule_new"></a>

### new AcSchedule(info)

| Param | Type |
| --- | --- |
| info | [<code>AcScheduleJson</code>](#AcScheduleJson) | 

<a name="AcSchedule+isSet"></a>

### acSchedule.isSet ⇒ <code>boolean</code>
**Kind**: instance property of [<code>AcSchedule</code>](#AcSchedule)  
<a name="AcSchedule+lastScheduledTime"></a>

### acSchedule.lastScheduledTime ⇒ <code>string</code>
**Kind**: instance property of [<code>AcSchedule</code>](#AcSchedule)  
<a name="AcSchedule+executeTime"></a>

### acSchedule.executeTime ⇒ <code>string</code>
**Kind**: instance property of [<code>AcSchedule</code>](#AcSchedule)  
<a name="AcSchedule+targetDate"></a>

### acSchedule.targetDate ⇒ <code>string</code>
**Kind**: instance property of [<code>AcSchedule</code>](#AcSchedule)  
<a name="BatteryApi"></a>

## BatteryApi
**Kind**: global class  

* [BatteryApi](#BatteryApi)
    * [new BatteryApi(api)](#new_BatteryApi_new)
    * [.requestStatus(leaf, customerInfo)](#BatteryApi+requestStatus) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.requestStatusResult(leaf, customerInfo, resultKey)](#BatteryApi+requestStatusResult) ⇒ <code>Promise.&lt;(BatteryStatusResponse\|null)&gt;</code>
    * [.getStatusRecord(leaf, customerInfo)](#BatteryApi+getStatusRecord) ⇒ [<code>Promise.&lt;BatteryStatusLast&gt;</code>](#BatteryStatusLast)
    * ~~[.getChargingCompletion(leaf, customerInfo)](#BatteryApi+getChargingCompletion) ⇒ <code>Promise.&lt;\*&gt;</code>~~

<a name="new_BatteryApi_new"></a>

### new BatteryApi(api)

| Param | Type |
| --- | --- |
| api | [<code>NissanConnectApi</code>](#NissanConnectApi) | 

<a name="BatteryApi+requestStatus"></a>

### batteryApi.requestStatus(leaf, customerInfo) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: instance method of [<code>BatteryApi</code>](#BatteryApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="BatteryApi+requestStatusResult"></a>

### batteryApi.requestStatusResult(leaf, customerInfo, resultKey) ⇒ <code>Promise.&lt;(BatteryStatusResponse\|null)&gt;</code>
**Kind**: instance method of [<code>BatteryApi</code>](#BatteryApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| resultKey | <code>string</code> | 

<a name="BatteryApi+getStatusRecord"></a>

### batteryApi.getStatusRecord(leaf, customerInfo) ⇒ [<code>Promise.&lt;BatteryStatusLast&gt;</code>](#BatteryStatusLast)
**Kind**: instance method of [<code>BatteryApi</code>](#BatteryApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="BatteryApi+getChargingCompletion"></a>

### ~~batteryApi.getChargingCompletion(leaf, customerInfo) ⇒ <code>Promise.&lt;\*&gt;</code>~~
***Deprecated***

Returned error code 400

**Kind**: instance method of [<code>BatteryApi</code>](#BatteryApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="BatteryStatusLast"></a>

## BatteryStatusLast
**Kind**: global class  

* [BatteryStatusLast](#BatteryStatusLast)
    * [new BatteryStatusLast(info)](#new_BatteryStatusLast_new)
    * [.data](#BatteryStatusLast+data) ⇒ [<code>BatteryStatusLastJson</code>](#BatteryStatusLastJson)
    * [.range](#BatteryStatusLast+range) ⇒ <code>number</code>
    * [.rangeWithAc](#BatteryStatusLast+rangeWithAc) ⇒ <code>number</code>
    * [.pluginState](#BatteryStatusLast+pluginState) ⇒ [<code>PluginStateEnum</code>](#PluginStateEnum)
    * [.chargeStatus](#BatteryStatusLast+chargeStatus) ⇒ [<code>ChargeStatusEnum</code>](#ChargeStatusEnum)
    * [.capacity](#BatteryStatusLast+capacity) ⇒ <code>Number</code>
    * [.chargeState](#BatteryStatusLast+chargeState) ⇒ <code>Number</code>
    * [.timeToFull](#BatteryStatusLast+timeToFull) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
    * [.timeToFull3kW](#BatteryStatusLast+timeToFull3kW) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
    * [.timeToFull6kW](#BatteryStatusLast+timeToFull6kW) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)

<a name="new_BatteryStatusLast_new"></a>

### new BatteryStatusLast(info)

| Param | Type |
| --- | --- |
| info | [<code>BatteryStatusLastResponseJson</code>](#BatteryStatusLastResponseJson) | 

<a name="BatteryStatusLast+data"></a>

### batteryStatusLast.data ⇒ [<code>BatteryStatusLastJson</code>](#BatteryStatusLastJson)
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+range"></a>

### batteryStatusLast.range ⇒ <code>number</code>
Range in metres

**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+rangeWithAc"></a>

### batteryStatusLast.rangeWithAc ⇒ <code>number</code>
Range with AC on in metres

**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+pluginState"></a>

### batteryStatusLast.pluginState ⇒ [<code>PluginStateEnum</code>](#PluginStateEnum)
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+chargeStatus"></a>

### batteryStatusLast.chargeStatus ⇒ [<code>ChargeStatusEnum</code>](#ChargeStatusEnum)
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+capacity"></a>

### batteryStatusLast.capacity ⇒ <code>Number</code>
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+chargeState"></a>

### batteryStatusLast.chargeState ⇒ <code>Number</code>
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+timeToFull"></a>

### batteryStatusLast.timeToFull ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+timeToFull3kW"></a>

### batteryStatusLast.timeToFull3kW ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusLast+timeToFull6kW"></a>

### batteryStatusLast.timeToFull6kW ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
**Kind**: instance property of [<code>BatteryStatusLast</code>](#BatteryStatusLast)  
<a name="BatteryStatusResponse"></a>

## BatteryStatusResponse
**Kind**: global class  

* [BatteryStatusResponse](#BatteryStatusResponse)
    * [new BatteryStatusResponse(info)](#new_BatteryStatusResponse_new)
    * [.batteryStatus](#BatteryStatusResponse+batteryStatus) : [<code>BatteryStatus</code>](#BatteryStatus)
    * [.updateTime](#BatteryStatusResponse+updateTime) ⇒ <code>string</code>

<a name="new_BatteryStatusResponse_new"></a>

### new BatteryStatusResponse(info)

| Param | Type |
| --- | --- |
| info | [<code>BatteryStatusResponseJson</code>](#BatteryStatusResponseJson) | 

<a name="BatteryStatusResponse+batteryStatus"></a>

### batteryStatusResponse.batteryStatus : [<code>BatteryStatus</code>](#BatteryStatus)
**Kind**: instance property of [<code>BatteryStatusResponse</code>](#BatteryStatusResponse)  
<a name="BatteryStatusResponse+updateTime"></a>

### batteryStatusResponse.updateTime ⇒ <code>string</code>
**Kind**: instance property of [<code>BatteryStatusResponse</code>](#BatteryStatusResponse)  
<a name="BatteryStatus"></a>

## BatteryStatus
**Kind**: global class  

* [BatteryStatus](#BatteryStatus)
    * [new BatteryStatus(info)](#new_BatteryStatus_new)
    * [.range](#BatteryStatus+range) ⇒ <code>number</code>
    * [.rangeWithAc](#BatteryStatus+rangeWithAc) ⇒ <code>number</code>
    * [.chargeLevel](#BatteryStatus+chargeLevel) ⇒ <code>string</code>
    * [.chargeMode](#BatteryStatus+chargeMode) ⇒ <code>string</code>
    * [.pluginState](#BatteryStatus+pluginState) ⇒ [<code>PluginStateEnum</code>](#PluginStateEnum)
    * [.isCharging](#BatteryStatus+isCharging) ⇒ <code>string</code>
    * [.chargeStatus](#BatteryStatus+chargeStatus) ⇒ [<code>ChargeStatusEnum</code>](#ChargeStatusEnum)
    * [.capacity](#BatteryStatus+capacity) ⇒ <code>Number</code>
    * [.chargeState](#BatteryStatus+chargeState) ⇒ <code>Number</code>
    * [.timeToFull](#BatteryStatus+timeToFull) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
    * [.timeToFull3kW](#BatteryStatus+timeToFull3kW) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
    * [.timeToFull6kW](#BatteryStatus+timeToFull6kW) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)

<a name="new_BatteryStatus_new"></a>

### new BatteryStatus(info)

| Param | Type |
| --- | --- |
| info | [<code>BatteryStatusResponseJson</code>](#BatteryStatusResponseJson) | 

<a name="BatteryStatus+range"></a>

### batteryStatus.range ⇒ <code>number</code>
Range in metres

**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+rangeWithAc"></a>

### batteryStatus.rangeWithAc ⇒ <code>number</code>
Range with AC on in metres

**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+chargeLevel"></a>

### batteryStatus.chargeLevel ⇒ <code>string</code>
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+chargeMode"></a>

### batteryStatus.chargeMode ⇒ <code>string</code>
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+pluginState"></a>

### batteryStatus.pluginState ⇒ [<code>PluginStateEnum</code>](#PluginStateEnum)
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+isCharging"></a>

### batteryStatus.isCharging ⇒ <code>string</code>
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+chargeStatus"></a>

### batteryStatus.chargeStatus ⇒ [<code>ChargeStatusEnum</code>](#ChargeStatusEnum)
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+capacity"></a>

### batteryStatus.capacity ⇒ <code>Number</code>
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+chargeState"></a>

### batteryStatus.chargeState ⇒ <code>Number</code>
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+timeToFull"></a>

### batteryStatus.timeToFull ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+timeToFull3kW"></a>

### batteryStatus.timeToFull3kW ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+timeToFull6kW"></a>

### batteryStatus.timeToFull6kW ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="CarFinderApi"></a>

## CarFinderApi
**Kind**: global class  

* [CarFinderApi](#CarFinderApi)
    * [new CarFinderApi(api)](#new_CarFinderApi_new)
    * ~~[.request(leaf, customerInfo, username)](#CarFinderApi+request) ⇒ <code>Promise.&lt;string&gt;</code>~~
    * ~~[.requestResult(leaf, customerInfo, resultKey)](#CarFinderApi+requestResult) ⇒ <code>Promise.&lt;\*&gt;</code>~~
    * ~~[.latLng(leaf, customerInfo, dateFrom)](#CarFinderApi+latLng) ⇒ <code>Promise.&lt;\*&gt;</code>~~

<a name="new_CarFinderApi_new"></a>

### new CarFinderApi(api)

| Param | Type |
| --- | --- |
| api | [<code>NissanConnectApi</code>](#NissanConnectApi) | 

<a name="CarFinderApi+request"></a>

### ~~carFinderApi.request(leaf, customerInfo, username) ⇒ <code>Promise.&lt;string&gt;</code>~~
***Deprecated***

Returned error code -5256

**Kind**: instance method of [<code>CarFinderApi</code>](#CarFinderApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| username | <code>string</code> | 

<a name="CarFinderApi+requestResult"></a>

### ~~carFinderApi.requestResult(leaf, customerInfo, resultKey) ⇒ <code>Promise.&lt;\*&gt;</code>~~
***Deprecated***

**Kind**: instance method of [<code>CarFinderApi</code>](#CarFinderApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| resultKey | <code>string</code> | 

<a name="CarFinderApi+latLng"></a>

### ~~carFinderApi.latLng(leaf, customerInfo, dateFrom) ⇒ <code>Promise.&lt;\*&gt;</code>~~
***Deprecated***

Returned status 200, but no lat or lng values

**Kind**: instance method of [<code>CarFinderApi</code>](#CarFinderApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| dateFrom | <code>string</code> | 

<a name="DriveAnalysisDaySummary"></a>

## DriveAnalysisDaySummary
**Kind**: global class  

* [DriveAnalysisDaySummary](#DriveAnalysisDaySummary)
    * [new DriveAnalysisDaySummary(info)](#new_DriveAnalysisDaySummary_new)
    * [.targetDate](#DriveAnalysisDaySummary+targetDate) ⇒ <code>string</code>
    * [.hasData](#DriveAnalysisDaySummary+hasData) ⇒ <code>boolean</code>
    * [.averageEconomy](#DriveAnalysisDaySummary+averageEconomy) ⇒ <code>Number</code>
    * [.averageEconomyLevel](#DriveAnalysisDaySummary+averageEconomyLevel) ⇒ [<code>Level</code>](#Level)
    * [.accelerationEnergy](#DriveAnalysisDaySummary+accelerationEnergy) ⇒ [<code>Energy</code>](#Energy)
    * [.accelerationEnergyLevel](#DriveAnalysisDaySummary+accelerationEnergyLevel) ⇒ [<code>Level</code>](#Level)
    * [.regen](#DriveAnalysisDaySummary+regen) ⇒ [<code>Energy</code>](#Energy)
    * [.regenLevel](#DriveAnalysisDaySummary+regenLevel) ⇒ [<code>Level</code>](#Level)
    * [.accessoryUsage](#DriveAnalysisDaySummary+accessoryUsage) ⇒ [<code>Energy</code>](#Energy)
    * [.accessoryUsageLevel](#DriveAnalysisDaySummary+accessoryUsageLevel) ⇒ [<code>Level</code>](#Level)

<a name="new_DriveAnalysisDaySummary_new"></a>

### new DriveAnalysisDaySummary(info)

| Param | Type |
| --- | --- |
| info | [<code>DateSummary</code>](#DateSummary) | 

<a name="DriveAnalysisDaySummary+targetDate"></a>

### driveAnalysisDaySummary.targetDate ⇒ <code>string</code>
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+hasData"></a>

### driveAnalysisDaySummary.hasData ⇒ <code>boolean</code>
Check whether the summary contains data

**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+averageEconomy"></a>

### driveAnalysisDaySummary.averageEconomy ⇒ <code>Number</code>
In units of [economyUnits](#DriveAnalysis+economyUnits)

**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+averageEconomyLevel"></a>

### driveAnalysisDaySummary.averageEconomyLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+accelerationEnergy"></a>

### driveAnalysisDaySummary.accelerationEnergy ⇒ [<code>Energy</code>](#Energy)
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+accelerationEnergyLevel"></a>

### driveAnalysisDaySummary.accelerationEnergyLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+regen"></a>

### driveAnalysisDaySummary.regen ⇒ [<code>Energy</code>](#Energy)
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+regenLevel"></a>

### driveAnalysisDaySummary.regenLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+accessoryUsage"></a>

### driveAnalysisDaySummary.accessoryUsage ⇒ [<code>Energy</code>](#Energy)
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisDaySummary+accessoryUsageLevel"></a>

### driveAnalysisDaySummary.accessoryUsageLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)  
<a name="DriveAnalysisWeekSummary"></a>

## DriveAnalysisWeekSummary
**Kind**: global class  

* [DriveAnalysisWeekSummary](#DriveAnalysisWeekSummary)
    * [new DriveAnalysisWeekSummary(info)](#new_DriveAnalysisWeekSummary_new)
    * [.data](#DriveAnalysisWeekSummary+data) ⇒ [<code>DriveAnalysisDetailJson</code>](#DriveAnalysisDetailJson)
    * [.dateSummaries](#DriveAnalysisWeekSummary+dateSummaries) ⇒ [<code>Array.&lt;DateSummary&gt;</code>](#DateSummary)
    * [.daySummaries](#DriveAnalysisWeekSummary+daySummaries) ⇒ [<code>Array.&lt;DriveAnalysisDaySummary&gt;</code>](#DriveAnalysisDaySummary)
    * [.startDate](#DriveAnalysisWeekSummary+startDate) ⇒ <code>moment.Moment</code>
    * [.endDate](#DriveAnalysisWeekSummary+endDate) ⇒ <code>moment.Moment</code>
    * [.economyUnits](#DriveAnalysisWeekSummary+economyUnits) ⇒ <code>string</code>

<a name="new_DriveAnalysisWeekSummary_new"></a>

### new DriveAnalysisWeekSummary(info)

| Param | Type |
| --- | --- |
| info | [<code>DriveAnalysisWeekSummaryJson</code>](#DriveAnalysisWeekSummaryJson) | 

<a name="DriveAnalysisWeekSummary+data"></a>

### driveAnalysisWeekSummary.data ⇒ [<code>DriveAnalysisDetailJson</code>](#DriveAnalysisDetailJson)
**Kind**: instance property of [<code>DriveAnalysisWeekSummary</code>](#DriveAnalysisWeekSummary)  
<a name="DriveAnalysisWeekSummary+dateSummaries"></a>

### driveAnalysisWeekSummary.dateSummaries ⇒ [<code>Array.&lt;DateSummary&gt;</code>](#DateSummary)
**Kind**: instance property of [<code>DriveAnalysisWeekSummary</code>](#DriveAnalysisWeekSummary)  
<a name="DriveAnalysisWeekSummary+daySummaries"></a>

### driveAnalysisWeekSummary.daySummaries ⇒ [<code>Array.&lt;DriveAnalysisDaySummary&gt;</code>](#DriveAnalysisDaySummary)
First day is Sunday

**Kind**: instance property of [<code>DriveAnalysisWeekSummary</code>](#DriveAnalysisWeekSummary)  
<a name="DriveAnalysisWeekSummary+startDate"></a>

### driveAnalysisWeekSummary.startDate ⇒ <code>moment.Moment</code>
**Kind**: instance property of [<code>DriveAnalysisWeekSummary</code>](#DriveAnalysisWeekSummary)  
<a name="DriveAnalysisWeekSummary+endDate"></a>

### driveAnalysisWeekSummary.endDate ⇒ <code>moment.Moment</code>
**Kind**: instance property of [<code>DriveAnalysisWeekSummary</code>](#DriveAnalysisWeekSummary)  
<a name="DriveAnalysisWeekSummary+economyUnits"></a>

### driveAnalysisWeekSummary.economyUnits ⇒ <code>string</code>
e.g. miles/kWh

**Kind**: instance property of [<code>DriveAnalysisWeekSummary</code>](#DriveAnalysisWeekSummary)  
<a name="DriveAnalysis"></a>

## DriveAnalysis
**Kind**: global class  

* [DriveAnalysis](#DriveAnalysis)
    * [new DriveAnalysis(info)](#new_DriveAnalysis_new)
    * [.summary](#DriveAnalysis+summary) ⇒ [<code>DateSummary</code>](#DateSummary)
    * [.daySummary](#DriveAnalysis+daySummary) ⇒ [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)
    * [.economyUnits](#DriveAnalysis+economyUnits) ⇒ <code>string</code>

<a name="new_DriveAnalysis_new"></a>

### new DriveAnalysis(info)

| Param | Type |
| --- | --- |
| info | [<code>DriveAnalysisJson</code>](#DriveAnalysisJson) | 

<a name="DriveAnalysis+summary"></a>

### driveAnalysis.summary ⇒ [<code>DateSummary</code>](#DateSummary)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+daySummary"></a>

### driveAnalysis.daySummary ⇒ [<code>DriveAnalysisDaySummary</code>](#DriveAnalysisDaySummary)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+economyUnits"></a>

### driveAnalysis.economyUnits ⇒ <code>string</code>
e.g. miles/kWh

**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveApi"></a>

## DriveApi
**Kind**: global class  

* [DriveApi](#DriveApi)
    * [new DriveApi(api)](#new_DriveApi_new)
    * [.getAnalysis(leaf, customerInfo)](#DriveApi+getAnalysis) ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
    * [.getAnalysisDetail(leaf, customerInfo, date)](#DriveApi+getAnalysisDetail) ⇒ [<code>Promise.&lt;DriveAnalysisWeekSummary&gt;</code>](#DriveAnalysisWeekSummary)

<a name="new_DriveApi_new"></a>

### new DriveApi(api)

| Param | Type |
| --- | --- |
| api | [<code>NissanConnectApi</code>](#NissanConnectApi) | 

<a name="DriveApi+getAnalysis"></a>

### driveApi.getAnalysis(leaf, customerInfo) ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
**Kind**: instance method of [<code>DriveApi</code>](#DriveApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="DriveApi+getAnalysisDetail"></a>

### driveApi.getAnalysisDetail(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DriveAnalysisWeekSummary&gt;</code>](#DriveAnalysisWeekSummary)
**Kind**: instance method of [<code>DriveApi</code>](#DriveApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="Calendar"></a>

## Calendar
**Kind**: global class  

* [Calendar](#Calendar)
    * [new Calendar(info)](#new_Calendar_new)
    * [.date](#Calendar+date) ⇒ <code>moment.Moment</code>
    * [.availableDays](#Calendar+availableDays) ⇒ <code>Array.&lt;string&gt;</code>
    * [.availableDates](#Calendar+availableDates) ⇒ <code>Array.&lt;moment.Moment&gt;</code>

<a name="new_Calendar_new"></a>

### new Calendar(info)

| Param | Type |
| --- | --- |
| info | [<code>CalendarResponse</code>](#CalendarResponse) | 

<a name="Calendar+date"></a>

### calendar.date ⇒ <code>moment.Moment</code>
**Kind**: instance property of [<code>Calendar</code>](#Calendar)  
<a name="Calendar+availableDays"></a>

### calendar.availableDays ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: instance property of [<code>Calendar</code>](#Calendar)  
<a name="Calendar+availableDates"></a>

### calendar.availableDates ⇒ <code>Array.&lt;moment.Moment&gt;</code>
**Kind**: instance property of [<code>Calendar</code>](#Calendar)  
<a name="DrivingRecordDay"></a>

## DrivingRecordDay ⇐ [<code>DrivingRecord</code>](#DrivingRecord)
**Kind**: global class  
**Extends**: [<code>DrivingRecord</code>](#DrivingRecord)  

* [DrivingRecordDay](#DrivingRecordDay) ⇐ [<code>DrivingRecord</code>](#DrivingRecord)
    * [new DrivingRecordDay(info)](#new_DrivingRecordDay_new)
    * [.calendar](#DrivingRecordDay+calendar) : [<code>Calendar</code>](#Calendar)
    * [.data](#DrivingRecordDay+data) ⇒ [<code>DrivingRecordResponseInfo</code>](#DrivingRecordResponseInfo)
    * [.date](#DrivingRecordDay+date) ⇒ <code>moment.Moment</code>
    * [.economyUnits](#DrivingRecordDay+economyUnits) ⇒ <code>string</code>
    * [.note](#DrivingRecordDay+note) ⇒ <code>string</code>
    * [.averageEconomy](#DrivingRecord+averageEconomy) ⇒ <code>Number</code>
    * [.co2Saving](#DrivingRecord+co2Saving) ⇒ <code>number</code>
    * [.travelTime](#DrivingRecord+travelTime) ⇒ <code>Number</code>
    * [.travelDistance](#DrivingRecord+travelDistance) ⇒ <code>Number</code>
    * [.energyUsage](#DrivingRecord+energyUsage) ⇒ <code>Number</code>

<a name="new_DrivingRecordDay_new"></a>

### new DrivingRecordDay(info)

| Param | Type |
| --- | --- |
| info | [<code>DrivingRecordResponse</code>](#DrivingRecordResponse) | 

<a name="DrivingRecordDay+calendar"></a>

### drivingRecordDay.calendar : [<code>Calendar</code>](#Calendar)
**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecordDay+data"></a>

### drivingRecordDay.data ⇒ [<code>DrivingRecordResponseInfo</code>](#DrivingRecordResponseInfo)
**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecordDay+date"></a>

### drivingRecordDay.date ⇒ <code>moment.Moment</code>
**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecordDay+economyUnits"></a>

### drivingRecordDay.economyUnits ⇒ <code>string</code>
e.g. miles/kWh

**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
**Overrides**: [<code>economyUnits</code>](#DrivingRecord+economyUnits)  
<a name="DrivingRecordDay+note"></a>

### drivingRecordDay.note ⇒ <code>string</code>
**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecord+averageEconomy"></a>

### drivingRecordDay.averageEconomy ⇒ <code>Number</code>
In units of [economyUnits](economyUnits)

**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecord+co2Saving"></a>

### drivingRecordDay.co2Saving ⇒ <code>number</code>
In kg

**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecord+travelTime"></a>

### drivingRecordDay.travelTime ⇒ <code>Number</code>
In hours

**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecord+travelDistance"></a>

### drivingRecordDay.travelDistance ⇒ <code>Number</code>
In metres

**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecord+energyUsage"></a>

### drivingRecordDay.energyUsage ⇒ <code>Number</code>
In kWh

**Kind**: instance property of [<code>DrivingRecordDay</code>](#DrivingRecordDay)  
<a name="DrivingRecordMonth"></a>

## DrivingRecordMonth ⇐ [<code>DrivingRecord</code>](#DrivingRecord)
**Kind**: global class  
**Extends**: [<code>DrivingRecord</code>](#DrivingRecord)  

* [DrivingRecordMonth](#DrivingRecordMonth) ⇐ [<code>DrivingRecord</code>](#DrivingRecord)
    * [new DrivingRecordMonth(info)](#new_DrivingRecordMonth_new)
    * [.data](#DrivingRecordMonth+data) ⇒ [<code>DrivingRecordMonthResponseInfo</code>](#DrivingRecordMonthResponseInfo)
    * [.date](#DrivingRecordMonth+date) ⇒ <code>moment.Moment</code>
    * [.economyUnits](#DrivingRecordMonth+economyUnits) ⇒ <code>string</code>
    * [.averageEconomy](#DrivingRecord+averageEconomy) ⇒ <code>Number</code>
    * [.co2Saving](#DrivingRecord+co2Saving) ⇒ <code>number</code>
    * [.travelTime](#DrivingRecord+travelTime) ⇒ <code>Number</code>
    * [.travelDistance](#DrivingRecord+travelDistance) ⇒ <code>Number</code>
    * [.energyUsage](#DrivingRecord+energyUsage) ⇒ <code>Number</code>

<a name="new_DrivingRecordMonth_new"></a>

### new DrivingRecordMonth(info)

| Param | Type |
| --- | --- |
| info | [<code>DrivingRecordMonthResponse</code>](#DrivingRecordMonthResponse) | 

<a name="DrivingRecordMonth+data"></a>

### drivingRecordMonth.data ⇒ [<code>DrivingRecordMonthResponseInfo</code>](#DrivingRecordMonthResponseInfo)
**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
<a name="DrivingRecordMonth+date"></a>

### drivingRecordMonth.date ⇒ <code>moment.Moment</code>
**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
<a name="DrivingRecordMonth+economyUnits"></a>

### drivingRecordMonth.economyUnits ⇒ <code>string</code>
**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
**Overrides**: [<code>economyUnits</code>](#DrivingRecord+economyUnits)  
<a name="DrivingRecord+averageEconomy"></a>

### drivingRecordMonth.averageEconomy ⇒ <code>Number</code>
In units of [economyUnits](economyUnits)

**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
<a name="DrivingRecord+co2Saving"></a>

### drivingRecordMonth.co2Saving ⇒ <code>number</code>
In kg

**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
<a name="DrivingRecord+travelTime"></a>

### drivingRecordMonth.travelTime ⇒ <code>Number</code>
In hours

**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
<a name="DrivingRecord+travelDistance"></a>

### drivingRecordMonth.travelDistance ⇒ <code>Number</code>
In metres

**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
<a name="DrivingRecord+energyUsage"></a>

### drivingRecordMonth.energyUsage ⇒ <code>Number</code>
In kWh

**Kind**: instance property of [<code>DrivingRecordMonth</code>](#DrivingRecordMonth)  
<a name="DrivingRecordYear"></a>

## DrivingRecordYear ⇐ [<code>DrivingRecord</code>](#DrivingRecord)
**Kind**: global class  
**Extends**: [<code>DrivingRecord</code>](#DrivingRecord)  

* [DrivingRecordYear](#DrivingRecordYear) ⇐ [<code>DrivingRecord</code>](#DrivingRecord)
    * [new DrivingRecordYear(info)](#new_DrivingRecordYear_new)
    * [.data](#DrivingRecordYear+data) ⇒ [<code>DrivingRecordYearResponseInfo</code>](#DrivingRecordYearResponseInfo)
    * [.year](#DrivingRecordYear+year) ⇒ <code>string</code>
    * [.economyUnits](#DrivingRecordYear+economyUnits) ⇒ <code>string</code>
    * [.averageEconomy](#DrivingRecord+averageEconomy) ⇒ <code>Number</code>
    * [.co2Saving](#DrivingRecord+co2Saving) ⇒ <code>number</code>
    * [.travelTime](#DrivingRecord+travelTime) ⇒ <code>Number</code>
    * [.travelDistance](#DrivingRecord+travelDistance) ⇒ <code>Number</code>
    * [.energyUsage](#DrivingRecord+energyUsage) ⇒ <code>Number</code>

<a name="new_DrivingRecordYear_new"></a>

### new DrivingRecordYear(info)

| Param | Type |
| --- | --- |
| info | [<code>DrivingRecordYearResponse</code>](#DrivingRecordYearResponse) | 

<a name="DrivingRecordYear+data"></a>

### drivingRecordYear.data ⇒ [<code>DrivingRecordYearResponseInfo</code>](#DrivingRecordYearResponseInfo)
**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
<a name="DrivingRecordYear+year"></a>

### drivingRecordYear.year ⇒ <code>string</code>
**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
<a name="DrivingRecordYear+economyUnits"></a>

### drivingRecordYear.economyUnits ⇒ <code>string</code>
**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
**Overrides**: [<code>economyUnits</code>](#DrivingRecord+economyUnits)  
<a name="DrivingRecord+averageEconomy"></a>

### drivingRecordYear.averageEconomy ⇒ <code>Number</code>
In units of [economyUnits](economyUnits)

**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
<a name="DrivingRecord+co2Saving"></a>

### drivingRecordYear.co2Saving ⇒ <code>number</code>
In kg

**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
<a name="DrivingRecord+travelTime"></a>

### drivingRecordYear.travelTime ⇒ <code>Number</code>
In hours

**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
<a name="DrivingRecord+travelDistance"></a>

### drivingRecordYear.travelDistance ⇒ <code>Number</code>
In metres

**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
<a name="DrivingRecord+energyUsage"></a>

### drivingRecordYear.energyUsage ⇒ <code>Number</code>
In kWh

**Kind**: instance property of [<code>DrivingRecordYear</code>](#DrivingRecordYear)  
<a name="DrivingRecord"></a>

## DrivingRecord
**Kind**: global class  

* [DrivingRecord](#DrivingRecord)
    * [new DrivingRecord(detail)](#new_DrivingRecord_new)
    * [.averageEconomy](#DrivingRecord+averageEconomy) ⇒ <code>Number</code>
    * [.economyUnits](#DrivingRecord+economyUnits) ⇒ <code>null</code> \| <code>string</code>
    * [.co2Saving](#DrivingRecord+co2Saving) ⇒ <code>number</code>
    * [.travelTime](#DrivingRecord+travelTime) ⇒ <code>Number</code>
    * [.travelDistance](#DrivingRecord+travelDistance) ⇒ <code>Number</code>
    * [.energyUsage](#DrivingRecord+energyUsage) ⇒ <code>Number</code>

<a name="new_DrivingRecord_new"></a>

### new DrivingRecord(detail)

| Param | Type |
| --- | --- |
| detail | [<code>DrivingRecordDetail</code>](#DrivingRecordDetail) | 

<a name="DrivingRecord+averageEconomy"></a>

### drivingRecord.averageEconomy ⇒ <code>Number</code>
In units of [economyUnits](economyUnits)

**Kind**: instance property of [<code>DrivingRecord</code>](#DrivingRecord)  
<a name="DrivingRecord+economyUnits"></a>

### drivingRecord.economyUnits ⇒ <code>null</code> \| <code>string</code>
e.g. miles/kWh

**Kind**: instance property of [<code>DrivingRecord</code>](#DrivingRecord)  
<a name="DrivingRecord+co2Saving"></a>

### drivingRecord.co2Saving ⇒ <code>number</code>
In kg

**Kind**: instance property of [<code>DrivingRecord</code>](#DrivingRecord)  
<a name="DrivingRecord+travelTime"></a>

### drivingRecord.travelTime ⇒ <code>Number</code>
In hours

**Kind**: instance property of [<code>DrivingRecord</code>](#DrivingRecord)  
<a name="DrivingRecord+travelDistance"></a>

### drivingRecord.travelDistance ⇒ <code>Number</code>
In metres

**Kind**: instance property of [<code>DrivingRecord</code>](#DrivingRecord)  
<a name="DrivingRecord+energyUsage"></a>

### drivingRecord.energyUsage ⇒ <code>Number</code>
In kWh

**Kind**: instance property of [<code>DrivingRecord</code>](#DrivingRecord)  
<a name="GraphResponse"></a>

## GraphResponse
**Kind**: global class  

* [GraphResponse](#GraphResponse)
    * [.parse(res)](#GraphResponse.parse) ⇒ [<code>BaseGraphResponse</code>](#BaseGraphResponse)
    * [.singleSet(res)](#GraphResponse.singleSet) ⇒ [<code>GraphDataPoints</code>](#GraphDataPoints)
    * [.distanceTime(res)](#GraphResponse.distanceTime) ⇒ [<code>DistanceTimeDataPoints</code>](#DistanceTimeDataPoints)
    * [.distanceEconomy(res)](#GraphResponse.distanceEconomy) ⇒ [<code>DistanceEconomyDataPoints</code>](#DistanceEconomyDataPoints)
    * [.match(res, id)](#GraphResponse.match) ⇒ [<code>GraphDataPoints</code>](#GraphDataPoints)

<a name="GraphResponse.parse"></a>

### GraphResponse.parse(res) ⇒ [<code>BaseGraphResponse</code>](#BaseGraphResponse)
**Kind**: static method of [<code>GraphResponse</code>](#GraphResponse)  

| Param | Type |
| --- | --- |
| res | <code>string</code> | 

<a name="GraphResponse.singleSet"></a>

### GraphResponse.singleSet(res) ⇒ [<code>GraphDataPoints</code>](#GraphDataPoints)
**Kind**: static method of [<code>GraphResponse</code>](#GraphResponse)  

| Param | Type |
| --- | --- |
| res | [<code>BaseGraphResponse</code>](#BaseGraphResponse) | 

<a name="GraphResponse.distanceTime"></a>

### GraphResponse.distanceTime(res) ⇒ [<code>DistanceTimeDataPoints</code>](#DistanceTimeDataPoints)
**Kind**: static method of [<code>GraphResponse</code>](#GraphResponse)  

| Param | Type |
| --- | --- |
| res | [<code>BaseGraphResponse</code>](#BaseGraphResponse) | 

<a name="GraphResponse.distanceEconomy"></a>

### GraphResponse.distanceEconomy(res) ⇒ [<code>DistanceEconomyDataPoints</code>](#DistanceEconomyDataPoints)
**Kind**: static method of [<code>GraphResponse</code>](#GraphResponse)  

| Param | Type |
| --- | --- |
| res | [<code>BaseGraphResponse</code>](#BaseGraphResponse) | 

<a name="GraphResponse.match"></a>

### GraphResponse.match(res, id) ⇒ [<code>GraphDataPoints</code>](#GraphDataPoints)
**Kind**: static method of [<code>GraphResponse</code>](#GraphResponse)  

| Param | Type |
| --- | --- |
| res | <code>string</code> | 
| id | <code>string</code> | 

<a name="RecordApi"></a>

## RecordApi
**Kind**: global class  

* [RecordApi](#RecordApi)
    * [new RecordApi(api)](#new_RecordApi_new)
    * [.getFor(leaf, customerInfo, date)](#RecordApi+getFor) ⇒ [<code>Promise.&lt;DrivingRecord&gt;</code>](#DrivingRecord)
    * [.getAvailableDays(leaf, customerInfo, date)](#RecordApi+getAvailableDays) ⇒ [<code>Promise.&lt;Calendar&gt;</code>](#Calendar)
    * [.addNote(leaf, customerInfo, date, note)](#RecordApi+addNote) ⇒ <code>Promise</code>
    * [.graphInfoMonth(leaf, customerInfo, date)](#RecordApi+graphInfoMonth) ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
    * [.graphInfoYear(leaf, customerInfo, date)](#RecordApi+graphInfoYear) ⇒ [<code>Promise.&lt;DrivingRecordYear&gt;</code>](#DrivingRecordYear)
    * [.graphMonthTrips(leaf, customerInfo, date)](#RecordApi+graphMonthTrips) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
    * [.graphMonthDistanceTime(leaf, customerInfo, date)](#RecordApi+graphMonthDistanceTime) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
    * [.graphMonthEnergyUsage(leaf, customerInfo, date)](#RecordApi+graphMonthEnergyUsage) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
    * [.graphMonthDistanceEconomy(leaf, customerInfo, date)](#RecordApi+graphMonthDistanceEconomy) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
    * [.graphMonth(leaf, customerInfo, date, type)](#RecordApi+graphMonth) ⇒ [<code>Promise.&lt;BaseGraphResponse&gt;</code>](#BaseGraphResponse)
    * [.graphYearTrips(leaf, customerInfo, date)](#RecordApi+graphYearTrips) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
    * [.graphYearDistanceTime(leaf, customerInfo, date)](#RecordApi+graphYearDistanceTime) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
    * [.graphYearEnergyUsage(leaf, customerInfo, date)](#RecordApi+graphYearEnergyUsage) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
    * [.graphYearDistanceEconomy(leaf, customerInfo, date)](#RecordApi+graphYearDistanceEconomy) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
    * [.graphYear(leaf, customerInfo, date, type)](#RecordApi+graphYear) ⇒ [<code>Promise.&lt;BaseGraphResponse&gt;</code>](#BaseGraphResponse)

<a name="new_RecordApi_new"></a>

### new RecordApi(api)

| Param | Type |
| --- | --- |
| api | [<code>NissanConnectApi</code>](#NissanConnectApi) | 

<a name="RecordApi+getFor"></a>

### recordApi.getFor(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DrivingRecord&gt;</code>](#DrivingRecord)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+getAvailableDays"></a>

### recordApi.getAvailableDays(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;Calendar&gt;</code>](#Calendar)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+addNote"></a>

### recordApi.addNote(leaf, customerInfo, date, note) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 
| note | <code>string</code> | 

<a name="RecordApi+graphInfoMonth"></a>

### recordApi.graphInfoMonth(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphInfoYear"></a>

### recordApi.graphInfoYear(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DrivingRecordYear&gt;</code>](#DrivingRecordYear)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphMonthTrips"></a>

### recordApi.graphMonthTrips(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphMonthDistanceTime"></a>

### recordApi.graphMonthDistanceTime(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphMonthEnergyUsage"></a>

### recordApi.graphMonthEnergyUsage(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphMonthDistanceEconomy"></a>

### recordApi.graphMonthDistanceEconomy(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphMonth"></a>

### recordApi.graphMonth(leaf, customerInfo, date, type) ⇒ [<code>Promise.&lt;BaseGraphResponse&gt;</code>](#BaseGraphResponse)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 
| type | <code>string</code> | 

<a name="RecordApi+graphYearTrips"></a>

### recordApi.graphYearTrips(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphYearDistanceTime"></a>

### recordApi.graphYearDistanceTime(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
Distance in kmTime in hours

**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphYearEnergyUsage"></a>

### recordApi.graphYearEnergyUsage(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
Energy usage in kwh

**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphYearDistanceEconomy"></a>

### recordApi.graphYearDistanceEconomy(leaf, customerInfo, date) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
Distance in kmEconomy in miles/kwh

**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 

<a name="RecordApi+graphYear"></a>

### recordApi.graphYear(leaf, customerInfo, date, type) ⇒ [<code>Promise.&lt;BaseGraphResponse&gt;</code>](#BaseGraphResponse)
**Kind**: instance method of [<code>RecordApi</code>](#RecordApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| date | <code>moment.Moment</code> | 
| type | <code>string</code> | 

<a name="NissanConnectApi"></a>

## NissanConnectApi
Client library for the Nissan Connect API

**Kind**: global class  

* [NissanConnectApi](#NissanConnectApi)
    * [new NissanConnectApi(region)](#new_NissanConnectApi_new)
    * [.connect()](#NissanConnectApi+connect) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.login(username, password)](#NissanConnectApi+login) ⇒ [<code>Promise.&lt;LoginResponse&gt;</code>](#LoginResponse)
    * [.getVehicleInfo(leaf, customerInfo)](#NissanConnectApi+getVehicleInfo) ⇒ [<code>Promise.&lt;VehicleInfo&gt;</code>](#VehicleInfo)
    * [.getCountries(leaf, customerInfo)](#NissanConnectApi+getCountries) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getRegionSettings(leaf, customerInfo)](#NissanConnectApi+getRegionSettings) ⇒ <code>Promise.&lt;\*&gt;</code>
    * ~~[.getContactNumbers(leaf, customerInfo)](#NissanConnectApi+getContactNumbers) ⇒ <code>Promise.&lt;\*&gt;</code>~~
    * [.getDisplayDate(leaf, customerInfo)](#NissanConnectApi+getDisplayDate) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.request(endPoint, data)](#NissanConnectApi+request) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.requestHtml(endPoint, data)](#NissanConnectApi+requestHtml) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="new_NissanConnectApi_new"></a>

### new NissanConnectApi(region)

| Param | Type |
| --- | --- |
| region | <code>string</code> | 

<a name="NissanConnectApi+connect"></a>

### nissanConnectApi.connect() ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  
<a name="NissanConnectApi+login"></a>

### nissanConnectApi.login(username, password) ⇒ [<code>Promise.&lt;LoginResponse&gt;</code>](#LoginResponse)
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| password | <code>string</code> | 

<a name="NissanConnectApi+getVehicleInfo"></a>

### nissanConnectApi.getVehicleInfo(leaf, customerInfo) ⇒ [<code>Promise.&lt;VehicleInfo&gt;</code>](#VehicleInfo)
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="NissanConnectApi+getCountries"></a>

### nissanConnectApi.getCountries(leaf, customerInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="NissanConnectApi+getRegionSettings"></a>

### nissanConnectApi.getRegionSettings(leaf, customerInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="NissanConnectApi+getContactNumbers"></a>

### ~~nissanConnectApi.getContactNumbers(leaf, customerInfo) ⇒ <code>Promise.&lt;\*&gt;</code>~~
***Deprecated***

Returns 404

**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param |
| --- |
| leaf | 
| customerInfo | 

<a name="NissanConnectApi+getDisplayDate"></a>

### nissanConnectApi.getDisplayDate(leaf, customerInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="NissanConnectApi+request"></a>

### nissanConnectApi.request(endPoint, data) ⇒ <code>Promise.&lt;\*&gt;</code>
Make a request to the Nissan Connect end point

**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| endPoint | <code>string</code> | 
| data | <code>object</code> | 

<a name="NissanConnectApi+requestHtml"></a>

### nissanConnectApi.requestHtml(endPoint, data) ⇒ <code>Promise.&lt;\*&gt;</code>
Make a request to the Nissan Connect end point

**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| endPoint | <code>string</code> | 
| data | <code>object</code> | 

<a name="NissanConnect"></a>

## NissanConnect
Wrapper for the [NissanConnectApi](#NissanConnectApi) to make it more user friendly.

**Kind**: global class  

* [NissanConnect](#NissanConnect)
    * [new NissanConnect(username, password, [region])](#new_NissanConnect_new)
    * _instance_
        * [.leaf](#NissanConnect+leaf) : [<code>Leaf</code>](#Leaf) \| <code>null</code>
        * [.customerInfo](#NissanConnect+customerInfo) : [<code>CustomerInfo</code>](#CustomerInfo) \| <code>null</code>
        * [.sessionId](#NissanConnect+sessionId) : <code>string</code> \| <code>null</code>
        * [.loggedIn](#NissanConnect+loggedIn) : <code>boolean</code>
        * [.login()](#NissanConnect+login) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getBatteryStatus()](#NissanConnect+getBatteryStatus) ⇒ [<code>Promise.&lt;BatteryStatusResponse&gt;</code>](#BatteryStatusResponse)
        * [.getLastBatteryStatus()](#NissanConnect+getLastBatteryStatus) ⇒ [<code>Promise.&lt;BatteryStatusLast&gt;</code>](#BatteryStatusLast)
        * [.acOn()](#NissanConnect+acOn) ⇒ [<code>Promise.&lt;AcOn&gt;</code>](#AcOn)
        * [.acOff()](#NissanConnect+acOff) ⇒ [<code>Promise.&lt;AcOff&gt;</code>](#AcOff)
        * [.getAcSchedule()](#NissanConnect+getAcSchedule) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
        * [.setAcSchedule(dateTime)](#NissanConnect+setAcSchedule) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
        * [.cancelAcSchedule()](#NissanConnect+cancelAcSchedule) ⇒ <code>Promise</code>
        * [.getDrivingAnalysisToday()](#NissanConnect+getDrivingAnalysisToday) ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
        * [.getDrivingAnalysisWeek(date)](#NissanConnect+getDrivingAnalysisWeek) ⇒ [<code>Promise.&lt;DriveAnalysisWeekSummary&gt;</code>](#DriveAnalysisWeekSummary)
        * [.getDriveRecordsToday()](#NissanConnect+getDriveRecordsToday) ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
        * [.getDriveRecords(date)](#NissanConnect+getDriveRecords) ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
        * [.getDriveRecordDays(date)](#NissanConnect+getDriveRecordDays) ⇒ [<code>Promise.&lt;Calendar&gt;</code>](#Calendar)
        * [.getDriveRecordsMonth(date)](#NissanConnect+getDriveRecordsMonth) ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
        * [.getDriveRecordsYear(date)](#NissanConnect+getDriveRecordsYear) ⇒ [<code>Promise.&lt;DrivingRecordYear&gt;</code>](#DrivingRecordYear)
        * [.addDriveRecordNote(date, note)](#NissanConnect+addDriveRecordNote) ⇒ <code>Promise</code>
        * [.getMonthlyTrips(date)](#NissanConnect+getMonthlyTrips) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
        * [.getMonthlyDistanceEconomy(date)](#NissanConnect+getMonthlyDistanceEconomy) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
        * [.getMonthlyDistanceTime(date)](#NissanConnect+getMonthlyDistanceTime) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
        * [.getMonthlyEnergyUsage(date)](#NissanConnect+getMonthlyEnergyUsage) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
        * [.getYearlyTrips(date)](#NissanConnect+getYearlyTrips) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
        * [.getYearlyDistanceEconomy(date)](#NissanConnect+getYearlyDistanceEconomy) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
        * [.getYearlyDistanceTime(date)](#NissanConnect+getYearlyDistanceTime) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
        * [.getYearlyEnergyUsage(date)](#NissanConnect+getYearlyEnergyUsage) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
        * [.getVehicleInfo()](#NissanConnect+getVehicleInfo) ⇒ [<code>Promise.&lt;VehicleInfo&gt;</code>](#VehicleInfo)
    * _static_
        * [.Region](#NissanConnect.Region) : <code>Object</code>

<a name="new_NissanConnect_new"></a>

### new NissanConnect(username, password, [region])

| Param | Type | Default |
| --- | --- | --- |
| username | <code>string</code> |  | 
| password | <code>string</code> |  | 
| [region] | <code>string</code> | <code>&quot;NE&quot;</code> | 

<a name="NissanConnect+leaf"></a>

### nissanConnect.leaf : [<code>Leaf</code>](#Leaf) \| <code>null</code>
**Kind**: instance property of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+customerInfo"></a>

### nissanConnect.customerInfo : [<code>CustomerInfo</code>](#CustomerInfo) \| <code>null</code>
**Kind**: instance property of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+sessionId"></a>

### nissanConnect.sessionId : <code>string</code> \| <code>null</code>
**Kind**: instance property of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+loggedIn"></a>

### nissanConnect.loggedIn : <code>boolean</code>
**Kind**: instance property of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+login"></a>

### nissanConnect.login() ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getBatteryStatus"></a>

### nissanConnect.getBatteryStatus() ⇒ [<code>Promise.&lt;BatteryStatusResponse&gt;</code>](#BatteryStatusResponse)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getLastBatteryStatus"></a>

### nissanConnect.getLastBatteryStatus() ⇒ [<code>Promise.&lt;BatteryStatusLast&gt;</code>](#BatteryStatusLast)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+acOn"></a>

### nissanConnect.acOn() ⇒ [<code>Promise.&lt;AcOn&gt;</code>](#AcOn)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+acOff"></a>

### nissanConnect.acOff() ⇒ [<code>Promise.&lt;AcOff&gt;</code>](#AcOff)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getAcSchedule"></a>

### nissanConnect.getAcSchedule() ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+setAcSchedule"></a>

### nissanConnect.setAcSchedule(dateTime) ⇒ [<code>Promise.&lt;AcSchedule&gt;</code>](#AcSchedule)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| dateTime | <code>string</code> | 

<a name="NissanConnect+cancelAcSchedule"></a>

### nissanConnect.cancelAcSchedule() ⇒ <code>Promise</code>
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getDrivingAnalysisToday"></a>

### nissanConnect.getDrivingAnalysisToday() ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getDrivingAnalysisWeek"></a>

### nissanConnect.getDrivingAnalysisWeek(date) ⇒ [<code>Promise.&lt;DriveAnalysisWeekSummary&gt;</code>](#DriveAnalysisWeekSummary)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getDriveRecordsToday"></a>

### nissanConnect.getDriveRecordsToday() ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getDriveRecords"></a>

### nissanConnect.getDriveRecords(date) ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getDriveRecordDays"></a>

### nissanConnect.getDriveRecordDays(date) ⇒ [<code>Promise.&lt;Calendar&gt;</code>](#Calendar)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getDriveRecordsMonth"></a>

### nissanConnect.getDriveRecordsMonth(date) ⇒ [<code>Promise.&lt;DrivingRecordMonth&gt;</code>](#DrivingRecordMonth)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getDriveRecordsYear"></a>

### nissanConnect.getDriveRecordsYear(date) ⇒ [<code>Promise.&lt;DrivingRecordYear&gt;</code>](#DrivingRecordYear)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+addDriveRecordNote"></a>

### nissanConnect.addDriveRecordNote(date, note) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 
| note | <code>string</code> | 

<a name="NissanConnect+getMonthlyTrips"></a>

### nissanConnect.getMonthlyTrips(date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getMonthlyDistanceEconomy"></a>

### nissanConnect.getMonthlyDistanceEconomy(date) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getMonthlyDistanceTime"></a>

### nissanConnect.getMonthlyDistanceTime(date) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getMonthlyEnergyUsage"></a>

### nissanConnect.getMonthlyEnergyUsage(date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getYearlyTrips"></a>

### nissanConnect.getYearlyTrips(date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getYearlyDistanceEconomy"></a>

### nissanConnect.getYearlyDistanceEconomy(date) ⇒ [<code>Promise.&lt;DistanceEconomyDataPoints&gt;</code>](#DistanceEconomyDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getYearlyDistanceTime"></a>

### nissanConnect.getYearlyDistanceTime(date) ⇒ [<code>Promise.&lt;DistanceTimeDataPoints&gt;</code>](#DistanceTimeDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getYearlyEnergyUsage"></a>

### nissanConnect.getYearlyEnergyUsage(date) ⇒ [<code>Promise.&lt;GraphDataPoints&gt;</code>](#GraphDataPoints)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  

| Param | Type |
| --- | --- |
| date | <code>string</code> | 

<a name="NissanConnect+getVehicleInfo"></a>

### nissanConnect.getVehicleInfo() ⇒ [<code>Promise.&lt;VehicleInfo&gt;</code>](#VehicleInfo)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect.Region"></a>

### NissanConnect.Region : <code>Object</code>
**Kind**: static property of [<code>NissanConnect</code>](#NissanConnect)  
<a name="CustomerInfo"></a>

## CustomerInfo
**Kind**: global class  

* [CustomerInfo](#CustomerInfo)
    * [new CustomerInfo(info)](#new_CustomerInfo_new)
    * [.userId](#CustomerInfo+userId) ⇒ <code>string</code>
    * [.language](#CustomerInfo+language) ⇒ <code>string</code>
    * [.timezone](#CustomerInfo+timezone) ⇒ <code>string</code>
    * [.region](#CustomerInfo+region) ⇒ <code>string</code>
    * [.email](#CustomerInfo+email) ⇒ <code>string</code>
    * [.nickname](#CustomerInfo+nickname) ⇒ <code>string</code>
    * [.country](#CustomerInfo+country) ⇒ <code>string</code>

<a name="new_CustomerInfo_new"></a>

### new CustomerInfo(info)

| Param | Type |
| --- | --- |
| info | [<code>CustomerInfoResponse</code>](#CustomerInfoResponse) | 

<a name="CustomerInfo+userId"></a>

### customerInfo.userId ⇒ <code>string</code>
**Kind**: instance property of [<code>CustomerInfo</code>](#CustomerInfo)  
<a name="CustomerInfo+language"></a>

### customerInfo.language ⇒ <code>string</code>
**Kind**: instance property of [<code>CustomerInfo</code>](#CustomerInfo)  
<a name="CustomerInfo+timezone"></a>

### customerInfo.timezone ⇒ <code>string</code>
**Kind**: instance property of [<code>CustomerInfo</code>](#CustomerInfo)  
<a name="CustomerInfo+region"></a>

### customerInfo.region ⇒ <code>string</code>
**Kind**: instance property of [<code>CustomerInfo</code>](#CustomerInfo)  
<a name="CustomerInfo+email"></a>

### customerInfo.email ⇒ <code>string</code>
**Kind**: instance property of [<code>CustomerInfo</code>](#CustomerInfo)  
<a name="CustomerInfo+nickname"></a>

### customerInfo.nickname ⇒ <code>string</code>
**Kind**: instance property of [<code>CustomerInfo</code>](#CustomerInfo)  
<a name="CustomerInfo+country"></a>

### customerInfo.country ⇒ <code>string</code>
**Kind**: instance property of [<code>CustomerInfo</code>](#CustomerInfo)  
<a name="Leaf"></a>

## Leaf
**Kind**: global class  

* [Leaf](#Leaf)
    * [new Leaf(info)](#new_Leaf_new)
    * [.profile](#Leaf+profile) ⇒ [<code>ProfileResponse</code>](#ProfileResponse)
    * [.vehicleInfo](#Leaf+vehicleInfo) ⇒ [<code>VehicleInfoResponse</code>](#VehicleInfoResponse)
    * [.vin](#Leaf+vin) ⇒ <code>string</code>
    * [.dmcId](#Leaf+dmcId) ⇒ <code>string</code>
    * [.nickname](#Leaf+nickname) ⇒ <code>string</code>
    * [.sessionId](#Leaf+sessionId) ⇒ <code>string</code>
    * [.gdcUserId](#Leaf+gdcUserId) ⇒ <code>string</code>

<a name="new_Leaf_new"></a>

### new Leaf(info)

| Param | Type |
| --- | --- |
| info | [<code>LoginResponseJson</code>](#LoginResponseJson) | 

<a name="Leaf+profile"></a>

### leaf.profile ⇒ [<code>ProfileResponse</code>](#ProfileResponse)
**Kind**: instance property of [<code>Leaf</code>](#Leaf)  
<a name="Leaf+vehicleInfo"></a>

### leaf.vehicleInfo ⇒ [<code>VehicleInfoResponse</code>](#VehicleInfoResponse)
**Kind**: instance property of [<code>Leaf</code>](#Leaf)  
<a name="Leaf+vin"></a>

### leaf.vin ⇒ <code>string</code>
**Kind**: instance property of [<code>Leaf</code>](#Leaf)  
<a name="Leaf+dmcId"></a>

### leaf.dmcId ⇒ <code>string</code>
**Kind**: instance property of [<code>Leaf</code>](#Leaf)  
<a name="Leaf+nickname"></a>

### leaf.nickname ⇒ <code>string</code>
**Kind**: instance property of [<code>Leaf</code>](#Leaf)  
<a name="Leaf+sessionId"></a>

### leaf.sessionId ⇒ <code>string</code>
**Kind**: instance property of [<code>Leaf</code>](#Leaf)  
<a name="Leaf+gdcUserId"></a>

### leaf.gdcUserId ⇒ <code>string</code>
**Kind**: instance property of [<code>Leaf</code>](#Leaf)  
<a name="LoginResponse"></a>

## LoginResponse
**Kind**: global class  

* [LoginResponse](#LoginResponse)
    * [new LoginResponse(responseJson)](#new_LoginResponse_new)
    * [.customerInfo](#LoginResponse+customerInfo) : [<code>CustomerInfo</code>](#CustomerInfo)
    * [.leaf](#LoginResponse+leaf) : [<code>Leaf</code>](#Leaf)
    * [.sessionId](#LoginResponse+sessionId) : <code>string</code>

<a name="new_LoginResponse_new"></a>

### new LoginResponse(responseJson)

| Param | Type |
| --- | --- |
| responseJson | [<code>LoginResponseJson</code>](#LoginResponseJson) | 

<a name="LoginResponse+customerInfo"></a>

### loginResponse.customerInfo : [<code>CustomerInfo</code>](#CustomerInfo)
**Kind**: instance property of [<code>LoginResponse</code>](#LoginResponse)  
<a name="LoginResponse+leaf"></a>

### loginResponse.leaf : [<code>Leaf</code>](#Leaf)
**Kind**: instance property of [<code>LoginResponse</code>](#LoginResponse)  
<a name="LoginResponse+sessionId"></a>

### loginResponse.sessionId : <code>string</code>
**Kind**: instance property of [<code>LoginResponse</code>](#LoginResponse)  
<a name="VehicleInfo"></a>

## VehicleInfo
**Kind**: global class  

* [VehicleInfo](#VehicleInfo)
    * [new VehicleInfo(info)](#new_VehicleInfo_new)
    * [.vin](#VehicleInfo+vin) ⇒ <code>string</code>
    * [.nickname](#VehicleInfo+nickname) ⇒ <code>string</code>
    * [.charger20066](#VehicleInfo+charger20066) ⇒ <code>bool</code>
    * [.telematicsEnabled](#VehicleInfo+telematicsEnabled) ⇒ <code>bool</code>

<a name="new_VehicleInfo_new"></a>

### new VehicleInfo(info)

| Param | Type |
| --- | --- |
| info | [<code>VehicleInfoResponse</code>](#VehicleInfoResponse) | 

<a name="VehicleInfo+vin"></a>

### vehicleInfo.vin ⇒ <code>string</code>
**Kind**: instance property of [<code>VehicleInfo</code>](#VehicleInfo)  
<a name="VehicleInfo+nickname"></a>

### vehicleInfo.nickname ⇒ <code>string</code>
**Kind**: instance property of [<code>VehicleInfo</code>](#VehicleInfo)  
<a name="VehicleInfo+charger20066"></a>

### vehicleInfo.charger20066 ⇒ <code>bool</code>
**Kind**: instance property of [<code>VehicleInfo</code>](#VehicleInfo)  
<a name="VehicleInfo+telematicsEnabled"></a>

### vehicleInfo.telematicsEnabled ⇒ <code>bool</code>
**Kind**: instance property of [<code>VehicleInfo</code>](#VehicleInfo)  
<a name="Config"></a>

## Config
**Kind**: global constant  
<a name="AcOnResponse"></a>

## AcOnResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| operationResult | <code>string</code> | 
| acContinueTime | <code>string</code> | 
| cruisingRangeAcOn | <code>string</code> | 
| cruisingRangeAcOff | <code>string</code> | 
| timeStamp | <code>string</code> | 
| hvacStatus | <code>string</code> | 

<a name="OperationResult"></a>

## OperationResult : <code>string</code>
INVALIDSTARTSTART_QUICKSTART_BATTERYFINISHNGINTERNAL_ERRORELECTRIC_WAVE_ABNOMAL

**Kind**: global typedef  
<a name="HvacStatus"></a>

## HvacStatus : <code>string</code>
ONOFF

**Kind**: global typedef  
<a name="AcScheduleJson"></a>

## AcScheduleJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| LastScheduledTime | <code>string</code> | 
| ExecuteTime | <code>string</code> | 
| DisplayExecuteTime | <code>string</code> | 
| TargetDate | <code>string</code> | 

<a name="HoursMinutesFull"></a>

## HoursMinutesFull : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| HourRequiredToFull | <code>string</code> | 
| MinutesRequiredToFull | <code>string</code> | 

<a name="BatteryStatusJson"></a>

## BatteryStatusJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| BatteryChargingStatus | <code>string</code> | 
| BatteryCapacity | <code>string</code> | 
| BatteryRemainingAmount | <code>string</code> | 

<a name="BatteryStatusLastJson"></a>

## BatteryStatusLastJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| TargetDate | <code>string</code> | 
| CruisingRangeAcOn | <code>string</code> | 
| CruisingRangeAcOff | <code>string</code> | 
| PluginState | <code>string</code> | 
| BatteryStatus | [<code>BatteryStatusJson</code>](#BatteryStatusJson) | 
| TimeRequiredToFull | [<code>HoursMinutesFull</code>](#HoursMinutesFull) | 
| TimeRequiredToFull200 | [<code>HoursMinutesFull</code>](#HoursMinutesFull) | 
| TimeRequiredToFull200_6kW | [<code>HoursMinutesFull</code>](#HoursMinutesFull) | 

<a name="BatteryStatusLastResponseJson"></a>

## BatteryStatusLastResponseJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| BatteryStatusRecords | [<code>BatteryStatusLastJson</code>](#BatteryStatusLastJson) | 

<a name="HoursMinutes"></a>

## HoursMinutes : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| hours | <code>string</code> | 
| minutes | <code>string</code> | 

<a name="BatteryStatusResponseJson"></a>

## BatteryStatusResponseJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| timeStamp | <code>string</code> | 
| cruisingRangeAcOn | <code>string</code> | 
| cruisingRangeAcOff | <code>string</code> | 
| currentChargeLevel | <code>string</code> | 
| chargeMode | <code>string</code> | 
| pluginState | <code>string</code> | 
| charging | <code>string</code> | 
| chargeStatus | <code>string</code> | 
| batteryDegradation | <code>string</code> | 
| batteryCapacity | <code>string</code> | 
| timeRequiredToFull | [<code>HoursMinutes</code>](#HoursMinutes) | 
| timeRequiredToFull200 | [<code>HoursMinutes</code>](#HoursMinutes) | 
| timeRequiredToFull200_6kW | [<code>HoursMinutes</code>](#HoursMinutes) | 

<a name="PluginStateEnum"></a>

## PluginStateEnum : <code>string</code>
NOT_CONNECTEDQC_CONNECTEDCONNECTED

**Kind**: global typedef  
<a name="ChargeStatusEnum"></a>

## ChargeStatusEnum : <code>string</code>
NOT_CHARGINGNORMAL_CHARGINGRAPIDLY_CHARGINGINVALID

**Kind**: global typedef  
<a name="DateSummary"></a>

## DateSummary : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| TargetDate | <code>string</code> | 
| ElectricMileage | <code>string</code> | 
| ElectricMileageLevel | <code>string</code> | 
| PowerConsumptMoter | <code>string</code> | 
| PowerConsumptMoterLevel | <code>string</code> | 
| PowerConsumptMinus | <code>string</code> | 
| PowerConsumptMinusLevel | <code>string</code> | 
| PowerConsumptMinusLevel | <code>string</code> | 
| PowerConsumptAUX | <code>string</code> | 
| PowerConsumptAUXLevel | <code>string</code> | 

<a name="Level"></a>

## Level : <code>Number</code>
1 (below average) - 5 (very good)

**Kind**: global typedef  
<a name="Energy"></a>

## Energy : <code>Number</code>
in watt hours (Wh)

**Kind**: global typedef  
<a name="DateSummaryList"></a>

## DateSummaryList : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| DateSummary | [<code>Array.&lt;DateSummary&gt;</code>](#DateSummary) | 

<a name="DriveAnalysisDetailJson"></a>

## DriveAnalysisDetailJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| ElectricCostScale | <code>string</code> | 
| RequestTargetDate | <code>string</code> | 
| DateSummaryList | [<code>DateSummaryList</code>](#DateSummaryList) | 

<a name="DriveAnalysisWeekSummaryJson"></a>

## DriveAnalysisWeekSummaryJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| DriveAnalysisDetailResponsePersonalData | [<code>DriveAnalysisDetailJson</code>](#DriveAnalysisDetailJson) | 

<a name="PersonalData"></a>

## PersonalData : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| DateSummary | [<code>DateSummary</code>](#DateSummary) | 
| ElectricCostScale | <code>string</code> | 

<a name="Advice"></a>

## Advice : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title | <code>string</code> | 
| body | <code>string</code> | 

<a name="DriveAnalysisJson"></a>

## DriveAnalysisJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| DriveAnalysisBasicScreenResponsePersonalData: | [<code>PersonalData</code>](#PersonalData) | 
| AdviceList | <code>object</code> | 
| AdviceList.Advice | [<code>Advice</code>](#Advice) | 

<a name="CalendarDateList"></a>

## CalendarDateList : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| CalendarDate | <code>Array.&lt;string&gt;</code> | 

<a name="CalendarInfo"></a>

## CalendarInfo : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| CalendarDisplayMonth | <code>string</code> | 
| CalendarTargetMonth | <code>string</code> | 
| CalendarDateList | [<code>CalendarDateList</code>](#CalendarDateList) | 

<a name="CalendarResponse"></a>

## CalendarResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Calendar | [<code>CalendarResponse</code>](#CalendarResponse) | 

<a name="DrivingRecordResponseInfoDetail"></a>

## DrivingRecordResponseInfoDetail : [<code>DrivingRecordDetail</code>](#DrivingRecordDetail)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| CalendarDisplayMonth | <code>string</code> | 
| CalendarTargetMonth | <code>string</code> | 
| DisplayDate | <code>string</code> | 
| ElectricCostScale | <code>string</code> | 
| TargetDate | <code>string</code> | 

<a name="DrivingRecordResponseInfo"></a>

## DrivingRecordResponseInfo : [<code>CalendarResponse</code>](#CalendarResponse)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| DateSummaryCarKarteDetailInfo | [<code>DrivingRecordResponseInfoDetail</code>](#DrivingRecordResponseInfoDetail) | 
| DrivingNote | <code>string</code> | 

<a name="DrivingRecordResponse"></a>

## DrivingRecordResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| CarKarteDetailInfoResponsePersonalData | [<code>DrivingRecordResponseInfo</code>](#DrivingRecordResponseInfo) | 

<a name="DrivingRecordMonthResponse"></a>

## DrivingRecordMonthResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| CarKarteGraphInfoResponseMonthPersonalData | [<code>DrivingRecordMonthResponseInfo</code>](#DrivingRecordMonthResponseInfo) | 

<a name="DrivingRecordMonthResponseInfo"></a>

## DrivingRecordMonthResponseInfo : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| ElectricCostScale | <code>string</code> | 
| MonthSummaryCarKarteDetailInfo | [<code>DrivingRecordMonthResponseInfoDetail</code>](#DrivingRecordMonthResponseInfoDetail) | 

<a name="DrivingRecordMonthResponseInfoDetail"></a>

## DrivingRecordMonthResponseInfoDetail : [<code>DrivingRecordDetail</code>](#DrivingRecordDetail)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| TargetMonth | <code>string</code> | 

<a name="DrivingRecordYearResponse"></a>

## DrivingRecordYearResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| CarKarteGraphInfoResponseYearPersonalData | [<code>DrivingRecordYearResponseInfo</code>](#DrivingRecordYearResponseInfo) | 

<a name="DrivingRecordYearResponseInfo"></a>

## DrivingRecordYearResponseInfo : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| ElectricCostScale | <code>string</code> | 
| YearSummaryCarKarteDetailInfo | [<code>DrivingRecordYearResponseInfoDetail</code>](#DrivingRecordYearResponseInfoDetail) | 

<a name="DrivingRecordYearResponseInfoDetail"></a>

## DrivingRecordYearResponseInfoDetail : [<code>DrivingRecordDetail</code>](#DrivingRecordDetail)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| TargetYear | <code>string</code> | 

<a name="DrivingRecordDetail"></a>

## DrivingRecordDetail : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| CO2Reduction | <code>string</code> | 
| ElectricMileage | <code>string</code> | 
| PowerConsumptTotal | <code>string</code> | 
| TravelDistance | <code>string</code> | 
| TravelTime | <code>string</code> | 

<a name="GraphDataPoint"></a>

## GraphDataPoint : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| date | <code>number</code> | 
| value | <code>number</code> | 

<a name="GraphDataPoints"></a>

## GraphDataPoints : [<code>Array.&lt;GraphDataPoint&gt;</code>](#GraphDataPoint)
**Kind**: global typedef  
<a name="BaseGraphResponse"></a>

## BaseGraphResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| set1 | [<code>GraphDataPoints</code>](#GraphDataPoints) | 
| set2 | [<code>GraphDataPoints</code>](#GraphDataPoints) | 

<a name="DistanceTimeDataPoints"></a>

## DistanceTimeDataPoints : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cumulativeDistance | [<code>GraphDataPoints</code>](#GraphDataPoints) | in km |
| time | [<code>GraphDataPoints</code>](#GraphDataPoints) | in hrs |

<a name="DistanceEconomyDataPoints"></a>

## DistanceEconomyDataPoints : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| distance | [<code>GraphDataPoints</code>](#GraphDataPoints) | in km |
| economy | [<code>GraphDataPoints</code>](#GraphDataPoints) | in miles/kwh |

<a name="VehicleInfoResponse"></a>

## VehicleInfoResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vin | <code>string</code> | 
| nickname | <code>string</code> | 
| charger20066 | <code>bool</code> | 
| telematicsEnabled | <code>bool</code> | 
| custom_sessionid | <code>string</code> | 

<a name="VehicleResponse"></a>

## VehicleResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| profile | [<code>ProfileResponse</code>](#ProfileResponse) | 

<a name="ProfileResponse"></a>

## ProfileResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vin | <code>string</code> | 
| gdcUserId | <code>string</code> | 
| gdcPassword | <code>string</code> | 
| dcmId | <code>string</code> | 
| nickname | <code>string</code> | 

<a name="CustomerInfoResponse"></a>

## CustomerInfoResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| UserId | <code>string</code> | 
| Language | <code>string</code> | 
| Timezone | <code>string</code> | 
| RegionCode | <code>string</code> | 
| EMailAddress | <code>string</code> | 
| Nickname | <code>string</code> | 
| Country | <code>string</code> | 

<a name="LoginResponseJson"></a>

## LoginResponseJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vehicleInfo | [<code>Array.&lt;VehicleInfoResponse&gt;</code>](#VehicleInfoResponse) | 
| vehicle | [<code>VehicleResponse</code>](#VehicleResponse) | 
| CustomerInfo | [<code>CustomerInfoResponse</code>](#CustomerInfoResponse) | 

