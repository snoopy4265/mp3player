import React from 'react';
import { Media, Player, controls } from 'react-media-player';
import MediaControl from './MediaControl';
const { SeekBar } = controls;

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
              <div className="current-track-fullscreen-header">
                <h1 className="ui huge header">{currentTrack.title}</h1>
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
              isFullScreen={isFullScreen}
              toggleFullScreen={this.toggleFullScreen}
              onPrevTrack={onPrevTrack}
              onNextTrack={onNextTrack}
            />
            <SeekBar 
              className="progress-bar"
              
            />
          </div>
        </div>
      </Media>
    );
  }
}

export default MediaPlayer 
