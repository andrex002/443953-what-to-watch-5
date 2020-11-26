import {ActionType} from "../../action";
import {filmsFilter} from "./films-filter";

const genre = `All genres`;

const mockInitialState = {
  activeGenre: genre,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsFilter(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should change filter by a genre`, () => {
  expect(filmsFilter(mockInitialState, {
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  })).toEqual(Object.assign({}, mockInitialState, {
    activeGenre: genre
  }));
});