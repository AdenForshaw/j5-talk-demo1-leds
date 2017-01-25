
var five = require("johnny-five");

var board = new five.Board({port:"/dev/cu.usbmodem1411"});
var led;

board.on("ready", function() {
    led = new five.Led(12);
});

var express    = require('express');       
var app        = express();
var router = express.Router(); 
router.get('/on', function(req, res) { 
    led.on();
    res.json({ message: 'on' });  

});
router.get('/off', function(req, res) {  
    led.off();
    res.json({ message: 'off' }); 

});
app.use('/api', router);
app.listen(8090);
console.log('Magic happens on port ' + port);
