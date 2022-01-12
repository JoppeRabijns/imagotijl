import "./tickets.css";
import FeatherIcon from "feather-icons-react";
import { FormattedMessage } from "react-intl";

function Tickets() {
  return (
    <div className="tickets">
      <div className="event">
        <div className="dateandname">
          <div className="date">
            <h2>04 </h2>
            <div className="weekmonth">
              <h6>VRIJ</h6>
              <h6>FEB</h6>
            </div>
          </div>
          <h2> 20:15 - Memory Lane - Dommelhof</h2>
        </div>
        <div className="ticket">
          <h6>
            <a
              href="https://apps.ticketmatic.com/widgets/dommelhof/addtickets?accesskey=4b1010ceb643ecc95f3d72b8&event=10315&flow=returnorcheckout&returnurl=http%3A%2F%2Fticketshop.ticketmatic.com%2Fdommelhof%2Fshop-4%2Freturn&saleschannelid=10000&signature=71087a28b325a57d92fa0dd195927fd66613210cbfd58517a312dcd7c14cce83&skinid=10000#!/addtickets"
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
            <h2>05</h2>
            <div className="weekmonth">
              <h6>ZAT</h6>
              <h6>FEB</h6>
            </div>
          </div>
          <h2> 20:15 - Memory Lane - Dommelhof</h2>
        </div>
        <div className="ticket">
          <h6>
            <a
              href="https://apps.ticketmatic.com/widgets/dommelhof/addtickets?accesskey=4b1010ceb643ecc95f3d72b8&event=10316&flow=returnorcheckout&l=nl&returnurl=http%3A%2F%2Fticketshop.ticketmatic.com%2Fdommelhof%2Fshop-4%2Freturn%3Fl%3Dnl&saleschannelid=10000&signature=e8a3e0959dbcb4b6f6162be3741847f29b9c30dbd04586c67f71d2a311e78044&skinid=10000#!/addtickets"
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
            <h2>06</h2>
            <div className="weekmonth">
              <h6>ZON</h6>
              <h6>FEB</h6>
            </div>
          </div>
          <h2> 15:00 - Memory Lane - Dommelhof</h2>
        </div>
        <div className="ticket">
          <h6>
            <a
              href="https://apps.ticketmatic.com/widgets/dommelhof/addtickets?accesskey=4b1010ceb643ecc95f3d72b8&event=10317&flow=returnorcheckout&l=nl&returnurl=http%3A%2F%2Fticketshop.ticketmatic.com%2Fdommelhof%2Fshop-4%2Freturn%3Fl%3Dnl&saleschannelid=10000&signature=95bd88f98c0ed00b61c80cdf7792bbfe6920b7818668af213d9ff2a8798cb770&skinid=10000#!/addtickets"
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
