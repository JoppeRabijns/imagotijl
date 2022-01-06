import "./section-right.css";
import photo2 from "../../assets/photo2.jpg";

function SectionRight() {
  return (
    <div className="section-right">
      <div className="text">
        <h2 className="titel">Wie zijn wij</h2>
        <p className="content">
          Imago Tijl is dans, is vlaggen, is jongens en meisjes, is vriendschap,
          is reizen, is verwonderen, is een ervaring om nooit te vergeten.
          <br />
          <br />
          Imago Tijl werd opgericht als Keurgroep Tijl in 1957. Sinds jaar en
          dag dansten jongens en meisjes van het Sint-Hubertuscollege de wereld
          rond. Vanaf 2020 kunnen alle leerlingen van de WICO-scholen in Pelt
          deel uitmaken van Imago Tijl.
          <br />
          <br />
          Onder leiding van wijlen ere-choreografe Alicia Borghten ontwikkelde
          de dansgroep een volstrekt unieke stijl die Imago Tijl naar podia
          voerde in de meeste Europese landen en naar Amerika, Afrika en Azië.
          <br />
          <br />
          Dansgroep Imago Tijl krijgt, met haar meer dan 100 dansers, waardering
          vanuit alle hoeken van de podiumkunsten.
          <br />
          <br />
          Elk schooljaar werken de huidige choreografen Luc Morren en Birgit
          Hannes een avondvullend programma uit dat in de lente van het lopende
          jaar wordt gepresenteerd in het Neerpeltse Dommelhof theater.
          <br />
          <br />
          Het verhaal van Imago Tijl danst steeds verder. Aan de horizon wenken
          steeds nieuwe uitdagingen en projecten. Aan u om ze samen met ons te
          ontdekken.
        </p>
      </div>
      <img src={photo2}></img>
    </div>
  );
}

export default SectionRight;
