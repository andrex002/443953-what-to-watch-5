import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FilmCardList from "../film-cards-list/film-cards-list";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import Tabs from "../tabs/tabs";

const FilmScreen = (props) => {

  const {films, onFilmCardClick} = props;
  const {title, genre, year, image, id} = films[0];
  const similarFilms = films.filter((film) => film.genre === genre).slice(0, 4);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">

            <LogoHeader />

            <UserBlock />

          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to="/mylist" className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div >

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${image}`} alt={title} width="218" height="327" />
            </div>

            <Tabs film={films[0]} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCardList onFilmCardClick={onFilmCardClick} films={similarFilms} />

        </section>

        <PageFooter />

      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};

export default FilmScreen;
