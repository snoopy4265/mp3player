import React from "react";
import Artist from '../components/Artist/Artist';
import TrackList from '../components/Track/TrackList';
import Album from '../components/Album/Album';

import { data } from "../data";


class Wrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playList: data,
    };
  }


  render() {
    const { playList } = this.state;
    return (
      <div className="ui grid stackable container">
        <div className="eight wide column">
          <div className="shade"></div>
          <div className="wrapper">
            <Artist />
          </div>
        </div>
        <div className="eight wide column">
          <div className="wrapper">
            <TrackList playList={playList}/>
            <Album />
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;