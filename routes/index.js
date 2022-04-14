var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/first-session' , (req,res) => {
  res.render('first-session')
})

router.get('/second-session' , (req,res) => {
  res.render('second-session')
})

router.get('/third-session' , (req,res) => {
  res.render('third-session')
})

router.get('/fourth-session' , (req,res) => {
  res.render('fourth-session')
})

router.get('/fifth-session' , (req,res) => {
  res.render('fifth-session')
})

router.get('/final-session' , (req,res) => {
  res.render('final-session')
})

router.post('/first-session' , (req,res) => {
  const answer = 1111;
  var verifyAuth = false ;
  if(req.body.answer == answer) {
    res.render('second-session')
  } else {
    res.redirect('/first-session')
  }
})

router.post('/second-session' , (req,res) => {
  // const reqAnswer = 'nearby';
  // const answer = req.body.answer.toLowerCase()
  const answer = 2222;
  if(req.body.answer == answer) {
    res.render('third-session')
  } else {
    res.redirect('/second-session')
  }
})

router.post('/third-session' , (req,res) => {
  const answer = 3333;
  if(req.body.answer == answer) {
    res.render('fourth-session')
  } else {
    res.redirect('/third-session')
  }
})

router.post('/fourth-session' , (req,res) => {
  const answer = 4444;
  if(req.body.answer == answer) {
    res.render('fifth-session')
  } else {
    res.redirect('/fourth-session')
  }
})

router.post('/fifth-session' , (req,res) => {
  const answer = 5555;
  if(req.body.answer == answer) {
    res.render('final-session')
  } else {
    res.redirect('/fifth-session')
  }
})

module.exports = router;
