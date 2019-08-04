import React from 'react';
import { withMediaProps, controls } from 'react-media-player';
const { Volume } = controls;

class MediaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handlePrevTrack = this.handlePrevTrack.bind(this);
    this.handleNextTrack = this.handleNextTrack.bind(this);
  }

  handlePlayPause = () => {
    this.props.media.playPause();
  }

  handlePrevTrack = () => {
    this.props.onPrevTrack()
  }

  handleNextTrack = () => {
    this.props.onNextTrack()
  }


  render() {
    const { media, toggleFullScreen } = this.props;
    const { handlePlayPause, handlePrevTrack, handleNextTrack } = this;
    return (
      <div className="ten wide column current-track-control middle aligned ui grid">
        <div className="seven wide column">
          <button className="ui icon black big button" onClick={handlePrevTrack}>
            <i className="step backward icon"></i>
          </button>
          <button className="ui icon button cta" onClick={handlePlayPause}>
            { media.isPlaying ? <i className="pause icon"></i> : <i className="play icon"></i> }
          </button>
          <button className="ui icon black big button" onClick={handleNextTrack}>
            <i className="step forward icon"></i>
          </button>
        </div>
        <div className="nine wide right aligned column">
          <i className="volume up icon"></i>
          <Volume />
          <button className="ui icon button" onClick={toggleFullScreen}>
            <i className="expand icon" style={{verticalAlign: "text-top"}}></i>
          </button>
        </div>
      </div>
    )
  }
}

export default withMediaProps(MediaControl)