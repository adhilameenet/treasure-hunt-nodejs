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
  console.log(req.body);
  const answer = 1234;
  if(req.body.answer == answer) {
    res.render('second-session')
  } else {
    res.redirect('/first-session')
  }

})

module.exports = router;
