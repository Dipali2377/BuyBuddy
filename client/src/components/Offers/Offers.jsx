import "./Offers.css";
import exclusive from "../../assets/exclusive.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img
          src={exclusive}
          alt=""
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </div>
  );
};

export default Offers;
