const keys = require("./keys");


// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes")
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// mongoose.connect(config.mongoURL).then(() => {
//     console.log('MongoDB connected!!');
// }).catch(err => {
//     console.log('Failed to connect to MongoDB', err);
// });


// // Express route handlers
// app.use("/api",routes);

app.listen(5000, (err) => {
  console.log("Listening");
});
