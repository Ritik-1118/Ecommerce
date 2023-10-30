import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to  Mongodb Database ${conn.connection.host}`.yellow
    );
  } catch (error) {
    console.log(`Error in Mongoodb ${error}`.bgRed.white);
  }
};

export default connectDB;
