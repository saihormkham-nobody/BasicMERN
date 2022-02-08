import mongoose from "mongoose";
import config from "./keys.js";
const { connect } = mongoose;

const connectDB = async () => {
  console.log("start connection", config.mongoURL);
  try {
    const conn = connect(config.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected!!`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
