import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setIsFilmByIdLoading} from "../../store/action";
import {sendFavoriteStatus} from "../../store/api-action";
import {AuthorizationStatus} from "../../const";
import {Link} from "react-router-dom";

const MyListButton = (props) => {
  const {id, isFavorite, onMyListClick, authorizationStatus} = props;

  return (
    <Link className="btn btn--list movie-card__button" type="button"
      to={authorizationStatus === AuthorizationStatus.NO_AUTH ? `/login` : ``}
      onClick={(evt) => {
        if (authorizationStatus === AuthorizationStatus.AUTH) {
          evt.preventDefault();
          onMyListClick(id, isFavorite);
        }
      }}
    >
      {
        isFavorite
          ?
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#in-list"></use>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>My list</span>
    </Link>
  );
};

MyListButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onMyListClick(filmId, isFavorite) {
    dispatch(sendFavoriteStatus(filmId, isFavorite));
  }
});

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
