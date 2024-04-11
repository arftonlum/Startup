import React from 'react';
import './game.css';
export function Game() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className="text">
      <div className="players">
        You Are:
        <span className="player-name"></span>
        <div id="player-messages">
          </div>
      </div>

      <br />

      <div>
        <label for="count">Current Score</label>
        <div id="score" className="score center">--</div>
      </div>

      <br />

      <div>
        <button onclick="Buildboard()">New Game</button>
        <button onclick="toggleGrid()">Toggle Grid</button>
      </div>
      </div>

      <br />
      <div>
        <canvas id="boardofthegame" width="700" height="700">
        </canvas>
      </div>
      <div>
        <button onclick="clickarcl()">
          <canvas id="lefttemplate"width="100" height="100"></canvas>
        </button>
        <button onclick="clickcross()">
          <canvas id="crosstemplate"width="100" height="100"></canvas>
        </button>
        <button onclick="clickarcr()">
          <canvas id="righttemplate"width="100" height="100"></canvas>
        </button>
      </div>
      <div id="spacer"></div>
    </main>
  );
}