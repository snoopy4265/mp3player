import React from 'react';

const Artist = () => {
  return (
    <div className="artist">
      <img src="https://picsum.photos/540" alt="artist" className="ui fluid image"/>
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