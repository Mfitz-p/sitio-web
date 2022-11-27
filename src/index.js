import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import { setCookie, getCookie } from "./functions/cookie";
const root = ReactDOM.createRoot(document.getElementById("root"));
const urlSearch = window.location.search
const urlParams = new URLSearchParams(urlSearch);
let temp = getCookie("Language");
if (urlParams.get("leng")) {
  temp = urlParams.get("leng");
}
if (temp === "") {
  temp = window.navigator.language.slice(0, 2);
}

if (temp !== "es" && temp !== "en") {
  temp = "es";
  setCookie("Language", temp);
}
i18next.init({
  interpolation: { escapeValue: false },
  lng: temp,
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
