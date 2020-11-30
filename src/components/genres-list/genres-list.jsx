import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeFilter, clearShownFilms} from "../../store/action";
import {getGenreName} from "../../utils";
import {FilmGenres} from "../../const";

const GenresList = (props) => {
  const {films, activeGenre, onGenreClick} = props;
  const allGenreList = [FilmGenres.ALL_GENRES, ...new Set(films.map((film) => film.genre))];

  const getGenreItemClass = (genre) => {
    return activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
  };

  return (
    <ul className="catalog__genres-list">
      {
        allGenreList.map((genre, i) => {
          return (
            <li key={`genre - ${i}`} className={getGenreItemClass(genre)}>
              <a
                onClick={(evt) => {
                  evt.preventDefault();
                  onGenreClick(genre);
                }}
                href="#"
                className="catalog__genres-link">{getGenreName(genre)}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA, FILTER}) => ({
  films: DATA.allFilms,
  activeGenre: FILTER.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(changeFilter(activeGenre));
    dispatch(clearShownFilms());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
