import React from 'react';
import { Media, Player, controls } from 'react-media-player';
import MediaControl from './MediaControl';
const { SeekBar, Progress } = controls;

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
    const { track } = this.props;
    let mediaPlayerContainerClass = "ui middle aligned grid current-track-container";
    if (this.state.isFullScreen) {
      mediaPlayerContainerClass = "ui bottom aligned grid current-track-container fullscreen";
    }
    return (
      <Media>
        <div className={mediaPlayerContainerClass}>
          <div className="current-track-container-bg" style={ this.state.isFullScreen ? { backgroundImage: `url(${track.cover})` } : { display: 'none' }}></div>
          <div className="ui grid bottom aligned container">
            <div
              className="two wide column current-track-cover"
              style={{ backgroundImage: `url(${track.cover})`, width: "96px"}}
            />
            <div className="four wide centered column current-track-info">
              <p className="ui big header">{track.title}</p>
              <p className="ui subheader">{track.artist}</p>
            </div>
            <Player src={track.url} />
            <MediaControl toggleFullScreen={this.toggleFullScreen}/>
            <div className="media-controls">
              <div className="media-control-group media-control-group--seek">
                <Progress className="media-control media-control--progress"/>
                <SeekBar className="media-control media-control--volume-range"/>
              </div>
            </div>
          </div>
        </div>
      </Media>
    );
  }
}

export default MediaPlayer 
