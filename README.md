# Nissan Connect

A Node js library for interacting with the Nissan Connect (Carwings) API. This provides a wrapper around the API to make it cleaner to use.

## Example Usage
NissanConnect is promise based. Generated docs can be found [here](https://github.com/beejjacobs/nissan-connect/tree/master/docs#NissanConnect).
```javascript
 const NissanConnect =  require('nissan-connect');
 
 let nc = new NissanConnect('username','password');
 
 async function things() {
   //AC controls
   await nc.acOn();
   await nc.acOff();
   
   await nc.setAcSchedule('2017-11-04 07:30');
   
   let schedule = await nc.getAcSchedule();
   
   console.log(schedule.targetDate);
   
   // Battery status
   let status = await nc.getBatteryStatus();
   
   console.log(status.batteryStatus.chargeState);
   console.log(status.batteryStatus.timeToFull3kW);
   
   //Driving analysis
   let drivingAnalysis = await nc.getDrivingAnalysisWeek('2017-11-01');
   
   console.log(drivingAnalysis.startDate);
   drivingAnalysis.days.forEach(daySummary => {
     console.log(daySummary.targetDate);
     if (daySummary.hasData) {
      console.log(daySummary.averageEconomy);
      console.log(daySummary.regen);
     }
   });
 }
 
things().catch(console.error);
```  
