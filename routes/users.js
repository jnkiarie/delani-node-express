var express = require('express');
var router = express.Router();
const Delani = require('../model/delani-model');

/* GET users listing. */
router.get('/', function(req, res, next) {

  Delani.find({}, (err, data) => {
      if (err) {
          res.send(`${err}`);
      }
      res.send(`${data}`)
  })
})

module.exports = router;
