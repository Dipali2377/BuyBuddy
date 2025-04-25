import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        // my password was Buybuddy@123 but special character
        //does not works so we need to encode it like this Buybuddy%40123
        "mongodb+srv://dipalim680:Buybuddy%40123@cluster0.q2rrlsw.mongodb.net/"
    );
    console.log("Connected to DB successfully...!");
  } catch (error) {
    console.log("Failed to connect to DB", error);
  }
};

export default connectDB;
