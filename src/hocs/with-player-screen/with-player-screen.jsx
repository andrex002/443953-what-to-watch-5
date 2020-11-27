import React, {PureComponent, createRef} from "react";

const withPlayerScreen = (Component) => {
  return class WithPlayerScreen extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        duration: 0,
        progress: 0
      };

      this._videoRef = createRef();

      this._handlePlayBtnClick = this._handlePlayBtnClick.bind(this);
      this._handleFullscreenBtnClick = this._handleFullscreenBtnClick.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      video.oncanplay = () => {
        this.setState({
          duration: Math.floor(video.duration),
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime)
        });
      };
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
      this._videoRef.current.oncanplay = null;
      this._videoRef.current.ontimeupdate = null;
    }

    _handlePlayBtnClick() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }

    _handleFullscreenBtnClick() {
      this._videoRef.current.requestFullscreen();
    }

    render() {
      const {duration, progress, isPlaying} = this.state;

      return (
        <Component {...this.props}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayBtnClick = {this._handlePlayBtnClick}
          onFullscreenClick={this._handleFullscreenBtnClick}
          renderPlayer={(film) => {
            return (
              <video ref={this._videoRef} src={film.video} className="player__video" poster={film.image}></video>
            );
          }}
        />
      );
    }
  };
};

export default withPlayerScreen;
