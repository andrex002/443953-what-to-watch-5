import {combineReducers} from "redux";
import {filmsData} from "./films-data/films-data";
import {filmsFilter} from "./films-filter/films-filter";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  FILTER: `FILTER`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.FILTER]: filmsFilter,
  [NameSpace.USER]: user
});
