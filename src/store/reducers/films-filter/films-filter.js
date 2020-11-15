import {ActionType} from "../../action";

const initialState = {
  activeGenre: `All genres`,
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
