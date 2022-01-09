import "./section-media.css";
import photo4 from "../../assets/photo4.jpg";
import { FormattedMessage } from "react-intl";
import FeatherIcon from "feather-icons-react";

function SectionMedia() {
  return (
    <div className="section-media" id="scrollto">
      <div className="text">
        <h2 className="titel">
          <FormattedMessage id="app.mediaTitle" values={{ br: <br /> }} />
        </h2>
        <p className="content">
          <FormattedMessage id="app.mediaContent" values={{ br: <br /> }} />
          <h6>
            <a
              href="https://imagotijl.onzealbum.be/#!home"
              target="_blank"
              rel="noreferrer"
            >
              Foto’s van onze huisfotograaf, Jean Vandijck
              <FeatherIcon size="20" className="icon" icon="camera" />
            </a>
          </h6>
          <h6>
            <a
              href="https://2021.fotopelt.be/2021/10/10/imago-tijl-herleeft-9-10-okt-21-gerard-coenen/"
              target="_blank"
              rel="noreferrer"
            >
              Foto’s van Imago Tijl herleeft (Gerard Coenen)
              <FeatherIcon size="20" className="icon" icon="camera" />
            </a>
          </h6>
        </p>
      </div>
      <img src={photo4}></img>
    </div>
  );
}

export default SectionMedia;
