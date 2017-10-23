## Classes

<dl>
<dt><a href="#NissanConnectApi">NissanConnectApi</a></dt>
<dd></dd>
<dt><a href="#NissanConnect">NissanConnect</a></dt>
<dd><p>Nissan Connect class</p>
</dd>
<dt><a href="#BatteryStatus">BatteryStatus</a></dt>
<dd></dd>
<dt><a href="#CustomerInfo">CustomerInfo</a></dt>
<dd></dd>
<dt><a href="#DriveAnalysis">DriveAnalysis</a></dt>
<dd></dd>
<dt><a href="#Leaf">Leaf</a></dt>
<dd></dd>
<dt><a href="#LoginResponse">LoginResponse</a></dt>
<dd></dd>
<dt><a href="#UpdateResultResponse">UpdateResultResponse</a></dt>
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
<dt><a href="#DateSummary">DateSummary</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#PersonalData">PersonalData</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Advice">Advice</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DriveAnalysisJson">DriveAnalysisJson</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Level">Level</a> : <code>Number</code></dt>
<dd><p>1 (below average) - 5 (very good)</p>
</dd>
<dt><a href="#Energy">Energy</a> : <code>Number</code></dt>
<dd><p>in watt hours (Wh)</p>
</dd>
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
<dt><a href="#HoursMinutes">HoursMinutes</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#UpdateResultResponseJson">UpdateResultResponseJson</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="NissanConnectApi"></a>

## NissanConnectApi
**Kind**: global class  

* [NissanConnectApi](#NissanConnectApi)
    * [new NissanConnectApi(region)](#new_NissanConnectApi_new)
    * [.connect()](#NissanConnectApi+connect) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.login(username, password)](#NissanConnectApi+login) ⇒ [<code>Promise.&lt;LoginResponse&gt;</code>](#LoginResponse)
    * [.requestUpdate(leaf, customerInfo)](#NissanConnectApi+requestUpdate) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.requestUpdateResult(leaf, customerInfo, resultKey)](#NissanConnectApi+requestUpdateResult) ⇒ <code>Promise.&lt;(UpdateResultResponse\|null)&gt;</code>
    * [.getDrivingAnalysis(leaf, customerInfo)](#NissanConnectApi+getDrivingAnalysis) ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
    * [.getVehicleInfo(leaf, customerInfo)](#NissanConnectApi+getVehicleInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.request(endPoint, data)](#NissanConnectApi+request) ⇒ <code>Promise.&lt;\*&gt;</code>

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

<a name="NissanConnectApi+requestUpdate"></a>

### nissanConnectApi.requestUpdate(leaf, customerInfo) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="NissanConnectApi+requestUpdateResult"></a>

### nissanConnectApi.requestUpdateResult(leaf, customerInfo, resultKey) ⇒ <code>Promise.&lt;(UpdateResultResponse\|null)&gt;</code>
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 
| resultKey | <code>string</code> | 

<a name="NissanConnectApi+getDrivingAnalysis"></a>

### nissanConnectApi.getDrivingAnalysis(leaf, customerInfo) ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param | Type |
| --- | --- |
| leaf | [<code>Leaf</code>](#Leaf) | 
| customerInfo | [<code>CustomerInfo</code>](#CustomerInfo) | 

<a name="NissanConnectApi+getVehicleInfo"></a>

### nissanConnectApi.getVehicleInfo(leaf, customerInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
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

<a name="NissanConnect"></a>

## NissanConnect
Nissan Connect class

**Kind**: global class  

* [NissanConnect](#NissanConnect)
    * [new NissanConnect(username, password, [region])](#new_NissanConnect_new)
    * _instance_
        * [.leaf](#NissanConnect+leaf) : [<code>Leaf</code>](#Leaf) \| <code>null</code>
        * [.customerInfo](#NissanConnect+customerInfo) : [<code>CustomerInfo</code>](#CustomerInfo) \| <code>null</code>
        * [.sessionId](#NissanConnect+sessionId) : <code>string</code> \| <code>null</code>
        * [.loggedIn](#NissanConnect+loggedIn) : <code>boolean</code>
        * [.login()](#NissanConnect+login) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getUpdate()](#NissanConnect+getUpdate) ⇒ [<code>Promise.&lt;UpdateResultResponse&gt;</code>](#UpdateResultResponse)
        * [.getDrivingAnalysis()](#NissanConnect+getDrivingAnalysis) ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
        * [.getVehicleInfo()](#NissanConnect+getVehicleInfo) ⇒ [<code>Promise.&lt;VehicleInfo&gt;</code>](#VehicleInfo)
        * [.getTest()](#NissanConnect+getTest) ⇒ <code>Promise.&lt;\*&gt;</code>
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
<a name="NissanConnect+getUpdate"></a>

### nissanConnect.getUpdate() ⇒ [<code>Promise.&lt;UpdateResultResponse&gt;</code>](#UpdateResultResponse)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getDrivingAnalysis"></a>

### nissanConnect.getDrivingAnalysis() ⇒ [<code>Promise.&lt;DriveAnalysis&gt;</code>](#DriveAnalysis)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getVehicleInfo"></a>

### nissanConnect.getVehicleInfo() ⇒ [<code>Promise.&lt;VehicleInfo&gt;</code>](#VehicleInfo)
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect+getTest"></a>

### nissanConnect.getTest() ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>NissanConnect</code>](#NissanConnect)  
<a name="NissanConnect.Region"></a>

### NissanConnect.Region : <code>Object</code>
**Kind**: static property of [<code>NissanConnect</code>](#NissanConnect)  
<a name="BatteryStatus"></a>

## BatteryStatus
**Kind**: global class  

* [BatteryStatus](#BatteryStatus)
    * [new BatteryStatus(info)](#new_BatteryStatus_new)
    * [.range](#BatteryStatus+range) ⇒ <code>number</code>
    * [.rangeWithAc](#BatteryStatus+rangeWithAc) ⇒ <code>number</code>
    * [.chargeLevel](#BatteryStatus+chargeLevel) ⇒ <code>string</code>
    * [.chargeMode](#BatteryStatus+chargeMode) ⇒ <code>string</code>
    * [.pluginState](#BatteryStatus+pluginState) ⇒ <code>string</code>
    * [.isCharging](#BatteryStatus+isCharging) ⇒ <code>string</code>
    * [.chargeStatus](#BatteryStatus+chargeStatus) ⇒ <code>string</code>
    * [.capacity](#BatteryStatus+capacity) ⇒ <code>Number</code>
    * [.chargeState](#BatteryStatus+chargeState) ⇒ <code>Number</code>
    * [.timeToFull](#BatteryStatus+timeToFull) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
    * [.timeToFull6kW](#BatteryStatus+timeToFull6kW) ⇒ [<code>HoursMinutes</code>](#HoursMinutes)

<a name="new_BatteryStatus_new"></a>

### new BatteryStatus(info)

| Param | Type |
| --- | --- |
| info | [<code>UpdateResultResponseJson</code>](#UpdateResultResponseJson) | 

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

### batteryStatus.pluginState ⇒ <code>string</code>
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+isCharging"></a>

### batteryStatus.isCharging ⇒ <code>string</code>
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
<a name="BatteryStatus+chargeStatus"></a>

### batteryStatus.chargeStatus ⇒ <code>string</code>
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
<a name="BatteryStatus+timeToFull6kW"></a>

### batteryStatus.timeToFull6kW ⇒ [<code>HoursMinutes</code>](#HoursMinutes)
**Kind**: instance property of [<code>BatteryStatus</code>](#BatteryStatus)  
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
<a name="DriveAnalysis"></a>

## DriveAnalysis
**Kind**: global class  

* [DriveAnalysis](#DriveAnalysis)
    * [new DriveAnalysis(info)](#new_DriveAnalysis_new)
    * [.summary](#DriveAnalysis+summary) ⇒ [<code>DateSummary</code>](#DateSummary)
    * [.targetDate](#DriveAnalysis+targetDate) ⇒ <code>string</code>
    * [.averageEconomy](#DriveAnalysis+averageEconomy) ⇒ <code>Number</code>
    * [.averageEconomyLevel](#DriveAnalysis+averageEconomyLevel) ⇒ [<code>Level</code>](#Level)
    * [.economyUnits](#DriveAnalysis+economyUnits) ⇒ <code>string</code>
    * [.accelerationEnergy](#DriveAnalysis+accelerationEnergy) ⇒ [<code>Energy</code>](#Energy)
    * [.accelerationEnergyLevel](#DriveAnalysis+accelerationEnergyLevel) ⇒ [<code>Level</code>](#Level)
    * [.regen](#DriveAnalysis+regen) ⇒ [<code>Energy</code>](#Energy)
    * [.regenLevel](#DriveAnalysis+regenLevel) ⇒ [<code>Level</code>](#Level)
    * [.accessoryUsage](#DriveAnalysis+accessoryUsage) ⇒ [<code>Energy</code>](#Energy)
    * [.accessoryUsageLevel](#DriveAnalysis+accessoryUsageLevel) ⇒ [<code>Level</code>](#Level)

<a name="new_DriveAnalysis_new"></a>

### new DriveAnalysis(info)

| Param | Type |
| --- | --- |
| info | [<code>DriveAnalysisJson</code>](#DriveAnalysisJson) | 

<a name="DriveAnalysis+summary"></a>

### driveAnalysis.summary ⇒ [<code>DateSummary</code>](#DateSummary)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+targetDate"></a>

### driveAnalysis.targetDate ⇒ <code>string</code>
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+averageEconomy"></a>

### driveAnalysis.averageEconomy ⇒ <code>Number</code>
In units of [economyUnits](#DriveAnalysis+economyUnits)

**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+averageEconomyLevel"></a>

### driveAnalysis.averageEconomyLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+economyUnits"></a>

### driveAnalysis.economyUnits ⇒ <code>string</code>
e.g. miles/kWh

**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+accelerationEnergy"></a>

### driveAnalysis.accelerationEnergy ⇒ [<code>Energy</code>](#Energy)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+accelerationEnergyLevel"></a>

### driveAnalysis.accelerationEnergyLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+regen"></a>

### driveAnalysis.regen ⇒ [<code>Energy</code>](#Energy)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+regenLevel"></a>

### driveAnalysis.regenLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+accessoryUsage"></a>

### driveAnalysis.accessoryUsage ⇒ [<code>Energy</code>](#Energy)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
<a name="DriveAnalysis+accessoryUsageLevel"></a>

### driveAnalysis.accessoryUsageLevel ⇒ [<code>Level</code>](#Level)
**Kind**: instance property of [<code>DriveAnalysis</code>](#DriveAnalysis)  
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
<a name="UpdateResultResponse"></a>

## UpdateResultResponse
**Kind**: global class  

* [UpdateResultResponse](#UpdateResultResponse)
    * [new UpdateResultResponse(info)](#new_UpdateResultResponse_new)
    * [.batteryStatus](#UpdateResultResponse+batteryStatus) : [<code>BatteryStatus</code>](#BatteryStatus)
    * [.updateTime](#UpdateResultResponse+updateTime) ⇒ <code>string</code>

<a name="new_UpdateResultResponse_new"></a>

### new UpdateResultResponse(info)

| Param | Type |
| --- | --- |
| info | [<code>UpdateResultResponseJson</code>](#UpdateResultResponseJson) | 

<a name="UpdateResultResponse+batteryStatus"></a>

### updateResultResponse.batteryStatus : [<code>BatteryStatus</code>](#BatteryStatus)
**Kind**: instance property of [<code>UpdateResultResponse</code>](#UpdateResultResponse)  
<a name="UpdateResultResponse+updateTime"></a>

### updateResultResponse.updateTime ⇒ <code>string</code>
**Kind**: instance property of [<code>UpdateResultResponse</code>](#UpdateResultResponse)  
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

<a name="Level"></a>

## Level : <code>Number</code>
1 (below average) - 5 (very good)

**Kind**: global typedef  
<a name="Energy"></a>

## Energy : <code>Number</code>
in watt hours (Wh)

**Kind**: global typedef  
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

<a name="HoursMinutes"></a>

## HoursMinutes : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| hours | <code>string</code> | 
| minutes | <code>string</code> | 

<a name="UpdateResultResponseJson"></a>

## UpdateResultResponseJson : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| timeStamp | <code>string</code> |  |
| cruisingRangeAcOn | <code>string</code> |  |
| cruisingRangeAcOff | <code>string</code> |  |
| currentChargeLevel | <code>string</code> |  |
| chargeMode | <code>string</code> |  |
| pluginState | <code>string</code> |  |
| charging | <code>string</code> |  |
| chargeStatus | <code>string</code> |  |
| batteryDegradation | <code>string</code> |  |
| batteryCapacity | <code>string</code> |  |
| timeRequiredToFull | [<code>HoursMinutes</code>](#HoursMinutes) |  |
| timeRequiredToFull200 | [<code>HoursMinutes</code>](#HoursMinutes) |  |
| timeRequiredToFull200_6kW | [<code>HoursMinutes</code>](#HoursMinutes) | /** |

