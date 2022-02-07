const mongoose = require("mongoose");
const config = require("./keys");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected!!`);
  } catch (err) {
    console.log(config.mongoURL);
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
