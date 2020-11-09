import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

const FilmCard = (props) => {
  const {title, image, id, handleHoverFilmCard, onFilmCardClick, srcVideo, isActive} = props;

  const moviePreview = isActive ?
    <VideoPlayerWrapped srcVideo={srcVideo} poster={`img/${image}`} /> :
    <div className="small-movie-card__image">
      <img src={`img/${image}`} alt={title} width="280" height="175" />
    </div>;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      data-id={id}
      onMouseEnter={() => handleHoverFilmCard(id)}
      onMouseLeave={() => handleHoverFilmCard(``)}
      onClick={() => onFilmCardClick(id)}
    >
      {moviePreview}

      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleHoverFilmCard: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  srcVideo: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default React.memo(FilmCard);
