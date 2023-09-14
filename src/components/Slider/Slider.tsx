import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './style.scss';


const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true
  };
  
  return (
    <OwlCarousel className="owl-theme" {...options} >
      <div className="item">
        <img
          src="https://file.hstatic.net/1000281824/file/16_9469423570d04edc87abccc64a86c8c5.png"
          alt="road"
        />
      </div>
      <div className="item">
        <img
          src="https://file.hstatic.net/1000281824/file/7_dfa0047c816746de854f38a0160c455c.png"
          alt="sunrise"
        />
      </div>
      <div className="item">
        <img
          src="https://file.hstatic.net/1000281824/file/12_6d5024ccf885476b8e92ae8c954d500f.png"
          alt="road2"
        />
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;
