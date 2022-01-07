import React from "react";
import "./Sponsors.css";
import Slider from "react-slick";

import Logo1 from "../../assets/sponsors/logo1.jpeg";
import Logo2 from "../../assets/sponsors/logo2.png";
import Logo3 from "../../assets/sponsors/logo3.png";
import Logo4 from "../../assets/sponsors/logo4.jpeg";
import Logo5 from "../../assets/sponsors/logo5.png";

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="sponsors">
      <img src={Logo1} className="sponsorLogo"></img>
      <img src={Logo2} className="sponsorLogo"></img>
      <img src={Logo3} className="sponsorLogo"></img>
      <img src={Logo4} className="sponsorLogo"></img>
      <img src={Logo5} className="sponsorLogo"></img>
    </Slider>
  );
};

export default Sponsors;
