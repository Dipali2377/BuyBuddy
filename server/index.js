import express from "express";
import dontenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import multer from "multer";
import path from "path";
import productRouter from "./routes/productRoute.js";
import authRoute from "./routes/authRoute.js";
dontenv.config();
const app = express(); // created express server

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(cookieParser());

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("App is running");
// });

app.use("/products", productRouter);
app.use("/user", authRoute);
// Image storage engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage }); //multer is middleware — it modifies the req object to add req.file. here the middleware we named upload

// upload endpoint
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

app.listen(PORT, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running on PORT ${PORT}`);
});
