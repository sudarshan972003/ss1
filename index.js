const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host : "sql6.freesqldatabase.com",
	user : "sql6693849",
	password : "BF4QDRltKS",
	database : "sql6693849"
});

app.post("/save",(req,res) => {
	let data = [req.body.name, req.body.company, req.body.pkg ] ;
	let sql = "insert into student values(?,?,?)";
	con.query(sql, data, (err,result) => {
		if (err) err.send(err);
		else	res.send(result);
	});
});
app.listen(9111, () => {console.log("Ready @ 9111"); });

