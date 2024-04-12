import React from 'react';
import './leaderboard.css';

export function Leaderboard() {
    console.log('page')
    const [scores, setScores] = React.useState([]);
    React.useEffect(() => {
      console.log(scores.length)
        fetch('/api/scores')
          .then((response) => response.json())
          .then((scores) => {
            setScores(scores);
            localStorage.setItem('scores', JSON.stringify(scores));
          })
          .catch(() => {
            const scoresText = localStorage.getItem('scores');
            if (scoresText) {
              setScores(JSON.parse(scoresText));
            }
          });
      }, []);
    
      // Demonstrates rendering an array with React
      const scoreRows = [];
      if (scores.length) {
        console.log(scores)
        for (const [i, score] of scores.entries()) {
          scoreRows.push(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{score.name.split('@')[0]}</td>
              <td>{score.score}</td>
              <td>{score.date}</td>
            </tr>
          );
        }
      } else {
        console.log('should')
        scoreRows.push(
          <tr key='0'>
            <td colSpan='4'>Be the first to score</td>
          </tr>
        );
      }
  return (
    <main className='container-fluid text-center'>
            <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="scores">{scoreRows}
        </tbody>
      </table>
      <div id="quote"></div>
    </main>
  );
}