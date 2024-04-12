import React from 'react';
import './rules.css';

export function Rules() {
  return (
    <main className='container-fluid text-center'>
            <p>
        Paths is a game based on the classic board game Tsuro. Using randomly generated tiles, you have to build a route on the board without falling off the edge. The more tiles you cross, the higher your score.
      </p>

      <p>
        I made the name up so it is not trademarked yet.
      </p>

      <div id="quote">
        <div>I am Batman</div>
        <div>- Batman</div>
      </div>
      <div id="picture" className="picture-box"><img width="400px" src="alces_alces.jpeg" alt="random" /></div>
    </main>
  );
}