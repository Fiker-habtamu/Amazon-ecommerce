import React from "react";
import CarouselEffect from "../../components/CarouselEffect/CarouselEffect";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import Products from "../../components/Products/Products";
import LayOut from "../../components/LayOut/LayOut";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <CategoryGrid />
      <Products />
    </LayOut>
  );
}

export default Landing;
