import Popular from "@/components/Popular/Popular";
import Hero from "/BuyBuddy/client/src/components/Hero/Hero";
import React from "react";
import Offers from "@/components/Offers/Offers";
import NewCollections from "@/components/NewCollections/NewCollections";

const Shop = () => {
  return (
    <>
      <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
      </div>
    </>
  );
};

export default Shop;
