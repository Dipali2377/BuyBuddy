import Popular from "@/components/Popular/Popular";
import Hero from "/BuyBuddy/client/src/components/Hero/Hero";
import React from "react";
import Offers from "@/components/Offers/Offers";

const Shop = () => {
  return (
    <>
      <div>
        <Hero />
        <Popular />
        <Offers />
      </div>
    </>
  );
};

export default Shop;
