import React from 'react';
import 'bulma/css/bulma.css';
import '../index.scss';
// import { Outlet } from "react-router-dom";
// import { DarkModeButton } from './DarkModeButton';

// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from "react-router-dom";


export function Header() {

  return (
    <div className='header-is-top'>
      <section className='header-is-top--texts'>
          {/* <DarkModeButton abc={darkModeChange} onChange={darkMode} /> */}
        <div >
          <p className='header-is-top--texts-title'>
            Documentation
          </p>
          <p className='header-is-top--texts-tect'>
            Everything you need to <strong>create a website</strong> with Bulma
          </p>

          <ul className='headerNavs'>
           <li><Link to={`/main`}>Main</Link></li>
           <li><Link to={`/About`}>About</Link></li>
           <li><Link to={`/blog`}>blog</Link></li>
          </ul>
        </div>
      </section>
      </div>
  );
}

export default Header;
