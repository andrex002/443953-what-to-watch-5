import {films} from "../mocks/films";
import {ActionType} from "./action";
import {filmsCount} from "../const";

const initialState = {
  activeGenre: `All genres`,
  allFilms: films,
  filteredFilms: films,
  numberFilmsShown: filmsCount.PER_STEP
};

const getFilteredFilms = (activeGenre) => {
  if (activeGenre === `All genres`) {
    return films;
  }
  return films.filter((film) => film.genre === activeGenre);
};

const getNumberFilmsShown = (state) => {
  return Math.min(state.filteredFilms.length, state.numberFilmsShown + filmsCount.PER_STEP);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE__FILTER:
      return Object.assign({}, state, {activeGenre: action.payload});
    case ActionType.GET_FILMS_BY_GENRE:
      return Object.assign({}, state, {
        filteredFilms: getFilteredFilms(action.payload)
      });
    case ActionType.SHOW_MORE_FILMS:
      return Object.assign({}, state, {numberFilmsShown: getNumberFilmsShown(state)});
    case ActionType.CLEAR_SHOWN_FILMS:
      return Object.assign({}, state, {numberFilmsShown: filmsCount.PER_STEP});
  }

  return state;
};

export {reducer};
