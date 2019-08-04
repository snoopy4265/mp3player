import React from 'react';
import artist from '../../images/artist.jpg'

const Artist = () => {
  return (
    <div className="artist">
      <img src={artist} alt="artist" className="ui fluid image"/>
      <div className="ui huge header">Richard Green</div>
      <div className="ui bottom aligned grid">
        <div className="four wide column">
          <h3>FOLLOWERS</h3>
          <div className="sub header">5,790</div>
        </div>
        <div className="twelve wide column">
         <button className="ui black basic huge button">FOLLOW</button>
         <button className="ui orange huge button">PLAY</button>
        </div>
      </div>
    </div>
  )
}

export default Artist