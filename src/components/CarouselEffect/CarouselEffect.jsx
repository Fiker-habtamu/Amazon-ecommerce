import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './CarouselEffect.css'

import { img } from "./img/data";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((EachImg) => (
          <img src={EachImg} alt="images" />
        ))}
      </Carousel>
	  <div className="carouselBefore"></div>
    </div>
  );
}

export default CarouselEffect;
