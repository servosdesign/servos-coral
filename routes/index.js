var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CSC 317 App', name: "Lars Severson" });
});

router.get('/login', function (req, res) {
  res.render('login')
});

router.get('/postimage', function (req, res) {
  res.render('postimage')
});

router.get('/registration', function (req, res) {
  res.render('registration', {js: ["validation.js"]})
});

router.get('/viewpost', function (req, res) {
  res.render('viewpost')
});

module.exports = router;
