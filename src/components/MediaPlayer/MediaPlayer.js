import React from 'react';
import { Media, Player } from 'react-media-player';
import MediaControl from './MediaControl';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
    };
  }

  toggleFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen,
    })
  }

  render() {
    const { isFullScreen } = this.state;
    const { currentTrack, onPrevTrack, onNextTrack } = this.props;
    let mediaPlayerContainerClass = "ui middle aligned grid current-track-container";
    if (this.state.isFullScreen) {
      mediaPlayerContainerClass = "ui bottom aligned grid current-track-container fullscreen";
    }
    return (
      <Media>
        <div className={mediaPlayerContainerClass}>
          <div className="current-track-container-bg" style={ isFullScreen ? { backgroundImage: `url(${currentTrack.cover})` } : { display: 'none' }}></div>
          { isFullScreen && (
            <div className="ui top centered aligned row">
              <div>
                <h1 className="ui header">{currentTrack.title}</h1>
                <h3>{currentTrack.artist}</h3>
              </div>
            </div>
          )}
          <div className="ui grid bottom aligned container">
            <div
              className="two wide column current-track-cover"
              style={{ backgroundImage: `url(${currentTrack.cover})`, width: "96px"}}
            />
            <div className="four wide centered column current-track-info">
              <p className="ui big header">{currentTrack.title}</p>
              <p className="ui subheader">{currentTrack.artist}</p>
            </div>
            <Player src={currentTrack.url} />
            <MediaControl 
              toggleFullScreen={this.toggleFullScreen}
              onPrevTrack={onPrevTrack}
              onNextTrack={onNextTrack}
            />
          </div>
        </div>
      </Media>
    );
  }
}

export default MediaPlayer 
