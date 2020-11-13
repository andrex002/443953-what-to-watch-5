import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
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
    <BrowserRouter>
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
        <Route exact path="/mylist"
          render={({history}) => (
            <MyListScreen
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        >
        </Route>
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
        <Route exact
          path="/films/:id/review"
          render={({match}) => (
            <AddReviewScreen
              currentFilmId={+match.params.id}
            />
          )}
        >
        </Route>
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
