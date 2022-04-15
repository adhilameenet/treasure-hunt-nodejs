var express = require('express');
var router = express.Router();

// @GET
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/e3jk2' , (req,res) => {
  res.render('e3jk2')
})

router.get('/f45ej' , (req,res) => {
  res.render('f45ej')
})

router.get('/hj4k2' , (req,res) => {
  res.render('hj4k2')
})

router.get('/k3j2e' , (req,res) => {
  res.render('k3j2e')
})

router.get('/p3d2e' , (req,res) => {
  res.render('p3d2e')
})

router.get('/re32f' , (req,res) => {
  res.render('re32f')
})



// @POST

router.post('/start', (req,res) => {
  if(req.body.answer) {
    res.render('e3jk2')
  } else {
    res.render('e3jk2')
  }
})

router.post('/first' , (req,res) => {
  const answer = 1111;
  if(req.body.answer == answer) {
    res.render('f45ej')
  } else {
    res.redirect('/e3jk2')
  }
})

router.post('/second' , (req,res) => {
  // const reqAnswer = 'nearby';
  // const answer = req.body.answer.toLowerCase()
  const answer = 2222;
  if(req.body.answer == answer) {
    res.render('hj4k2')
  } else {
    res.redirect('/f45ej')
  }
})

router.post('/third' , (req,res) => {
  const answer = 3333;
  if(req.body.answer == answer) {
    res.render('k3j2e')
  } else {
    res.redirect('/hj4k2')
  }
})

router.post('/fourth' , (req,res) => {
  const answer = 4444;
  if(req.body.answer == answer) {
    res.render('p3d2e')
  } else {
    res.redirect('/k3j2e')
  }
})

router.post('/fifth' , (req,res) => {
  const answer = 5555;
  if(req.body.answer == answer) {
    res.render('re32f')
  } else {
    res.redirect('/p3d2e')
  }
})

module.exports = router;
