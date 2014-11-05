var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { pretty: true });
});

router.post('/', function(req, res) {
console.log(req.route);
  myr='Got a POST request' + ' ' + req.param('domain') + ' ' + req.param('mode') + ' ' + req.param('urlstring') + ' ' + req.param('action');
  res.send(myr);

});

module.exports = router;
