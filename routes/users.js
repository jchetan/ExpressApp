var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/chetan/', function(req, res, next) {
  res.send('respond with a resource for chetan');
});

module.exports = router;
