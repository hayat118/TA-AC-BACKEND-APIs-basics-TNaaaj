const { json } = require('express');
var express=require('express')
var router=express.Router();

var Country=require('../models/country');
var State=require('../models/state');

// 
router.post('/',(req,res,next)=>{
   State.create(req.body,(err,states)=>{
     if(err) return res.status(500).json(err)
     res.json({states})
   })
})
// find states
router.get('/',(req,res,next)=>{
  State.find({},(err,states)=>{
    // if(err) return res.status(500).json(err)
    // res.json(states)
    let asc=states.map((population)=>population.name).sort()
    if(err) return res.status(500).json(err)
    res.json({states,asc});
  })
})
// update
router.put('/:id/updatestate',(req,res,next)=>{
  var id=req.params.id;
  State.findByIdAndUpdate(id,req.body,(err,updstate)=>{
     if(err) return res.json(500).json(err)
     res.json(updstate)
  })
})
// 
router.delete('/:id/delete',(req,res,next)=>{
  var id=req.params.id;
  State.findByIdAndDelete(id,(err,delstate)=>{
    if(err) return json.status(500).json(err)
    res.json(delstate)
  })
})



module.exports=router;