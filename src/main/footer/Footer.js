import "./Footer.css";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <div className="footer">
      <h2>
        <FormattedMessage id="app.contacteerons" />
      </h2>
      <p>
        Imago Tijl
        <br />
        Stationsstraat 25
        <br />
        3910 Neerpelt
        <br />
        <br />
        T. +32 11 64.07.01
        <br />
        F. +32 11 64.41.46
        <br />
        E. info@imagotijl.be <br />
        W. www.imagotijl.be <br />
        <br />
        Ons rekeningnummer
        <br />
        IBAN BE20 1030 1747 8256
        <br />
        BIC NICABEBB
      </p>
    </div>
  );
}

export default Footer;
