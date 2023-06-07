

var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET users listing. */
router.get('/all', function(req, res, next) {
  fs.readFile(__dirname + '/datasets/countries.json', (err, data) => {
    res.json(JSON.parse(String(data)))
  })
});

module.exports = router;
