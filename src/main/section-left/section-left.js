import "./section-left.css";
import photo1 from "../../assets/photo1.jpg";
import { FormattedMessage } from "react-intl";

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
        </p>
      </div>
      <img src={photo1}></img>
    </div>
  );
}

export default SectionLeft;
