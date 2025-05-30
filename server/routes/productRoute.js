import express from "express";
import {
  addproduct,
  deleteproduct,
  getproducts,
  newCollection,
  popularinWomen,
} from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.post("/addproduct", addproduct);
productRouter.delete("/removeproduct", deleteproduct);
productRouter.get("/allproducts", getproducts);
productRouter.get("/newcollection", newCollection);
productRouter.get("/popularinwomen", popularinWomen);

export default productRouter;
