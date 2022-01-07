import "./section-media.css";
import photo1 from "../../assets/photo1.jpg";
import { FormattedMessage } from "react-intl";

function SectionMedia() {
  return (
    <div className="section-media" id="scrollto">
      <div className="text">
        <h2 className="titel">
          <FormattedMessage id="app.mediaTitle" values={{ br: <br /> }} />
        </h2>
        <p className="content">
          <FormattedMessage id="app.mediaContent" values={{ br: <br /> }} />
        </p>
      </div>
      <img src={photo1}></img>
    </div>
  );
}

export default SectionMedia;
