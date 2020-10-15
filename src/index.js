import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, promoFilm} from "./mocks/films";

ReactDOM.render(
  <App promoFilm={promoFilm} films={films} />,
    document.querySelector(`#root`)
);
