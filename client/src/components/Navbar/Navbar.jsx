import "../Navbar/Navbar.css";
import logo from "/BuyBuddy/client/src/assets/logo.png";
import cart from "/BuyBuddy/client/src/assets/cart.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Get current route for underline logic
  const currentPath = location.pathname;

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" style={{ height: "50px", width: "50px" }} />
        <p>BUYBUDDY</p>
      </div>
      <ul className="nav-menu">
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
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" style={{ height: "50px", width: "50px" }} />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
