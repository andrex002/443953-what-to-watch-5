import React from "react";
import PropTypes from "prop-types";

const STAR_NUMBER = [`1`, `2`, `3`, `4`, `5`];

const AddReviewForm = (props) => {
  const {currentRating, handleRatingChange, handleCommentChange} = props;
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
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  currentRating: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired
};

export default AddReviewForm;
