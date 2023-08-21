// import {createToken} from './src/services/test';

const createToken = require('./src/services/test')
const express = require("express");
var cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const { log } = require('console');
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
app.use(cors());
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

const con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "news",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!");
});


createToken.createToken()


app
  .route("/newsname")
  .get(function (req, res) {
    let sql = "SELECT * FROM newsname";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })

app
  .route('/user')
  .get(function (req, res) {
    let sql = "SELECT * FROM user";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
app.listen(port);
console.log("Server started at http://localhost:" + port);