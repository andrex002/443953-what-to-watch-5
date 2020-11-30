import React from "react";
import {PropTypes} from "prop-types";
import {Redirect} from 'react-router-dom';
import FilmPageOverview from "../film-page-overview/film-page-overview";
import FilmPageDetails from "../film-page-details/film-page-details";
import FilmPageReviews from "../film-page-reviews/film-page-reviews";
import {FilmTabs} from "../../const";

const Tabs = (props) => {
  const {film, activeTab, onActiveTab} = props;
  const {genre, year, rating, description, director, actors, duration, id} = film;

  const getFilmPageContent = () => {
    switch (activeTab) {
      case FilmTabs.OVERVIEW:
        return (
          <FilmPageOverview
            rating={rating}
            description={description}
            director={director}
            actors={actors}
          />
        );
      case FilmTabs.DETAILS:
        return (
          <FilmPageDetails
            director={director}
            actors={actors}
            duration={duration}
            genre={genre}
            year={year}
          />
        );
      case FilmTabs.REVIEWS:
        return (
          <FilmPageReviews
            filmId={id}
          />
        );
    }
    return <Redirect to="/" />;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(FilmTabs).map((value, i) => {
            return (
              <li key={`${i} - ${value}`} className={value === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                <a
                  onClick={(evt) => {
                    evt.preventDefault();
                    onActiveTab(value);
                  }}
                  href="#"
                  className="movie-nav__link">{value}
                </a>
              </li>
            );
          })}

        </ul>
      </nav>

      {getFilmPageContent()}

    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }),
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
  activeTab: PropTypes.string.isRequired,
  onActiveTab: PropTypes.func.isRequired
};

export default Tabs;
