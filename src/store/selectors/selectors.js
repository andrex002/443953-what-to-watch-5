import {createSelector} from "reselect";

const getFilms = ({DATA}) => DATA.allFilms;
const getActiveGenre = ({FILTER}) => FILTER.activeGenre;

const getFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, activeGenre) => {
      if (activeGenre === `All genres`) {
        return films;
      }
      return films.filter((film) => film.genre === activeGenre);
    }
);

export {getFilmsByGenre};
