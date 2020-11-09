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
      this._videoRef = this.props.forwardedRef;
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
      const {forwardedRef, ...rest} = this.props;
      return <Component ref={forwardedRef} {...rest} />;
    }
  };
  return React.forwardRef((props, ref) => {
    return <WithVideoPlayer {...props} forwardedRef={ref} />;
  });
};

export default withVideoPlayer;