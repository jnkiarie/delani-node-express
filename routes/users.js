var express = require('express');
var router = express.Router();
const Delani = require('../model/delani-model');
var mongodb = require('mongodb')

/* GET users listing. */
//View User Data
router.get('/', function (req, res, next) {

  Delani.find({}, (err, data) => {
    if (err) {
      res.send(`${err}`);
    }
    res.send(`${data}`)
  })
})

// /* DELETE USERS */
// router.delete('/', function (req, res, next) {

//   let id = req.query.id;

//   Delani.deleteOne({ _id: id }, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);

//   });
//   console.log(id)
//   res.send('Deleted')
// })

// //UPDATE USER DATA
// router.put('/', function (req, res, next) {

//   const id = req.query.id;
//   Team.updateOne({ _id: id }, { name: 'Jimmy Kiarie' }, (err, data) => {
//       if (err) {
//           console.log(err);
//       }
//       console.log(data);
//   });

//   res.send('Record Updated');
// });

module.exports = router;
