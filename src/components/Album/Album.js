import React from 'react';
import { data } from '../../data';

const Album = () => {
  return (
    <div className="block">
      <h1 className="ui header">Albums</h1>
      <div className="ui middle aligned grid">
        {data.map(album => (
          <div className="five wide column">
            <img src={album.cover} alt="albumcover" className="ui image" />
            <div className="ui header">{album.album}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Album