import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

const FilmCardsList = (props) => {
  const {films, onFilmCardClick, activeFilmCard, onFilmCardHover} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <FilmCard
            id={film.id}
            key={film.id}
            title={film.title}
            image={film.image}
            onFilmCardHover={onFilmCardHover}
            onFilmCardClick={onFilmCardClick}
            srcVideo={film.video}
            isActive={film.id === activeFilmCard}
          />
        );
      })}
    </div>
  );

};

FilmCardsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  })),
  activeFilmCard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardHover: PropTypes.func.isRequired
};

export default FilmCardsList;
