var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

/* Session security */
var csrfProtection = csrf();
router.use(csrfProtection);

/* Get home page. */
router.get('/', function(req, res, next) {
  Product.find(function (err, docs) {
    /* add 3 bootstrap columns in row and loop*/
    var productBlocks = [];
    var blockSize = 3;
    for (var i = 0; i < docs.length; i += blockSize) {
      productBlocks.push(docs.slice(i, i + blockSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productBlocks });
  });
});

router.get('/user/signup', function (req, res, next) {
  res.render('user/signup', { title: 'User sign Up', csrfToken: req.csrfToken()});
});

router.post('/user/signup', function (req, res, next) {
   res.redirect('/');
});

module.exports = router;
