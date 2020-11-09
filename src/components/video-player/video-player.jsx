import React, {createRef} from "react";
import PropTypes from "prop-types";
import {VIDEO_PLAY_TIMEOUT} from "../../const";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
      isPlaying: false
    };
  }

  _play() {
    this._playTimeOut = setTimeout(() => {
      if (!this.state.isLoading) {
        this.setState({
          isPlaying: true
        });
      }
    }, VIDEO_PLAY_TIMEOUT);
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    this._play();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;

    clearTimeout(this._playTimeOut);
  }

  render() {
    const {srcVideo, poster, width, height} = this.props;
    return (
      <video
        ref={this._videoRef}
        src={srcVideo}
        poster={poster}
        width={width}
        height={height}
        muted
      >
      </video>
    );
  }
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
