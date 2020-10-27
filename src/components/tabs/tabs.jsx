import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import {Redirect} from 'react-router-dom';
import FilmPageOverview from "../film-page-overview/film-page-overview";
import FilmPageDetails from "../film-page-details/film-page-details";
import FilmPageReviews from "../film-page-reviews/film-page-reviews";

const FilmTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmTab: FilmTabs.OVERVIEW
    };
  }

  render() {
    const {film} = this.props;
    const {genre, year, rating, description, director, actors, duration, reviews} = film;

    const getFilmPageContent = () => {
      switch (this.state.filmTab) {
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
              reviews={reviews}
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
                <li key={`${i} - ${value}`} className={value === this.state.filmTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                  <a
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.setState({
                        filmTab: value
                      });
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
  }
}

Tabs.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }),
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    duration: PropTypes.number.isRequired,
  })
};

export default Tabs;
