import React from 'react';
import 'bulma/css/bulma.css';
import '../index.css';
import { DarkModeButton } from './DarkModeButton';

// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { List } from 'react-native-paper';

export function Header({ darkModeChange, darkMode }) {

  return (
    <Router>
    <>
      <section className="hero">
          <DarkModeButton abc={darkModeChange} onChange={darkMode} />

        <div className="hero-body">
          <p className="title has-text-centered">
            Documentation
          </p>
          <p className="subtitle has-text-centered">
            Everything you need to <strong>create a website</strong> with Bulma
          </p>

          <ul className='headerNavs'>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
      </section>
      </>
     </Router>
  );
}

export default Header;
