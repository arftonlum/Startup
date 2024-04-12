import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Signin } from './signin/signin';
import { Game } from './game/game';
import { Leaderboard } from './leaderboard/leaderboard';
import { Rules } from './rules/rules';
import { AuthState } from './signin/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  const loggedIn = (currentAuthState == AuthState.Authenticated);
  
    return (
  <BrowserRouter>
    <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar navbar-dark'>
            <h1 className='navbar-brand'>
              Paths<sup>&reg;</sup>
            </h1>
            <menu className='navbar-nav'>
            <li className='btn btn-outline-dark'>
              <NavLink className='nav-link' to=''>Signin</NavLink>
              </li>
              {loggedIn &&
              <li className='btn btn-outline-dark'>
              <NavLink className='nav-link' to='game'>Game</NavLink>
              </li>}
              {loggedIn &&
              <li className='btn btn-outline-dark'>
              <NavLink className='nav-link' to='leaderboard'>Leaderboard</NavLink>
              </li>}
              {loggedIn &&
              <li className='btn btn-outline-dark'>
              <NavLink className='nav-link' to='rules'>Rules</NavLink>
              </li>}
            </menu>
          </nav>
        </header>
        <Routes>
        <Route
            path='/'
            element={
              <Signin
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
            <Route path='/game' element={<Game />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Nathan Brueck</span>
            <a className='text-reset' href='https://github.com/arftonlum/Startup'>
              Source
            </a>
          </div>
        </footer>
        </div>
  </BrowserRouter>
);
}

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
  export default App;