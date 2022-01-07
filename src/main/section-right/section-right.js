import "./section-right.css";
import photo2 from "../../assets/photo2.jpg";
import { FormattedMessage } from "react-intl";

function SectionRight() {
  return (
    <div className="section-right">
      <div className="text">
        <h2 className="titel">
          <FormattedMessage id="app.wiezijnwijTitle" />
        </h2>
        <p className="content">
          <FormattedMessage
            id="app.wiezijnwijContent"
            values={{ br: <br /> }}
          />
        </p>
      </div>
      <img src={photo2}></img>
    </div>
  );
}

export default SectionRight;
