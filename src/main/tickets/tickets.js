import "./tickets.css";
import FeatherIcon from "feather-icons-react";
import { FormattedMessage } from "react-intl";

function Tickets() {
  return (
    <div className="tickets">
      <div className="event">
        <div className="dateandname">
          <div className="date">
            <h2>08</h2>
            <div className="weekmonth">
              <h6>VRIJ</h6>
              <h6>OKT</h6>
            </div>
          </div>
          <h2> A Blue Shelter - College Pelt</h2>
        </div>
        <div className="ticket">
          <h6>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckwW5edfTWEGNM2a97ALVEw4tfyfNbkcVfkOvZxsU3MRa1nA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="app.tickets" />
              <FeatherIcon size="20" className="icon" icon="shopping-cart" />
            </a>
          </h6>
        </div>
      </div>
      <div className="event">
        <div className="dateandname">
          <div className="date">
            <h2>08</h2>
            <div className="weekmonth">
              <h6>VRIJ</h6>
              <h6>OKT</h6>
            </div>
          </div>
          <h2> A Blue Shelter - College Pelt</h2>
        </div>
        <div className="ticket">
          <h6>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckwW5edfTWEGNM2a97ALVEw4tfyfNbkcVfkOvZxsU3MRa1nA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="app.tickets" />
              <FeatherIcon size="20" className="icon" icon="shopping-cart" />
            </a>
          </h6>
        </div>
      </div>
      <div className="event">
        <div className="dateandname">
          <div className="date">
            <h2>08</h2>
            <div className="weekmonth">
              <h6>VRIJ</h6>
              <h6>OKT</h6>
            </div>
          </div>
          <h2> A Blue Shelter - College Pelt</h2>
        </div>
        <div className="ticket">
          <h6>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckwW5edfTWEGNM2a97ALVEw4tfyfNbkcVfkOvZxsU3MRa1nA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="app.tickets" />
              <FeatherIcon size="20" className="icon" icon="shopping-cart" />
            </a>
          </h6>
        </div>
      </div>
      <div className="event">
        <div className="dateandname">
          <div className="date">
            <h2>08</h2>
            <div className="weekmonth">
              <h6>VRIJ</h6>
              <h6>OKT</h6>
            </div>
          </div>
          <h2> A Blue Shelter - College Pelt</h2>
        </div>
        <div className="ticket">
          <h6>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckwW5edfTWEGNM2a97ALVEw4tfyfNbkcVfkOvZxsU3MRa1nA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="app.tickets" />
              <FeatherIcon size="20" className="icon" icon="shopping-cart" />
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
