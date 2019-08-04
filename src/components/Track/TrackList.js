import React from "react";
import MediaPlayer from "../MediaPlayer/MediaPlayer";

const mod = (num, max) => ((num % max) + max) % max;

class TrackList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTrack: this.props.playList[0],
      isActive: false,
    };
    this.handleMusicClick = this.handleMusicClick.bind(this);
  }

  handleMusicClick = (currentTrack) => {
    this.setState({
      currentTrack,
      isActive: !this.state.isActive
    });
  }

  navigatePlaylist = direction => {
    const newIndex = mod(
      this.props.playList.indexOf(this.state.currentTrack) + direction,
      this.props.playList.length
    )
    this.setState({ currentTrack: this.props.playList[newIndex] })
  }

  render() {
    const { handleMusicClick, navigatePlaylist } = this;
    const { currentTrack } = this.state;
    const { playList } = this.props;
    return (
      <div>
        <div className="track-list block">
          <h1 className="ui header">Top Songs</h1>
          <div className="ui ordered huge middle aligned divided list">
            { playList.map( track => (
              <div className="item" onClick={() => handleMusicClick(track)}>
                <img src={track.cover} alt="albumcover" className="ui mini rounded image" />
                <div className={track.id === currentTrack.id ? ("content track-title active") : ("content track-title")}>{track.title}</div>
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
        <MediaPlayer 
          currentTrack={currentTrack} 
          onPrevTrack={() => navigatePlaylist(-1)}
          onNextTrack={() => navigatePlaylist(1)}
        />
      </div>
    );
  }
}

export default TrackList;