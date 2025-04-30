import "./Footer.css";
import footerLogo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import pinerest from "../../assets/pinterest.png";
import whatsapp from "../../assets/whatsapp.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src={footerLogo}
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
        <p>BuyBuddy</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinerest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
