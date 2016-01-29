var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nutshell' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Nutshell' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Nutshell' });
});

router.get('/submission', function(req, res, next) {
  res.render('submission/new');
});

router.post('/submission', function(req, res, next) {
  var link = req.body.contract_link;
  res.render('submission/show', { text: 'testing' });
  // request.post({url:'https://contract-reader.herokuapp.com/summarize', link: link}, function (error, resp, body) {
  //   console.log(error)
  //   if (!error && resp.statusCode == 200) {
  //     res.render('submission/show', { text: resp.text });
  //   }
  // });
});


module.exports = router;
