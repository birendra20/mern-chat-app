const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify:true
    });
    console.log(`Mongodb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error is ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
