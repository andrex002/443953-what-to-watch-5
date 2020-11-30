import React from "react";
import PropTypes from "prop-types";
import {getRatingLevel} from "../../utils";

const FilmPageOverview = (props) => {
  const {description, director, actors, rating} = props;
  const {score, count} = rating;

  const actorsList = actors.join(`, `);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(score)}</span>
          <span className="movie-rating__count">{count} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actorsList}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmPageOverview.propTypes = {
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  }),
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilmPageOverview;
