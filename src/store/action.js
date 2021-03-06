const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  CHANGE__FILTER: `CHANGE__FILTER`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  CLEAR_SHOWN_FILMS: `CLEAR_SHOWN_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SAVE_AUTHORIZATION_INFO: `SAVE_AUTHORIZATION_INFO`,
  SET_COMMENT_SENDING: `SET_COMMENT_SENDING`,
  SET_COMMENT_SEND_ERROR: `SET_COMMENT_SEND_ERROR`,
  SET_FILM_BY_ID_LOADING: `SET_FILM_BY_ID_LOADING`
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

const loadFilmById = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film
});

const loadPromo = (film) => ({
  type: ActionType.LOAD_PROMO,
  payload: film
});

const loadFavorites = (films) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: films
});

const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

const changeFilter = (genre) => ({
  type: ActionType.CHANGE__FILTER,
  payload: genre
});

const showMoreFilms = () => ({
  type: ActionType.SHOW_MORE_FILMS
});

const clearShownFilms = () => ({
  type: ActionType.CLEAR_SHOWN_FILMS
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

const saveAuthorizationInfo = (data) => ({
  type: ActionType.SAVE_AUTHORIZATION_INFO,
  payload: data
});

const setCommentSending = (bool) => ({
  type: ActionType.SET_COMMENT_SENDING,
  payload: bool
});

const setCommentSendError = (bool) => ({
  type: ActionType.SET_COMMENT_SEND_ERROR,
  payload: bool
});

const setIsFilmByIdLoading = (bool) => ({
  type: ActionType.SET_FILM_BY_ID_LOADING,
  payload: bool
});


export {ActionType, loadFilms, loadFilmById, loadPromo, loadFavorites, loadComments, changeFilter, showMoreFilms, clearShownFilms, requireAuthorization, redirectToRoute, saveAuthorizationInfo, setCommentSending, setCommentSendError, setIsFilmByIdLoading};
