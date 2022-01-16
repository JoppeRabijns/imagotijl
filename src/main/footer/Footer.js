import "./Footer.css";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <>
      <div className="footer">
        <h2>
          <FormattedMessage id="app.contacteerons" />
        </h2>
        <p>
          Imago Tijl
          <br />
          Stationsstraat 25
          <br />
          3910 Pelt
        </p>
        <p>
          T. +32 11 64.07.01
          <br />
          F. +32 11 64.41.46
          <br />
          <a href="mailto:info@imagotijl.be" className="email">E. info@imagotijl.be</a>
        </p>
        <p>
          Ons rekeningnummer
          <br />
          IBAN BE20 1030 1747 8256
          <br />
          BIC NICABEBB
        </p>
      </div>
      <p className="copyright">
        <a
          href="https://adequaat.media/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <b>©</b> www.adequaat.media
        </a>
      </p>
    </>
  );
}

export default Footer;
