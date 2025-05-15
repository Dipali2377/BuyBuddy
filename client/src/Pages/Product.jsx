import Breadcrums from "@/components/Breadcrums/Breadcrums";
import DescriptionBox from "@/components/DescriptionBox/DescriptionBox";
import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
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
        <ProductDisplay product={product} />
        <DescriptionBox />
      </div>
    </>
  );
};

export default Product;
