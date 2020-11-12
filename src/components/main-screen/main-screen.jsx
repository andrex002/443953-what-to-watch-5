import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FilmCardsList from "../film-cards-list/film-cards-list";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import {connect} from "react-redux";
import withActiveCard from "../../hocs/with-active-card/with-active-card";

const FilmCardsListWrapped = withActiveCard(FilmCardsList);

const MainScreen = (props) => {
  const {promoFilm, filteredFilms, onFilmCardClick, numberFilmsShown} = props;
  const {title, genre, year, image, bgImage, id} = promoFilm;

  const renderedFilms = filteredFilms.slice(0, numberFilmsShown);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`img/${bgImage}`} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={`img/${image}`} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`player/${id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmCardsListWrapped films={renderedFilms} onFilmCardClick={onFilmCardClick} />

          {numberFilmsShown < filteredFilms.length && <ShowMoreButton />}
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  filteredFilms: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  numberFilmsShown: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  numberFilmsShown: state.numberFilmsShown
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
