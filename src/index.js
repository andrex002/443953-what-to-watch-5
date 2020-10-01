import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const film = {
  title: `The Grand Budapest Hotel - 2`,
  genre: `Comedy`,
  year: 2020
};

ReactDOM.render(
    <App film={film} />,
    document.querySelector(`#root`)
);
