## Classes

<dl>
<dt><a href="#NissanConnectApi">NissanConnectApi</a></dt>
<dd></dd>
<dt><a href="#NissanConnect">NissanConnect</a></dt>
<dd><p>Nissan Connect class</p>
</dd>
<dt><a href="#CustomerInfo">CustomerInfo</a></dt>
<dd></dd>
<dt><a href="#Leaf">Leaf</a></dt>
<dd></dd>
<dt><a href="#LoginResponse">LoginResponse</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EndPoints">EndPoints</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Config">Config</a> : <code>object</code></dt>
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

<a name="NissanConnectApi"></a>

## NissanConnectApi
**Kind**: global class  

* [NissanConnectApi](#NissanConnectApi)
    * [new NissanConnectApi(config, region)](#new_NissanConnectApi_new)
    * [.connect()](#NissanConnectApi+connect) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.login(username, password)](#NissanConnectApi+login) ⇒ [<code>Promise.&lt;LoginResponse&gt;</code>](#LoginResponse)
    * [.request(endPoint, data)](#NissanConnectApi+request) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="new_NissanConnectApi_new"></a>

### new NissanConnectApi(config, region)

| Param | Type |
| --- | --- |
| config | [<code>Config</code>](#Config) | 
| region | <code>string</code> | 

<a name="NissanConnectApi+connect"></a>

### nissanConnectApi.connect() ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  
<a name="NissanConnectApi+login"></a>

### nissanConnectApi.login(username, password) ⇒ [<code>Promise.&lt;LoginResponse&gt;</code>](#LoginResponse)
**Kind**: instance method of [<code>NissanConnectApi</code>](#NissanConnectApi)  

| Param |
| --- |
| username | 
| password | 

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
<a name="new_NissanConnect_new"></a>

### new NissanConnect(username, password, [region])

| Param | Type | Default |
| --- | --- | --- |
| username | <code>string</code> |  | 
| password | <code>string</code> |  | 
| [region] | <code>string</code> | <code>&quot;NE&quot;</code> | 

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
<a name="LoginResponse"></a>

## LoginResponse
**Kind**: global class  

* [LoginResponse](#LoginResponse)
    * [new LoginResponse(responseJson)](#new_LoginResponse_new)
    * [.customerInfo](#LoginResponse+customerInfo) : [<code>CustomerInfo</code>](#CustomerInfo)
    * [.leaf](#LoginResponse+leaf) : [<code>Leaf</code>](#Leaf)

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
<a name="EndPoints"></a>

## EndPoints : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| app | <code>string</code> | 
| login | <code>string</code> | 
| batteryStatus | <code>string</code> | 
| batteryStatusResult | <code>string</code> | 
| batteryRemoteCharging | <code>string</code> | 
| batteryStatusRecords | <code>string</code> | 
| acRemote | <code>string</code> | 
| acRemoteResult | <code>string</code> | 
| acRemoteOff | <code>string</code> | 
| acRemoteOffResult | <code>string</code> | 
| acRemoteNew | <code>string</code> | 
| acRemoteUpdate | <code>string</code> | 
| acRemoteCancel | <code>string</code> | 
| acRemoteRecords | <code>string</code> | 
| scheduledACRemote | <code>string</code> | 
| driveAnalysis | <code>string</code> | 
| priceSimulator | <code>string</code> | 

<a name="Config"></a>

## Config : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| baseUrl | <code>string</code> | 
| initialAppString | <code>string</code> | 
| endPoints | [<code>EndPoints</code>](#EndPoints) | 

<a name="VehicleInfoResponse"></a>

## VehicleInfoResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vin | <code>string</code> | 
| nickname | <code>string</code> | 
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

