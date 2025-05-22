import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/add-product_icon.png";
import product_list from "../../assets/productList.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            className="add-product-img"
            src={add_product_icon}
            alt=""
            style={{ height: "40px", width: "40px" }}
          />

          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            src={product_list}
            alt=""
            style={{ height: "40px", width: "40px" }}
          />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
