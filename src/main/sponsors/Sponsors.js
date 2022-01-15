import React from "react";
import "./Sponsors.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Logo1 from "../../assets/sponsors/logo1.png";
import Logo2 from "../../assets/sponsors/logo2.png";
import Logo3 from "../../assets/sponsors/logo3.png";
import Logo4 from "../../assets/sponsors/logo4.png";
import Logo6 from "../../assets/sponsors/logo6.png";
import Logo7 from "../../assets/sponsors/logo7.png";
import Logo8 from "../../assets/sponsors/logo8.png";
import Logo9 from "../../assets/sponsors/logo9.png";
import Logo10 from "../../assets/sponsors/logo10.png";
import Logo11 from "../../assets/sponsors/logo11.png";
import Logo12 from "../../assets/sponsors/logo12.png";

const Sponsors = () => {
  const getConfigurableProps = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: false,
    autoPlay: true,
    stopOnHover: false,
    swipeable: true,
    dynamicHeight: false,
    interval: 4000,
    transitionTime: 500,
    centerMode: true,
    centerSlidePercentage: 30,
  });
  return (
    <Carousel {...getConfigurableProps()} className="slider">
      <div className="sponsorLogo">
        <img alt="" src={Logo1} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo2} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo3} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo4} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo6} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo7} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo8} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo9} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo10} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo11} />
      </div>
      <div className="sponsorLogo">
        <img alt="" src={Logo12} />
      </div>
    </Carousel>
  );
};

export default Sponsors;
