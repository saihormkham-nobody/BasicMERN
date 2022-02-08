// Express App Setup
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/book.route.js";

// Swagger
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import options from "./config/swagger.option.js";

// Database config
import connectDb from "./config/db.js";


const app = express();
// Database Connection
await connectDb();

app.use(cors());
app.use(bodyParser.json());


// Express route handlers
app.use("/api/books",routes);



const specs = swaggerJsdoc(options);
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


app.listen(5000, (err) => {
  console.log("Listening");
});
