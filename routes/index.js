var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contract Reader' });
});

router.get('/submission', function(req, res, next) {
  res.render('submission/new');
});

router.post('/submission', function(req, res, next) {
  var link = req.body.contract_link;
  request.post({url:'https://contract-reader.herokuapp.com/summarize', link: link}, function (error, resp, body) {
    if (!error && resp.statusCode == 200) {
      res.render('submission/show', { text: resp.text });
    }
  });
});


module.exports = router;
