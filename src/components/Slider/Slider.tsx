import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner1 from '../../assets/images/images_banner/banner_slider_1.webp';
import banner2 from '../../assets/images/images_banner/banner_slide_2.webp';
import banner3 from '../../assets/images/images_banner/banner_slider_3.webp';


const MyOwlCarousel = () => {
  const options = {
    loop: true,
    items: 1,
    autoplay: true
  };
  
  return (
    <OwlCarousel className="owl-theme" {...options} >
      <div className="item">
        <img
          src={banner1}
          alt="road"
        />
      </div>
      <div className="item">
        <img
          src={banner2}
          alt="sunrise"
        />
      </div>
      <div className="item">
        <img
          src={banner3}
          alt="road2"
        />
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;
