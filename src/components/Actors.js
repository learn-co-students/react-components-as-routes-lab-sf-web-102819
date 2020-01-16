import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => <div key={i} className="actor">{actor.movies}, {actor.name}</div>) }
      {/* <div className="actor">{actors[0].name}</div>
      <div className="actor">{actors[1].name}</div>
      <div className="actor">{actors[2].name}</div>
      <div className="actor">{actors[3].name}</div> */}
    </div>
  );
};

export default Actors;
