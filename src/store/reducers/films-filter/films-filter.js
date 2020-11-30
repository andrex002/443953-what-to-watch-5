import {ActionType} from "../../action";
import {FilmGenres} from "../../../const";

const initialState = {
  activeGenre: FilmGenres.ALL_GENRES,
};

const filmsFilter = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE__FILTER:
      return Object.assign({}, state, {
        activeGenre: action.payload
      });
  }

  return state;
};

export {filmsFilter};
