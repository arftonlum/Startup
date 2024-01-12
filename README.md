# Paths

## Description deliverable

### Elevator pitch

The snake game is one of the most classic games our time and it has seen a lot of variations over the years. This particular take on the game is almost an inverse of the original where the player chooses paths for the snake while building potential future paths. Your objective is to make the longest possible path for a snake by carefully placing potential paths on the board.
### Design


![Leaderboard](images/Pathsleaderboard.png) ![SignIn](images/Pathssignin.png) ![Play](images/Pathsplay.png)
### Key features

- Secure login over HTTPS
- Ability to select the question to decide
- Display of choices
- Ability to select, and change, top three choices
- Totals from all users displayed in realtime
- Ability for a user to lock in their top three
- Results are persistently stored
- Ability for admin to create and delete questions

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one for voting. Hyperlinks to choice artifact.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, choice display, applying votes, display other users votes, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving choices
  - submitting votes
  - retrieving vote status
- **DB/Login** - Store users, choices, and votes in database. Register and login users. Credentials securely stored in database. Can't vote unless authenticated.
- **WebSocket** - As each user votes, their votes are broadcast to all other users.
- **React** - Application ported to use the React web framework.
