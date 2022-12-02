var express = require('express');
var router = express.Router();

const { isLoggedIn } = require('../middleware/protectors');
const { getRecentPosts } = require('../middleware/posts');

/* GET home page. */
router.get('/', getRecentPosts, function (req, res, next) {
  res.render('index', { title: 'CSC 317 App', name: "Lars Severson" });
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/postimage', isLoggedIn, function (req, res) {
  res.render('postimage');
});

router.get("/posts/:id(\\d+)", function (req, res) {
  res.render('viewpost', { js: ["viewpost.js"] });
});

router.get('/registration', function (req, res) {
  res.render('registration', { js: ["validation.js"] });
});

router.get('/viewpost', function (req, res) {
  res.render('viewpost');
});

module.exports = router;
