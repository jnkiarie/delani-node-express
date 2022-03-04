var express = require('express');
const Delani = require('../model/delani-model');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


/* GET users listing. */
router.post('/', function(req, res, next) {
    let delani_data = new Delani(req.body);

    delani_data.save((err)=>{
        if(err){
            console.log(err);
        }
        res.send(`Thank You ${delani_data.name} for trusting Delani Studio`);
        //res.send("Go to /users to view our collection of users");
    })
  });
  
module.exports = router;