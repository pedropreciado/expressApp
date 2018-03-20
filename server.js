'use strict'

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  res.setHeader("Cache-Control", "no-cache");
  next();
});

router.get("/", (req, res) => {
  res.json({ message: "API Initialized!"});
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`api running on port: ${port}`);
});
