import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {title, image, id, onHover, onFilmCardClick} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      data-id={id}
      onMouseOver={() => onHover(id)}
      onClick={() => onFilmCardClick(id)}
    >
      <div className="small-movie-card__image">
        <img src={`img/${image}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default FilmCard;
