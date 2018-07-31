const express = require("express");
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/byphone/:id', (req,res) => {
  Comment.find({phone_id:req.params.id}).then(comments => 
     res.json(comments)
  )
})

router.post('/', (req, res) => {
  const {phone_id, text} = req.body;

  Comment.create( {phone_id, text} ) 
  .then( data => res.json(data))
  .catch( err => console.log(err));
})
module.exports = router;