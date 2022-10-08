// Student ID: 301215136
// Name: Wonyoung Chung
// Date: Oct 01, 2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  {
     title: 'Home',
     name: 'Wonyoung'
  });
});

// Renders the projects page
router.get('/projects', function(req, res, next) {
  res.render('projectservices',
  {
     title: 'Projects'
  });
});

router.get('/services', function(req, res, next) {
  res.render('projectservices',
  {
     title: 'Servicies'
  });
});

router.get('/about', function(req, res, next) {
  res.render('index',
  {
    title: 'About Me',
    name: 'Wonyoung'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('index',
  {
     title: 'Contact',
     name: 'Wonyoung'
  });
});

module.exports = router;
