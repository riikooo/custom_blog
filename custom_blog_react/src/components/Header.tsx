// import { Link } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import '../index.css';

// import { Main } from "./Main";
// import { About } from "./About";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className={`Mode ${darkMode ? "dark" : "light"}`}>
            <a onClick={toggleDarkMode}>
              {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </a>
          </div>
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
