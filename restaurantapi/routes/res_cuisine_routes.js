var rc=require('../models/res_cuisine');
var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    rc.getAllcuisine(function(err,rows){
          if(err)
          {
              res.json(err);
          }
          else
          {
              res.json(rows);
          }
      })
  });
router.get("/:id",function(req,res,next){
  rc.getcuisinename(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});
router.post("/",function(req,res,next){
   rc.insert(req.body,function(err,rows){
          if(err)
          {
              res.json(err);
          }
          else
          {
              res.json(rows);
          }
      })
  });
module.exports=router;