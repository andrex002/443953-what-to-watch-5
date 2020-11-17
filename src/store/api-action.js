import {loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute, saveAuthorizationInfo} from "./action";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapters";
import {AuthorizationStatus} from "../const";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(loadPromo(adaptFilmToClient(data)));
    })
    .catch((error) => {
      throw error;
    })
);

const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavorites(data.map(adaptFilmToClient))))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadComments(data.map(adaptCommentToClient))))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    // .catch((err) => {
    //   throw err;
    // })
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => dispatch(saveAuthorizationInfo(response.data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, checkAuth, login};
