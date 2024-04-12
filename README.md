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

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML pages that represent the four faces of my website including a login page, the game, a leaderboard, and an about page.
- **Links** - There is a navigation page at the top that will allow you to move between the pages and the login page takes you to the game.
- **Text** - The game is somewhat explained on the .
- **Images** - Has a moose on the about page with a much more relevant background image on each page.
- **DB/Login** - Input box and submit button for login.
- **WebSocket** - The leaderboard and score updates on the main page are shown.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body** I have a CSS page to represent how elements are to be changed across all pages with a specific page for the game itself/
- **Navigation elements** - I added a hover effect to the navigation buttons/
- **Responsive to window resizing** - My app is designed with flex elements that should resize well.
- **Application elements** - Added semi-translucent backgrounds to text to see over the background
- **Application text content** - Consistent fonts
- **Application images** - The background images remain static with the size of the window

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **login** - When you press enter or the login button it takes you to the game page and your name is shown when you click new game
- **database** - Displayed the leaderboard scores. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - There is a space above the game for live score changes to be shown with websocket
- **application logic** - The game functions as it should in the final product

  ## Service deliverable

For this deliverable I added backend points that receive high scores and return an updated leaderboard

- **Node.js/Express HTTP service** - I have an index.js file that now runs the website
- **Static middleware for frontend** - My node.js file calls the public folder with my static files
- **Calls to third party endpoints** - There is a quote that is received from a third party site on the Leaderboard page
- **Backend service endpoints** - The game sends scores to the server to be sorted whenever a game is completed.
- **Frontend calls service endpoints** - The leaderboard page asks the server for the top scores and they are displayed

- ## DB/Login deliverable


For this deliverable I associated scores with the logged in user. I stored the scores and referenced them from the database.

- **MongoDB Atlas database created** - done!
- **Stores data in MongoDB** - done!
- **User registration** - Creates a new account in the database.
- **existing user** - Stores the scores under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their scores.
- **Restricts functionality** - You cannot play or see scores until you have logged in.

  ## WebSocket deliverable

For this deliverable I used webSocket to update the votes on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - Sends score and player name onMessage
- **WebSocket data displayed** - In real time you can see the other players connect, start new games, and finish games

  ## React deliverable

For this deliverable I converted the application over to use React

- **Bundled and transpiled** - done!
- **Components** - Login, Game, Rules, and Leaderboard are all compenents
- **Router** - Routing between login and leaderboard components
- **Hooks** - Uses useeffect hooks on game page to reset the websocket when the user leaves the page


