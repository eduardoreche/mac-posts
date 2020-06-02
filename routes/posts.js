var express = require('express');
var router = express.Router();
const fs = require('fs');


router.get('/:id', function(req, res, next) {
  const rawdata = fs.readFileSync('receipts.json');
  const post = JSON.parse(rawdata).find(item => item.id == req.params.id);
  
  res.render('post', { post });
});

module.exports = router;
