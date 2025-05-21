import express from "express";
import productModel from "../models/productModel.js";

// add product
const addproduct = async (req, res) => {
  try {
    let products = await productModel.find({});
    let id;

    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new productModel({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log(product);
    await product.save();
    console.log("Saved");

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete the product

const deleteproduct = async (req, res) => {
  try {
    await productModel.findOneAndDelete({ id: req.body.id });
    console.log("removed");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.log(error);
  }
};

// get the products

const getproducts = async (req, res) => {
  try {
    let products = await productModel.find({});
    console.log("products fetched ---->", products);
    res.send(products);
  } catch (error) {}
};

export { addproduct, deleteproduct, getproducts };
