import axios from "axios";
import Item from "../Item/Item";
import "./NewCollections.css";
import { useEffect, useState } from "react";
// import new_collections from "@/assets/NewCollections";
const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);

  const fetchNewCollection = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/newcollection`
      );
      setNew_Collection(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNewCollection();
  }, []);
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collections">
        {new_collection.map((item, i) => {
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
export default NewCollections;
