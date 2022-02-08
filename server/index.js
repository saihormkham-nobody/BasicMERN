// Express App Setup
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes.js";

// Swagger

import swaggerUi from "swagger-ui-express";

// Database config
import connectDb from "./config/db.js";

const app = express();
// Database Connection
await connectDb();

app.use(cors());
app.use(bodyParser.json());


// Express route handlers
app.use("/api/book",routes);

app.listen(5000, (err) => {
  console.log("Listening");
});
