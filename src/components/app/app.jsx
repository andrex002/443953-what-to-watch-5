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
  const {films, promoFilm} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              films={films}
              promoFilm={promoFilm}
              onFilmCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        >
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist"
          render={({history}) => (
            <MyListScreen
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        >
        </Route>
        <Route exact
          path="/films/:id"
          render={({history}) => (
            <FilmScreen
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              films={films} />
          )}
        >
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen promoFilm={promoFilm} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default App;
