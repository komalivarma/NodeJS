var db=require('../dbconnection');
// var  getAllProd=function(callback){
//     // var db1=db.query("Select * from products");
//     //     //return db.query("Select * from products");
//     // console.log(db.query("Select * from products"))
//    var sql="select * from products";

//     db.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + JSON.stringify(result));
//         callback(result);
//       });
// }

var prod={

    getAllProd:function(callback){
    
    return db.query("Select * from products",callback);
    
    },
    getProdById:function(pid,callback){
    
        return db.query("select * from products where pid=?",[pid],callback);
    },
    addProd:function(prod,callback){
       console.log("Inside ADD function");
       
    return db.query("Insert into products values(?,?,?)",[prod.pid,prod.pname,prod.pcost],callback);
    //return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
    },
    deleteProd:function(pid,callback){
        return db.query("delete from products where pid=?",[pid],callback);
    },
    updateProd:function(pid,prod,callback){
        return  db.query("update products set pname=?,pcost=? where pid=?",[prod.pname,prod.pcost,pid],callback);
    },
    
    };
module.exports=prod;