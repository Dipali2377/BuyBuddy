import "./Navbar.css";
import nav_logo from "../../assets/nav-logo.png";
import admin_profile from "../../assets/admin-profile.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={nav_logo} alt="" className="nav-logo" />
      <img src={admin_profile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
