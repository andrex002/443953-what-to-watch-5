import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

const FilmCardsList = (props) => {
  const {films, onFilmCardClick, activeFilmCard, handleHoverFilmCard} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <FilmCard
            id={film.id}
            key={film.id}
            title={film.title}
            image={film.image}
            handleHoverFilmCard={handleHoverFilmCard}
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  })),
  activeFilmCard: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  handleHoverFilmCard: PropTypes.func.isRequired
};

export default FilmCardsList;
