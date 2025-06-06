import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
