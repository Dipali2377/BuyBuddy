import express from "express";
import {
  addproduct,
  deleteproduct,
  getproducts,
} from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.post("/addproduct", addproduct);
productRouter.delete("/removeproduct", deleteproduct);
productRouter.get("/allproducts", getproducts);

export default productRouter;
