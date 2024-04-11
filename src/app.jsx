import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Signin } from './signin/signin';
import { Game } from './game/game';
import { Leaderboard } from './leaderboard/leaderboard';
import { Rules } from './rules/rules';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Paths<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
              <NavLink className='nav-link' to='signin'>Signin</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink className='nav-link' to='game'>Game</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink className='nav-link' to='leaderboard'>Leaderboard</NavLink>
              </li>
              <li className='nav-item'>
              <NavLink className='nav-link' to='rules'>Rules</NavLink>
              </li>
            </menu>
          </nav>
        </header>
  
        <Routes>
            <Route path='/' element={<Signin />} exact />
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
  </BrowserRouter>
);

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }