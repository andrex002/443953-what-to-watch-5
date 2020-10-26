import React, {createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_PLAY_TIMEOUT = 1000;

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
    const {srcVideo, poster} = this.props;
    return (
      <video
        ref={this._videoRef}
        src={srcVideo}
        poster={poster}
        width="280"
        height="175"
        muted
      >
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  srcVideo: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
