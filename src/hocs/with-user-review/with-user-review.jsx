import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {sendComment} from "../../store/api-action";
import {setCommentSending} from "../../store/action";
import PropTypes from "prop-types";

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentRating: ``,
        comment: ``,
        isValidComment: false,
      };

      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handlePostBtnClick = this._handlePostBtnClick.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        currentRating: evt.target.value
      });
    }

    _handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value,
        isValidComment: evt.target.value.length >= 50 && evt.target.value.length <= 400
      });
    }

    _handlePostBtnClick(evt) {
      evt.preventDefault();

      this.props.onPostBtnClick(
          this.props.currentFilmId,
          {
            rating: this.state.currentRating,
            comment: this.state.comment
          }
      );
    }

    render() {
      const {currentRating, isValidComment} = this.state;
      return (
        <Component {...this.props}
          isValidComment={isValidComment && !!currentRating}
          currentRating={currentRating}
          handleRatingChange={this._handleRatingChange}
          handleCommentChange={this._handleCommentChange}
          handlePostBtnClick={this._handlePostBtnClick}
        />
      );
    }
  }
  WithUserReview.propTypes = {
    isCommentSending: PropTypes.bool.isRequired,
    isCommentSendError: PropTypes.bool.isRequired,
    onPostBtnClick: PropTypes.func.isRequired,
    currentFilmId: PropTypes.number.isRequired
  };

  const mapStateToProps = ({DATA}) => ({
    isCommentSending: DATA.isCommentSending,
    isCommentSendError: DATA.isCommentSendError
  });

  const mapDispatchToProps = (dispatch) => ({
    onPostBtnClick(filmId, comment) {
      dispatch(sendComment(filmId, comment));
      dispatch(setCommentSending(true));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithUserReview);
};

export {withUserReview};
export default withUserReview;
