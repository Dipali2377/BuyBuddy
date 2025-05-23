import { useEffect, useState } from "react";
import "./ListProduct.css";
import axios from "axios";
import remove_icon from "../../assets/remove-icon.png";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios(
        "http://localhost:5000/products/allproducts"
      );
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await axios.delete("http://localhost:5000/products/removeproduct", {
        data: { id },
      });
      toast.success("Product deleted successfully");
      fetchInfo();
    } catch (error) {
      toast.error("Failed to delete product");
      console.log(error);
    }
  };
  return (
    <div className="list-product">
      <h1 className="listproduct-heading">All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products </p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={index}>
            <div className="listproduct-format-main listproducts-format">
              <img
                src={product.image}
                alt=""
                className="listproducts-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                src={remove_icon}
                alt=""
                className="listproducts-remove-icon"
                style={{ height: "18x", width: "20px" }}
                onClick={() => {
                  Swal.fire({
                    title: `Delete "${product.name}"?`,
                    text: "This action cannot be undone.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      removeProduct(product.id);
                    }
                  });
                }}
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
