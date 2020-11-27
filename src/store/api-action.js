import {loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute, saveAuthorizationInfo, loadFilmById, setCommentSending, setCommentSendError, setIsFilmByIdLoading} from "./action";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapters";
import {AuthorizationStatus, StatusIsFavorite} from "../const";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromo(adaptFilmToClient(data))))
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
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(saveAuthorizationInfo(response.data));
    })
    .catch((err) => {
      if (err.response.status === 401) {
        dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      } else {
        throw err;
      }
    })
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => dispatch(saveAuthorizationInfo(response.data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

const fetchFilmById = (filmId) => (dispatch, _getState, api) => (
  api.get(`/films/${filmId}`)
    .then(({data}) => {
      dispatch(loadFilmById(adaptFilmToClient(data)));
      dispatch(setIsFilmByIdLoading(false));
    })
    .catch(() => {
      dispatch(setIsFilmByIdLoading(true));
    })
);

const sendComment = (filmId, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${filmId}`, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(`/films/${filmId}`));
      dispatch(setCommentSending(false));
      dispatch(setCommentSendError(false));
    })
    .catch(() => {
      dispatch(setCommentSending(false));
      dispatch(setCommentSendError(true));
    })
);

const sendFavoriteStatus = (filmId, isFavorite) => (dispatch, _getState, api) => (
  api.post(`/favorite/${filmId}/${isFavorite ? StatusIsFavorite.REMOVE : StatusIsFavorite.ADD}`)
    .then(() => {
      dispatch(fetchPromoFilm());
      dispatch(fetchFilmById(filmId));
    })
);

export {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, checkAuth, login, fetchFilmById, sendComment, sendFavoriteStatus};
