import {films} from "../mocks/films";
import {ActionType} from "./action";
const initialState = {
  activeGenre: `All genres`,
  allFilms: films,
  filteredFilms: films
};

const getFilteredFilms = (activeGenre) => {
  if (activeGenre === `All genres`) {
    return films;
  }
  return films.filter((film) => film.genre === activeGenre);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE__FILTER:
      return Object.assign({}, state, {activeGenre: action.payload});
    case ActionType.GET_FILMS_BY_GENRE:
      return Object.assign({}, state, {
        filteredFilms: getFilteredFilms(action.payload)
      });
  }

  return state;
};

export {reducer};
