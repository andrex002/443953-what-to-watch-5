import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FilmCardsList from "../film-cards-list/film-cards-list";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import MyListButton from "../my-list-button/my-list-button";
import {connect} from "react-redux";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {getFilmsByGenre} from "../../store/selectors/selectors";

const FilmCardsListWrapped = withActiveCard(FilmCardsList);

const MainScreen = (props) => {
  const {promoFilm, filteredFilms, onFilmCardClick, numberFilmsShown} = props;
  const {title, genre, year, image, bgImage, id, isFavorite} = promoFilm;

  const renderedFilms = filteredFilms.slice(0, numberFilmsShown);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={bgImage} alt={title} />
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
              <img src={image} alt={title} width="218" height="327" />
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
                <MyListButton id={id} isFavorite={isFavorite} />
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
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  filteredFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  numberFilmsShown: PropTypes.number.isRequired
};

const mapStateToProps = ({DATA, FILTER}) => ({
  filteredFilms: getFilmsByGenre({DATA, FILTER}),
  numberFilmsShown: DATA.numberFilmsShown,
  promoFilm: DATA.promoFilm
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
