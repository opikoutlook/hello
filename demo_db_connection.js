var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sisa_saldo"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM pelanggan", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });