import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getRatingLevel} from "../../utils";
import FilmCardList from "../film-cards-list/film-cards-list";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";

const FilmTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

class FilmScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmTab: FilmTab.OVERVIEW
    };
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const {title, genre, year, image, rating, id} = films[0];

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

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="movie-rating">
                  <div className="movie-rating__score">{rating.score}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{getRatingLevel(rating.score)}</span>
                    <span className="movie-rating__count">{`${rating.count} ratings`}</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                  <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                  <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

                  <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section >

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmCardList onFilmCardClick={onFilmCardClick} films={films.slice(0, 4)} />

          </section>

          <PageFooter />

        </div>
      </React.Fragment>
    );
  }
}

FilmScreen.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }),
    id: PropTypes.string.isRequired
  }))
};

export default FilmScreen;
