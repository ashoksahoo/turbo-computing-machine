var express = require('express');
var router = express.Router();
var manager = require('./model');
var encode32 = require("encode32");




router.get('/', function (req, res) {
	var number = Math.floor((Math.random() * 1035000000) + 35000000);
	var code = encode32.encode(number);
	var decoded = encode32.decode(code);
	res.render('index', {title: 'Express', number:number, code: code, decoded: decoded});

});

router.get('/spam', function (req, res) {
	var params = {};
	for (i = 0; i < 10000; i++) {
	manager.createOne(params);
	}
	res.send(200, "OK");
});


module.exports = router;
