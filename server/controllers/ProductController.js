import express from "express";
import productModel from "../models/productModel.js";

// add product
const addproduct = async (req, res) => {
  try {
    let products = await productModel.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new productModel({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log("Saving product:", product);
    await product.save();
    console.log("Saved");

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Error in addproduct:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
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

// new collection data

const newCollection = async (req, res) => {
  try {
    let products = await productModel.find();

    let newcollection = products.slice(1).slice(-8);

    console.log("New collection fetched");

    res.send(newcollection);
  } catch (error) {}
};

export { addproduct, deleteproduct, getproducts, newCollection };
