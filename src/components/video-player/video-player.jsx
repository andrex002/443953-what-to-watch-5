import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {

  const {srcVideo, poster, renderPlayer} = props;

  return (
    <React.Fragment>
      {renderPlayer(srcVideo, poster)}
    </React.Fragment>
  );
};

VideoPlayer.propTypes = {
  srcVideo: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default VideoPlayer;
