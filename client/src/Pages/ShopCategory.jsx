import React, { useContext } from "react";
import "../Pages/CSS/ShopCategory.css";
import { ShopContext } from "@/Context/ShopContext";
import dropndown_icon from "../assets/dropdown.png";
import Item from "@/components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
      <div className="shop-category">
        <img
          src={props.banner}
          alt=""
          className="banner-img shopcategory-banner"
        />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropndown_icon} alt="" className="dropdown" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            console.log(
              "Item Category:",
              item.category,
              "Props Category:",
              props.category
            );
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">Explore More</div>
      </div>
    </>
  );
};

export default ShopCategory;
