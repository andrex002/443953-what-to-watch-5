import {loadFilms, loadPromo, loadFavorites, loadComments} from "./action";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapters";

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

export {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments};
