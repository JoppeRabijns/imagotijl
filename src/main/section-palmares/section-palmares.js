import "./section-palmares.css";
import photo5 from "../../assets/photo5.jpg";
import { FormattedMessage } from "react-intl";

function SectionPalmares() {
  return (
    <div className="section-palmares" id="scrollto">
      <div className="text">
        <h2 className="titel">
          <FormattedMessage id="app.palmaresTitle" />
        </h2>
        <p className="content">
          <b>Op het palmares van Imago Tijl staat o.a.:</b>
          <ul>
            <li> de publieksprijs in het Spaanse Santander (1972)</li>
            <li>de muziekprijs van de provincie Limburg (1974)</li>
            <li> de medaille van de Vlaamse regering (1983)</li>
            <li> werd cultureel ambassadeur van Vlaanderen (1995)</li>
            <li> won de cultuurpijs Neerpelt (2006).</li>
          </ul>
          <b>Imago Tijl werkte mee aan de volgende films: </b>
          <ul>
            <li> Brussel (ZDF)</li>
            <li> Het trappenhuis</li>
            <li> Sportbiënale</li>
            <li> Belgica Cantat</li>
            <li> coVida (eigen beheer)</li>
          </ul>
          <b> Imago Tijl verzorgde onder meer de openingsceremonies van:</b>
          <ul>
            <li> Theater op de Markt (2002)</li>
            <li> WK Wielrennen in Zolder (2002)</li>
            <li> Het Internationaal Lachfestival (2003)</li>
            <li> De Vijflandenontmoeting (2001, 2007, 2012)</li>
            <li>
              Het Europees Muziekfestival voor de Jeugd in Neerpelt (jaarlijks)
            </li>
            <li> EK Judo (2011)</li>
            <li>
              Intrede van Sinterklaas in Antwerpen voor Ketnet ( 2008 - tot
              heden)
            </li>
            <li>modeshow in Parijs voor 20 jaar A.F. Vandevorst (2018)</li>
          </ul>
          <b>
            De jonge dansers schitterden in verschillende voorstellingen met
            live orkest
          </b>
          <ul>
            <li> ‘When Music dances’ ism EVacO (2000, 2005, 2009)</li>
            <li>
              ‘Allegro con danza’ ism het jeugdorkest van de jeugdmuziekschool
              Bree
            </li>
          </ul>
        </p>
      </div>
      <img src={photo5}></img>
    </div>
  );
}

export default SectionPalmares;
