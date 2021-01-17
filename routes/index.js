var express = require('express');
var router = express.Router();
const {Info} = require('../models/info');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  let address = path.join(__dirname, '..', 'views', 'index.html')
  res.sendFile(address)
});

router.post('/submit', (req, res) => {
  let newInfo = new Info({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email
  })
  newInfo.save(err => {
    if (err) return res.json({success: false})
    return res.redirect('/')
  })
})

router.get('/info', async (req, res) => {
  let info = await Info.find({})
  return res.json(info)
})

module.exports = router;
