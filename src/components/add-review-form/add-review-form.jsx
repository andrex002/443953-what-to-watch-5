import React from "react";
import PropTypes from "prop-types";

const STAR_NUMBER = [`1`, `2`, `3`, `4`, `5`];

const AddReviewForm = (props) => {
  const {currentRating, handleRatingChange, handleCommentChange, handlePostBtnClick, isValidComment, isCommentSending, isCommentSendError} = props;
  const getMessage = () => {
    if (isCommentSending) {
      return <p>Sending your review...</p>;
    } else if (isCommentSendError) {
      return <p style={{color: `#ff6347`}}>Sorry, something went wrong! Please, try again later...</p>;
    }
    return ``;
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}>
      <div className="rating">
        <div className="rating__stars">
          {STAR_NUMBER.map((starNumber) => {
            return (
              <React.Fragment key={starNumber}>
                <input className="rating__input" id={`star-${starNumber}`} type="radio" name="rating" value={starNumber}
                  disabled={isCommentSending}
                  checked={currentRating === starNumber}
                  onChange={handleRatingChange}
                />
                <label className="rating__label" htmlFor={`star-${starNumber}`}>Rating {starNumber}</label>
              </React.Fragment>
            );
          })}

        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleCommentChange}
          disabled={isCommentSending}
          minLength="50"
          maxLength="400"
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit"
            disabled={!isValidComment}
            onClick={handlePostBtnClick}>Post</button>
        </div>
      </div>
      {getMessage()}
    </form>
  );
};

AddReviewForm.propTypes = {
  currentRating: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  handlePostBtnClick: PropTypes.func.isRequired,
  isValidComment: PropTypes.bool.isRequired,
  isCommentSending: PropTypes.bool.isRequired,
  isCommentSendError: PropTypes.bool.isRequired
};

export default AddReviewForm;
