import "./AddProduct.css";
import uploadArea from "../../assets/uploadArea.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    try {
      console.log(productDetails);

      let product = productDetails;

      let formData = new FormData();

      formData.append("product", image);

      const uploadResponse = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // If upload is successful, proceed to set image URL and log product
      if (uploadResponse.data.success) {
        product.image = uploadResponse.data.image_url;
        // console.log(product);

        const productResponse = await axios.post(
          "http://localhost:5000/products/addproduct",
          product
        );

        if (productResponse.data.success) {
          toast.success("Product added successfully");
          setProductDetails({
            name: "",
            image: "",
            category: "women",
            new_price: "",
            old_price: "",
          });
        } else {
          toast.error("Failed to add product");
        }
      } else {
        toast.error("Image upload failed");
      }
    } catch (err) {
      toast.error("Something went wrong during upload");
    }
  };
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Type here"
          value={productDetails.name}
          onChange={changeHandler}
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            id=""
            placeholder="Type here"
            value={productDetails.old_price}
            onChange={changeHandler}
          />
        </div>

        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            id=""
            placeholder="Type here"
            value={productDetails.new_price}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          id=""
          className="add-product-selector"
          value={productDetails.category}
          onChange={changeHandler}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            alt=""
            className="addproduct-thumnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          addProduct();
        }}
        className="addproduct-btn"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
