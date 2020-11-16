const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');
/* GET home page */
router.get('/', (req, res, next)=>{
 res.render('index')
});

router.get('/movies', (req,res,next)=>{
  Movie.find({}, {title:1, image:1, _id:1})
  .then((movie) => {
    res.render('movies', {movie})
  })

  .catch((err) => { 
      console.log(err) 
      res.send(err)
  })
})

module.exports = router;
