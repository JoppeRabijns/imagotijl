import "./section-left.css";
import photo1 from "../../assets/photo1.jpg";
import photo6 from "../../assets/photo6.jpg";
import { FormattedMessage } from "react-intl";
import FeatherIcon from "feather-icons-react";

function SectionLeft() {
  return (
    <div className="section-left" id="scrollto">
      <div className="text">
        <h2 className="titel">
          <FormattedMessage id="app.ablueshelterTitle" />
        </h2>
        <p className="content">
          <FormattedMessage
            id="app.ablueshelterContent"
            values={{ br: <br /> }}
          />
          <h6>
            <a
              href="https://ticketshop.ticketmatic.com/dommelhof/shop-4"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="app.tickets" />
              <FeatherIcon size="20" className="icon" icon="shopping-cart" />
            </a>
          </h6>
          <br></br>
        </p>
        <img src={photo6} className="poster"></img>
      </div>
      <img src={photo1} className="image"></img>
    </div>
  );
}

export default SectionLeft;
