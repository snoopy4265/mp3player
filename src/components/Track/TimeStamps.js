import React from "react";

class TimeStamps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.convertTime = this.convertTime.bind(this);
  }

  convertTime = timestamp => {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - minutes * 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    timestamp = minutes + ":" + seconds;
    return timestamp;
  };

  render() {
    const { percentage } = this.props;
    return (
      <div className="progress-bar">
        <div className="filler" style={{ width: `${percentage}%` }} />
      </div>
    );
  }
}

export default TimeStamps;
