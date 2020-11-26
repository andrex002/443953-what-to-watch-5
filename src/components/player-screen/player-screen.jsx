import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {formatDurationFilmInSeconds} from "../../utils";
import {connect} from "react-redux";

const PlayerScreen = (props) => {
  const {duration, progress, onPlayBtnClick, onFullscreenClick, renderPlayer, films, promoFilm, currentFilmId, isPlaying} = props;
  
  const getCurrentFilm = () => {
    if (currentFilmId === promoFilm.id) {
      return promoFilm;
    }
    return films.find((film) => film.id === currentFilmId);
  };

  const currentFilm = getCurrentFilm();

  const togglerPosition = progress / duration * 100;
  const history = useHistory();
  const remainingTime = duration - progress;

  return (
    <div className="player">
      {renderPlayer(currentFilm)}

      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: togglerPosition + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatDurationFilmInSeconds(remainingTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayBtnClick}>
            {isPlaying ?
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>
              :
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>
            }
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onFullscreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  currentFilmId: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.allFilms,
  promoFilm: DATA.promoFilm
});

export {PlayerScreen};
export default connect(mapStateToProps)(PlayerScreen);
