import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {film} = props;

  return (
    <MainScreen film={film} />
  );
};

App.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default App;
