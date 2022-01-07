import "./Numbers.css";
import { FormattedMessage } from "react-intl";

function Numbers() {
  return (
    <div className="numbers">
      <div className="item">
        <h1 className="number">38</h1>
        <h2 className="subtitle">
          <FormattedMessage id="app.landen" />
        </h2>
      </div>
      <div className="item">
        <h1 className="number">68</h1>
        <h2 className="subtitle">
          <FormattedMessage id="app.actief" />
        </h2>
      </div>
      <div className="item">
        <h1 className="number">1957</h1>
        <h2 className="subtitle">
          <FormattedMessage id="app.jaar" />
        </h2>
      </div>
    </div>
  );
}

export default Numbers;
