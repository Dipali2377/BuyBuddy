import "./Popular.css";
// import data_product from "../../assets/data";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import axios from "axios";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  const fetchPouplarProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/popularinwomen`
      );

      setPopularProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPouplarProducts();
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
