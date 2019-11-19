import React, { Component } from 'react';
import Home from './Home'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
import { BrowserRouter as Router, Link } from 'react-router-dom';




class App extends Component
{
  render()
  {
    return (
      <Router>
        <div className="header">
          <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
              <Link to="#" className="navbar-brand"><img src={require('../logo/logo.png')} className="logo" alt="" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PROMO</Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="#" className="dropdown-item">PROMO</Link>
                      <Link to="#" className="dropdown-item">Partnership</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" ariaexpanded="false">
                      PAKET & ADD ON
                  </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="#" className="dropdown-item">Action</Link>
                      <Link to="#" className="dropdown-item">Another Action</Link>
                      <div className="dropdown-divider"></div>
                      <Link to="#" className="dropdown-item">Something else here</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">PUSAT BANTUAN</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <Home />
      </Router >
    );
  }
}

export default App;
