var express = require('express');
var router = express.Router();

var path = require('path');


/* GET testbootstrap. */
router.get('/', function(req, res) {
  res.sendFile('testbootstrap.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;
