const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/values/all", async (req, res) => {
  res.send("Hi");
  // const values = await pgClient.query("SELECT * from values");

  // res.send(values.rows);
});


app.listen(5000, (err) => {
  console.log("Listening");
});
