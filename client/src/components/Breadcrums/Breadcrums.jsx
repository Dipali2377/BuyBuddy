import "../Breadcrums/Breadcrums.css";
import arrow_icon from "/BuyBuddy/client/src/assets/arrow.png";
const Breadcrums = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <div className="breadcrums">
      HOME{" "}
      <img
        src={arrow_icon}
        alt=""
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      />{" "}
      SHOP{" "}
      <img
        src={arrow_icon}
        alt=""
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      />
      {product.category}
      <img
        src={arrow_icon}
        alt=""
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      />
      {product.name}
    </div>
  );
};

export default Breadcrums;
