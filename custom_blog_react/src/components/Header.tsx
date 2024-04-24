import React from 'react';
import 'bulma/css/bulma.css';
import '../index.css';
import { DarkModeButton } from './DarkModeButton';

export function Header({ darkModeChange, darkMode }) {
  return (
    <>
      <section className="hero">
        {/* <DarkModeButton
          onClick={darkModeChange}
          onChange={darkModeChange}
          /> */}
          <DarkModeButton onClick={darkModeChange} onChange={darkMode} />

        <div className="hero-body">
          <p className="title has-text-centered">
            Documentation
          </p>
          <p className="subtitle has-text-centered">
            Everything you need to <strong>create a website</strong> with Bulma
          </p>
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
              <ul>
                <li><a href="/main">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
