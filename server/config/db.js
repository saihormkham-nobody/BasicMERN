import mongoose from "mongoose";
import config from "./keys.js";
const { connect } = mongoose;

const connectDB = async () => {
  
  let url;
  if(process.env.MONGO_URL){
    url = process.env.MONGO_URL;
  }else{
    url = config.mongoURL
  }
  console.log("start connection", url);
  try {
    const conn = connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`${url} MongoDB Connected!!`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
