# Paths

## Description deliverable

### Elevator pitch

The snake game is one of the most classic games our time and it has seen a lot of variations over the years. This particular take on the game is almost an inverse of the original where the player chooses paths for the snake while building potential future paths. Your objective is to make the longest possible path for a snake by carefully placing potential paths on the board.
### Design


![Leaderboard](https://github.com/arftonlum/Startup/blob/main/Pathsleaderboard.png) ![SignIn](https://github.com/arftonlum/Startup/blob/main/Pathssignin.png) ![Play](https://github.com/arftonlum/Startup/blob/main/Pathsplay.png)
### Key features

- Secure login over HTTPS
- Ability to select and rotate tile
- Display board and past tiles
- Show score and game end
- Show Leaderboard from all players
- Save top score for login
- Provide information for new high scores

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login one for the game, and one for the leaderboard. Hyperlinks between pages
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, game board and mechanics, counting score, display other users scores.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving high scores
  - submitting new score
- **DB/Login** - Store users and scores in database. Register and login users. Credentials securely stored in database.
- **WebSocket** - As each player gets a new high score or joins the top 5, all players are informed
- **React** - Application ported to use the React web framework.
