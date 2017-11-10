var express = require('express');
var router = express.Router()
var Wemo = require('wemo-client');
var wemo = new Wemo();
var set = 0;


router.get('/', function(req, res, next) {
if(set === 0){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    set = 1;
}

function foundDevice(err, device) {
  if (device.deviceType === Wemo.DEVICE_TYPE.Insight) {
    console.log('Wemo Insight Switch found: %s', device.friendlyName);

    var client = this.client(device);
    client.on('insightParams', function(state, power, data) {
      console.log('%s’s power consumption: %s W',
        this.device.friendlyName,
        Math.round(power / 1000)
      );
      console.log(data);
      var cons = JSON.parse(JSON.stringify(data));
      cons['InstantPower'] = power;
      //res.send(cons)
      console.log('Power Consumed Today: %s',cons.TodayConsumed);
      res.write(cons);
    });
  }
}
wemo.discover(foundDevice);
res.end();
});


module.exports = router;