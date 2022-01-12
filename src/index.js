import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { IntlProvider } from "react-intl";
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import messages_nl from "./translations/nl.json";
import messages_fr from "./translations/fr.json";
import Hero from "./Router";

const messages = {
  nl: messages_nl,
  //de: messages_de,
  en: messages_en,
  // fr: messages_fr,
};

let language;

if (
  navigator.language.split(/[-_]/)[0] === "nl" ||
  navigator.language.split(/[-_]/)[0] === "en"
) {
  language = navigator.language.split(/[-_]/)[0];
} else {
  language = "en";
}

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Hero />
  </IntlProvider>,
  document.getElementById("root")
);
