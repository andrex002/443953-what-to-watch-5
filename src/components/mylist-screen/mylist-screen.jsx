import React, {useEffect} from "react";
import PropTypes from "prop-types";
import FilmCardsList from "../film-cards-list/film-cards-list";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {connect} from "react-redux";
import {fetchFavoriteFilms} from "../../store/api-action";

const FilmCardsListWrapped = withActiveCard(FilmCardsList);

const MyListScreen = (props) => {
  const {favoriteFilms, onFilmCardClick, getFavoriteFilms} = props;

  useEffect(() => {
    getFavoriteFilms();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoHeader />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardsListWrapped films={favoriteFilms} onFilmCardClick={onFilmCardClick} />

      </section>

      <PageFooter />

    </div>
  );
};

MyListScreen.propTypes = {
  favoriteFilms: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  getFavoriteFilms: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  favoriteFilms: DATA.favoriteFilms
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteFilms() {
    dispatch(fetchFavoriteFilms());
  }
});

export {MyListScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MyListScreen);
