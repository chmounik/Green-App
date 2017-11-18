var express = require('express');
var router = express.Router()
var Wemo = require('wemo-client');
var wemo = new Wemo();
var deviceinfo;
router.get('/', function(req, res, next) {
    console.log('Inside Get');
    if(typeof client === 'undefined'){
        wemo.discover(function(err, deviceInfo) {
            console.log('Wemo Device Found: %j', deviceInfo);
            deviceinfo = deviceInfo;
            // Get the client for the found device
            client = wemo.client(deviceInfo);
            
            // You definitely want to listen to error events (e.g. device went offline),
            // Node will throw them as an exception if they are left unhandled  
            client.on('error', function(err) {
                console.log('Error: %s', err.code);
            });
        });
    }
    
        // Handle BinaryState events
        /*client.on('binaryState', function(value) {
            console.log('Binary State changed to: %s', value);
            client.getInsightParams(function(err, binaryState, instantPower, data) {
                console.log('Power Consumption: %s', instantPower);
                var cons = JSON.parse(JSON.stringify(data));
                console.log('Power Consumed Today: %s',cons.TodayConsumed);
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Headers', 'Content-type')
                res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
                res.send(cons);
            });
        });*/
        client.getInsightParams(function(err, binaryState, instantPower, data) {
            //client = wemo.client(deviceInfo);
            console.log('Instant power: %s', instantPower);
            var cons = JSON.parse(JSON.stringify(data));
            console.log('Power Consumed Today: %s',cons.TotalPower);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Content-type');
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            cons["InstantPower"] = instantPower;
            res.send(cons);
        });
    // Turn the switch on
    //client.setBinaryState(1);
    });

module.exports = router;