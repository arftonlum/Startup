const express = require('express');
const app = express();
let leaderboard =[{name:'Dave', score: 3, date:"March"},{name:'Nate', score: 250, date:"March"},{name:'Jake', score: 2, date:"March"},{name:'Ben', score: 9, date:"March"}];

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(leaderboard);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  leaderboard.push(req.body)
  leaderboard.sort(comparescores);
  if(leaderboard.length > 6){
    leaderboard.pop();
  }
  res.send(leaderboard);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let scores = [];
function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}

function comparescores (a,b){
  if (a.score>b.score){
    return -1;
  }
  else if (a.score<b.score){
    return 1
  };
  return 0;  
}