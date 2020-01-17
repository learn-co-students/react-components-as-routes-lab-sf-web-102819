import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <div>
          <h2>Doctor Strange</h2>
          <h3>115</h3>
          <ul>
            <li>Action</li>
            <li>Adventure</li>
            <li>Fantasy</li>
          </ul>
        </div>
        <div>
          <h2>Trolls</h2>
          <h3>92</h3>
          <ul>
            <li>Animation</li>
            <li>Adventure</li>
            <li>Family</li>
            <li>Comedy</li>
            <li>Fantasy</li>
          </ul>
        </div>
        <div>
          <h2>Jack Reacher: Never Go Back</h2>
          <h3>118</h3>
          <ul>
            <li>Adventure</li>
            <li>Action</li>
            <li>Crime</li>
            <li>Mystery</li>
            <li>Thriller</li>
          </ul>
        </div>
    </div>
  );
};

export default Movies;
