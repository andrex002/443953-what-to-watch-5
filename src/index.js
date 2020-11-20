import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {checkAuth, fetchFilmsList, fetchPromoFilm, fetchFilmById} from "./store/api-action";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchFilmsList()),
  store.dispatch(fetchPromoFilm()),
  store.dispatch(checkAuth()),
  store.dispatch(fetchFilmById(2))
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
