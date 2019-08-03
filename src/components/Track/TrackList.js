import React from "react";

import MediaPlayer from "../MediaPlayer/MediaPlayer";
import { data } from "../../data";

class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: data[0],
      isActive: false,
    };
    this.handleMusicOnChange = this.handleMusicOnChange.bind(this);
  }
  handleMusicOnChange(currentTrack) {
    this.setState({
      currentTrack,
      isActive: !this.state.isActive
    });
  }

  render() {
    const { handleMusicOnChange } = this;
    const { currentTrack, isActive } = this.state;
    let item = "item";
    return (
      <div>
        <div className="track-list block">
          <h1 className="ui header">Top Songs</h1>
          <div className="ui ordered huge middle aligned divided list">
            {data.map(track => (
              <div 
                className={
                  isActive && track.id === currentTrack.id ? (item += " active") : (item)
                }
                onClick={() => handleMusicOnChange(track)}
              >
                  <img src={track.cover} alt="albumcover" className="ui mini rounded image" />
                  <div className="content">{track.title}</div>
                  <div className="right floated content">
                    {track.duration}
                    <button className="ui icon black button" style={{background:'none', color:'black'}}>
                      <i className="play icon"></i>
                    </button>
                  </div>
              </div>
            ))}
          </div>
        </div>
        <MediaPlayer track={currentTrack} />
      </div>
    );
  }
}

export default TrackList;