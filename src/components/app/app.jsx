import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../mylist-screen/mylist-screen";
import PlayerScreen from "../player-screen/player-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";

const App = (props) => {
  const {film} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen film={film} />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id">
          <FilmScreen />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
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
