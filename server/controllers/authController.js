import userModel from "../models/userModel.js";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "keepquite";
const saltRounds = 10;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body; // destructuring the email and password from req body

    let existingUser = await userModel.findOne({ email }); // check if the user is already exists

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    let myPlaintextPassword = password;
    // console.log("plain pass-->", myPlaintextPassword);

    bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
      // Store hash in your password DB.
      // console.log("salt rounds--->", saltRounds);

      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error hashing password" });
      } else {
        const userData = new userModel({
          name,
          email,
          password: hash,
          cartData: cart,
        });

        await userData.save();
        res.status(201).json({ message: "User registered successfully" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    // now comparing the password

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // then generate token with successful login
    let token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.status(200).json({
      sucess: true,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signup, login };
