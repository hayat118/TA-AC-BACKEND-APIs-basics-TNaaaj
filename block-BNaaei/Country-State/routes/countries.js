const { json } = require('express');
var express=require('express');
var router=express.Router();

var Country=require('../models/country');
var State=require('../models/state');

// 
router.post('/',(req,res,next)=>{
  Country.create(req.body,(err,country)=>{
    if(err) return res.status(500).json(err)
    res.json({country})
  })
})

// 


router.get('/',(req,res,next)=>{
  Country.find({}).populate("states","name").exec((err,country)=>{
    // console.log(err);
    if(err) return res.status(500).json(err)
    res.json({country})
  })
})

// 
router.put('/:id',(req,res,next)=>{
  var id=req.params.id;
  Country.findByIdAndUpdate(id,req.body,(err,updated)=>{
    if(err) return res.status(500).json(err)
    res.json({updated})
  })
})

// 
router.delete('/:id',(req,res,next)=>{
  var id=req.params.id;
  Country.findByIdAndDelete(id,(err,delCountry)=>{
    if(err) return res.status(500).json(err)
    res.json({delCountry})
  })
})



module.exports=router;