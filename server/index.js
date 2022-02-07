// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes")

// Swagger

const swaggerUi = require("swagger-ui-express");

// Database config
const connectDb = require("./config/db");

const app = express();
// Database Connection
connectDb();

app.use(cors());
app.use(bodyParser.json());


// Express route handlers
app.use("/api/book",routes);

app.listen(5000, (err) => {
  console.log("Listening");
});
