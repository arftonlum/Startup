import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Paths<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='game.html'>
                  Play
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='leaderboard.html'>
                  Scores
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='rules.html'>
                  About
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Nathan Brueck</span>
            <a className='text-reset' href='https://github.com/arftonlum/Startup'>
              Source
            </a>
          </div>
        </footer>
      </div>
    );
  }
