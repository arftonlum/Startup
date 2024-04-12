import React from 'react';
import './leaderboard.css';
async function loadquote(){
  let resp = await fetch("https://api.quotable.io/random");
  resp = await resp.json();
  let quote = resp.content + ' - ' + resp.author;
  document.getElementById("quote").textContent = quote;

}


export function Leaderboard() {
  loadquote();
    const [scores, setScores] = React.useState([]);
    React.useEffect(() => {
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