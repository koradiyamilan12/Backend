const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
