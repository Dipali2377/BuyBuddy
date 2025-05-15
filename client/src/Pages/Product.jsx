import Breadcrums from "@/components/Breadcrums/Breadcrums";
import { ShopContext } from "@/Context/ShopContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <>
      <div>
        <Breadcrums product={product} />
      </div>
    </>
  );
};

export default Product;
