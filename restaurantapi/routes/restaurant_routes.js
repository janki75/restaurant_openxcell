var restaurant=require('../models/restaurant');
var express=require('express');
var multer=require('multer');
var router=express.Router();
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

router.get("/:id?",function(req,res,next){
    if(req.params.id)
    {
        restaurant.getRestaurantById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
    else
    {
        restaurant.getAllRestaurants(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
});
router.post("/",upload.single('image'),function(req,res,next){
    restaurant.creatRestaurant(req.body,req.file.filename,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})
module.exports=router;