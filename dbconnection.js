// var Client = require('mysql');

// var connection =  Client.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   // port:3306,
//   db:'crud'
// },(err)=>{
//     if(err) return err;
//     console.log("connection established");
// });
// module.exports=connection;
//======DB Connections==========
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database:"crud"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=con;