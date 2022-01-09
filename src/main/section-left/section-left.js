import "./section-left.css";
import photo1 from "../../assets/photo1.jpg";
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSckwW5edfTWEGNM2a97ALVEw4tfyfNbkcVfkOvZxsU3MRa1nA/viewform">
              <FormattedMessage id="app.tickets" />
              <FeatherIcon size="20" className="icon" icon="shopping-cart" />
            </a>
          </h6>
        </p>
      </div>
      <img src={photo1}></img>
    </div>
  );
}

export default SectionLeft;
