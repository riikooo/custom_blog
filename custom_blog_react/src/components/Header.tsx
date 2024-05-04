import React from 'react';
import 'bulma/css/bulma.css';
import '../index.css';
// import { Outlet } from "react-router-dom";
// import { DarkModeButton } from './DarkModeButton';

// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { BrowserRouter as Link } from 'react-router-dom';
// import { List } from 'react-native-paper';


export function Header() {

  return (
    <>
      <section className="hero">
          {/* <DarkModeButton abc={darkModeChange} onChange={darkMode} /> */}
        <div className="hero-body">
          <p className="title has-text-centered">
            Documentation
          </p>
          <p className="subtitle has-text-centered">
            Everything you need to <strong>create a website</strong> with Bulma
          </p>

          <ul className='headerNavs'>
           <li><a href={`/main`}>Main</a></li>
           <li><a href={`/About`}>About</a></li>
           <li><a href={`/blog`}>blog</a></li>
          </ul>
        </div>
      </section>
      {/* <Outlet/> */}
      </>
  );
}

export default Header;
