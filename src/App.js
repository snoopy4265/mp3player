import React from 'react';
import Artist from './components/Artist/Artist';
import TrackList from './components/Track/TrackList';
import Album from './components/Album/Album';

function App() {
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
          <TrackList />
          <Album />
        </div>
      </div>
    </div>
  );
}

export default App;
