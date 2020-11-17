const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  CHANGE__FILTER: `CHANGE__FILTER`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  CLEAR_SHOWN_FILMS: `CLEAR_SHOWN_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SAVE_AUTHORIZATION_INFO: `SAVE_AUTHORIZATION_INFO`
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
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

export {ActionType, loadFilms, loadPromo, loadFavorites, loadComments, changeFilter, showMoreFilms, clearShownFilms, requireAuthorization, redirectToRoute, saveAuthorizationInfo};
