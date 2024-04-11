import React from 'react';
import './leaderboard.css';

export function Leaderboard() {
  return (
    <main className='container-fluid bg-secondary text-center'>
            <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="scores">
        </tbody>
      </table>
      <div id="quote"></div>
    </main>
  );
}