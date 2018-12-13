var express = require('express');
var bodyParser = require('body-parser');
var prod=require('./models/products');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// var prod=require('./models/products');
// app.get('/listProducts',function(req,res){
//     console.log("hello");
//     prod(function(err,rows){

//     if(err)
//     {
//         res.json(err);
//     }
//     else
//     {
//         res.send(rows);
//     }
// });
// });
//==============API for Get Product Based on ID================
app.get('/:pid?',function(req,res,next){

    if(req.params.pid){
    
        prod.getProdById(req.params.pid,function(err,rows){
    
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    
     prod.getAllProd(function(err,rows){
    
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
     
        });
    }
 });

 //===========API for Insertion of product Records =====================
    app.post('/',function(req,res,next){
    
            prod.addProd(req.body,function(err,count){
    
                //console.log(req.body);
                if(err)
                {
                    res.json(err);
                }
                else{
                        res.json(req.body);
                }
            });
    });
   
    //================API for delete particular product =================
    app.delete('/delete/:pid',function(req,res,next){
    
            prod.deleteProd(req.params.pid,function(err,count){
    
                if(err)
                {
                   // res.json(err);
                    res.send(" not deleted")
                }
                else
                {
//res.json(count);
                    res.send("deleted")
                }
    
            });
    });

    //===========API for updation of products based on ID ===================
    app.put('/:pid',function(req,res,next){
    
        prod.updateProd(req.params.pid,req.body,function(err,rows){
    
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    });


app.listen(3000,()=>{
    console.log("listining on 3000");
});
