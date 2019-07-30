import React from 'react';
import TimeStamps from "./TimeStamps";

class CurrentTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      currentTime: 0,
      percentage: 0
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play = () => {
    this.setState({ play: true });
    this.audio = new Audio(this.props.track.url);
    this.audio.play();
    this.interval = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1,
        percentage: this.state.percentage + 1
      });
    }, 1000);
  };

  pause = () => {
    this.setState({ play: false });
    this.audio.pause();
    clearInterval(this.interval);
  };

  render() {
    const { percentage } = this.state;
    const { play, pause } = this;
    const { track } = this.props;
    return (
      <div className="ui middle aligned grid current-track-container">
        <div
          className="two wide column current-track-cover"
          style={{ backgroundImage: `url(${track.cover})` }}
        />
        <div className="four wide column current-track-info">
          <p className="ui big header">{track.title}</p>
          <p className="ui subheader">{track.artist}</p>
        </div>
        <div className="eight wide column current-track-control">
          <button className="ui icon black big button" style={{background:'none'}}>
              <i className="step backward icon"></i>
          </button>
          {this.state.play ? (
            <button className="ui icon button cta" onClick={pause}>
              <i className="pause icon"></i>
            </button>
          ) : (
            <button className="ui icon button cta" style={{paddingRight:'8px'}} onClick={play}>
              <i className="play icon"></i>
            </button>
          )}
          <button className="ui icon black big button" style={{background:'none'}}>
          <i className="step forward icon"></i>
          </button>
        </div>
        <TimeStamps
          percentage={percentage}
        />
      </div>
    );
  }
}

export default CurrentTrack;
