import React from "react";
import CarouselEffect from "../../components/CarouselEffect/CarouselEffect";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import Products from "../../components/Products/Products";

function Landing() {
  return (
    <>
      <CarouselEffect />
      <CategoryGrid />
      <Products />
    </>
  );
}

export default Landing;
