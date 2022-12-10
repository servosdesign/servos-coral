var express = require('express');
var router = express.Router();

const { isLoggedIn } = require('../middleware/protectors');
const { getRecentPosts, getPostById, getCommentsForPostsById } = require('../middleware/posts');

/* GET home page. */
router.get('/', getRecentPosts, function (req, res, next) {
  res.render('index');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/postimage', isLoggedIn, function (req, res) {
  res.render('postimage');
});

router.get("/posts/:id(\\d+)", getPostById, getCommentsForPostsById, function (req, res) {
  res.render('viewpost');
});

router.get('/registration', function (req, res) {
  res.render('registration', { js: ["validation.js"] });
});

module.exports = router;
