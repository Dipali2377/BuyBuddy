import "../Navbar/Navbar.css";
import logo from "/BuyBuddy/client/src/assets/logo.png";
import cart from "/BuyBuddy/client/src/assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" style={{ height: "50px", width: "50px" }} />
          <p>BUYBUDDY</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
              Shop
            </Link>{" "}
            {menu == "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link
              to="/mens"
              style={{ textDecoration: "none", color: "#626262" }}
            >
              Men
            </Link>{" "}
            {menu == "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link
              to="/womens"
              style={{ textDecoration: "none", color: "#626262" }}
            >
              Women
            </Link>{" "}
            {menu == "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link
              to="kids"
              style={{ textDecoration: "none", color: "#626262" }}
            >
              Kids
            </Link>{" "}
            {menu == "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart} alt="" style={{ height: "50px", width: "50px" }} />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
