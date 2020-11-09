import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
    
  const {srcVideo, poster, width, height, forwardedRef} = props;
  return (
    <video
      ref={forwardedRef}
      src={srcVideo}
      poster={poster}
      width={width}
      height={height}
      muted
    >
    </video>
  );
}

VideoPlayer.defaultProps = {
  width: 280,
  height: 175
};

VideoPlayer.propTypes = {
  srcVideo: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default VideoPlayer;
