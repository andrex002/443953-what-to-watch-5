import React, {createRef, PureComponent} from "react";
import {VIDEO_PLAY_TIMEOUT} from "../../const";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        isPlaying: false
      };
      this._videoRef = createRef();

      this._play = this._play.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      video.oncanplay = () => this.setState({
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

      video.oncanplay = null;

      clearTimeout(this._playTimeOut);
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

    render() {
      return (
        <Component {...this.props}
          renderPlayer={(video, image) => {
            return (
              <video ref={this._videoRef} src={video} width="280" height="175" muted poster={image}></video>
            );
          }}
        />
      );
    }
  }
  return WithVideoPlayer;
};

export default withVideoPlayer;
