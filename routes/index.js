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

router.get('/qsd4e' , (req,res) => {
  res.render('qsd4e')
})

router.get('/re32f' , (req,res) => {
  res.render('re32f')
})

router.get('/tqs4d' , (req,res) => {
  res.render('tqs4d')
})




// @POST

router.post('/first' , (req,res) => {
  const answer = 82;
  if(req.body.answer == answer) {
    res.render('f45ej')
  } else {
    res.redirect('/e3jk2')
  }
})

router.post('/second' , (req,res) => {
  const reqAnswer = 'cemetery';
  const answer = req.body.answer.toLowerCase()
  if(reqAnswer == answer) {
    res.render('hj4k2')
  } else {
    res.redirect('/f45ej')
  }
})

router.post('/third' , (req,res) => {
  const reqAnswer = 'samuel taylor coleridge';
  const answer = req.body.answer.toLowerCase()
  if(reqAnswer == answer) {
    res.render('tqs4d')
  } else {
    res.redirect('/hj4k2')
  }
})

router.post('/fourth' , (req,res) => {
  const reqAnswer = 'beeran sahib';
  const answer = req.body.answer.toLowerCase()
  if(reqAnswer == answer) {
    res.render('k3j2e')
  } else {
    res.redirect('/tqs4d')
  }
})

router.post('/fifth' , (req,res) => {
  const reqAnswer = 'unesco';
  const answer = req.body.answer.toLowerCase()
  if(reqAnswer == answer) {
    res.render('p3d2e')
  } else {
    res.redirect('/k3j2e')
  }
})

router.post('/sixth' , (req,res) => {
  const reqAnswer = 'ekata';
  const answer = req.body.answer.toLowerCase()
  if(reqAnswer == answer) {
    res.render('qsd4e')
  } else {
    res.redirect('/p3d2e')
  }
})

router.post('/seventh' , (req,res) => {
  const answer = 1959;
  if(req.body.answer == answer) {
    res.render('re32f')
  } else {
    res.redirect('/qsd4e')
  }
})


module.exports = router;
