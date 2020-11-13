import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchComments} from "../../store/api-action";
import {formatDate} from "../../utils";

const FilmPageReviews = (props) => {
  const {comments, filmId, loadComments} = props;

  useEffect(() => {
    loadComments(filmId);
  }, [filmId]);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.map((comment, i) => {
          return (
            <div key={`${i} - ${comment.userName}`} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment.textComment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.userName}</cite>
                  <time className="review__date" dateTime="2016-12-20">{formatDate(comment.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FilmPageReviews.propTypes = {
  filmId: PropTypes.number.isRequired,
  loadComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    textComment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }))
};

const mapStateToProps = ({DATA}) => ({
  comments: DATA.comments
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchComments(id));
  }
});

export {FilmPageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPageReviews);
