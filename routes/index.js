var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  const rawdata = fs.readFileSync('receipts.json');
  const posts = JSON.parse(rawdata);

  res.render('index', { title: 'Muito Além da Cozinha', posts});
})

module.exports = router;
