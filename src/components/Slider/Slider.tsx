import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const MyOwlCarousel = () => {
  const options = {
    loop: true,
    items: 1,
    autoplay: true
  };

  return (
    <OwlCarousel className="owl-theme" {...options} >
      <div className="item">
        <div className="slide-1">
        </div>
      </div>
      <div className="item">
        <div className="slide-2">
        </div>
      </div>
      <div className="item">
        <div className="slide-3">
        </div>
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;
