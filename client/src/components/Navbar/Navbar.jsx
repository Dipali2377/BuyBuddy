import "../Navbar/Navbar.css";
import logo from "/BuyBuddy/client/src/assets/logo.png";
import cart from "/BuyBuddy/client/src/assets/cart.png";
import nav_dropdown from "../../assets/nav-dropdown-icon.png";
import { Link, useLocation } from "react-router-dom";
import { useContext, useRef } from "react";
import { ShopContext } from "@/Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  // Get current route for underline logic
  const currentPath = location.pathname;

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" style={{ height: "50px", width: "50px" }} />
        <p>BUYBUDDY</p>
      </div>
      <img
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
        className="nav-dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Shop
          </Link>
          {currentPath === "/" ? <hr /> : null}
        </li>
        <li>
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>
          {currentPath === "/mens" ? <hr /> : null}
        </li>
        <li>
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Women
          </Link>
          {currentPath === "/womens" ? <hr /> : null}
        </li>
        <li>
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>
          {currentPath === "/kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("Ecom-token") ? (
          <button
            className="logout-button"
            onClick={() => {
              localStorage.removeItem("Ecom-token");
              toast.success("Logged out successful!");
              setTimeout(() => {
                navigate("/");
              }, 2000);
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart} alt="" style={{ height: "50px", width: "50px" }} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
