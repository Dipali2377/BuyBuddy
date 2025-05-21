import express from "express";
import dontenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";

dontenv.config();
const app = express(); // created express server

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen(PORT, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running on PORT ${PORT}`);
});
