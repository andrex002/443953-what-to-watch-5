import {ActionType} from "../../action";
import {filmsCount} from "../../../const";

const initialState = {
  allFilms: [],
  filteredFilms: [],
  promoFilm: {},
  currentFilm: {},
  favoriteFilms: [],
  comments: [],
  numberFilmsShown: filmsCount.PER_STEP,
  isCommentSending: false,
  isCommentSendError: false,
  isFilmByIdLoading: true
};

const getNumberFilmsShown = (state) => {
  return Math.min(state.filteredFilms.length, state.numberFilmsShown + filmsCount.PER_STEP);
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        allFilms: action.payload,
        filteredFilms: action.payload
      });
    case ActionType.LOAD_FILM:
      return Object.assign({}, state, {
        currentFilm: action.payload
      });
    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promoFilm: action.payload
      });
    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favoriteFilms: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload
      });
    case ActionType.SHOW_MORE_FILMS:
      return Object.assign({}, state, {
        numberFilmsShown: getNumberFilmsShown(state)
      });
    case ActionType.CLEAR_SHOWN_FILMS:
      return Object.assign({}, state, {
        numberFilmsShown: filmsCount.PER_STEP
      });
    case ActionType.SET_COMMENT_SENDING:
      return Object.assign({}, state, {
        isCommentSending: action.payload
      });
    case ActionType.SET_COMMENT_SEND_ERROR:
      return Object.assign({}, state, {
        isCommentSendError: action.payload
      });
    case ActionType.SET_FILM_BY_ID_LOADING:
      return Object.assign({}, state, {
        isFilmByIdLoading: action.payload,
      });
    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favoriteFilms: action.payload,
      });
  }

  return state;
};

export {filmsData};
