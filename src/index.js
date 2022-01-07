import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import messages_nl from "./translations/nl.json";
import messages_fr from "./translations/fr.json";

const messages = {
  nl: messages_nl,
  de: messages_de,
  en: messages_en,
  fr: messages_fr,
};
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
