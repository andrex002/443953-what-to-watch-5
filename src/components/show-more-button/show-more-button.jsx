import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ShowMoreButton = (props) => {
  const {onShowMoreBtnClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onShowMoreBtnClick()}
      >Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreBtnClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreBtnClick() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
