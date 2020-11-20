import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../mylist-screen/mylist-screen";
import PlayerScreen from "../player-screen/player-screen";
import withPlayerScreen from "../../hocs/with-player-screen/with-player-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";

const PlayerScreenWrapped = withPlayerScreen(PlayerScreen);

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        >
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <PrivateRoute exact path="/mylist"
          render={({history}) => (
            <MyListScreen
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        >
        </PrivateRoute>
        <Route exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmScreen
              currentFilmId={+match.params.id}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        >
        </Route>
        <PrivateRoute exact
          path="/films/:id/review"
          render={({match}) => (
            <AddReviewScreen
              currentFilmId={+match.params.id}
            />
          )}
        >
        </PrivateRoute>
        <Route exact
          path="/player/:id"
          render={({match}) => (
            <PlayerScreenWrapped currentFilmId={+match.params.id} />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
