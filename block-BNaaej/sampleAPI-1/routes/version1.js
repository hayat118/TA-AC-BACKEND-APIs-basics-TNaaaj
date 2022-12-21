var express=require('express')
var router=express.Router();

var Book=require('../models/book');
var Category=require('../models/category')


// find bbok
// router.get('/',(req,res,next)=>{
//   Book.find({},(err,books)=>{
//     if(err) return res.status(500).json(err);
//     res.json({books})
//   })
// })

router.get('/',(req,res,next)=>{
  Book.find({}).populate("category").exec((err,books)=>{
    if(err) return res.status(500).json(err)
    res.json({books})
  })
})

// create book
router.post('/',(req,res,next)=>{
     let categoryName = req.body.category;
    //  req.body.category=[];

    //  let tag=req.body.tag
    //  req.body.tag=tag;

    Category.create({name:categoryName},(err,category)=>{
      if(err) return res.status(500).json(err)
      req.body.category = category._id;
      // console.log(req.body, 'body');
      Book.create(req.body,(err, books)=>{
        var bookId=req.params.id;
        
      
        // console.log(books, err, 'books')  
        res.json({books})    
      })  
  
      })
    
})
// find 0ne

router.get('/:id',(req,res,next)=>{
  var id=req.params.id;
  Book.findById(id,(err,book)=>{
    if(err) return res.status(500).json(err)
    res.json({book})
  })
})

// update
router.put('/:id',(req,res,next)=>{
  var id=req.params.id;
  const body = req.body;
  // console.log(id, body);
  Book.findByIdAndUpdate(id, body, (err,update)=>{
    console.log(update);
    if(err) {
      return res.status(500).json(err);
    }
    
    res.json(update);
  })
})

// delete
router.delete('/:id',(req,res,next)=>{
     var id=req.params.id;
    //  const body = req.body;
    Book.findByIdAndDelete(id,(err,deleted)=>{
     
        if(err) return res.status(500).json(err);
        res.json({deleted});
    })
})

module.exports=router;