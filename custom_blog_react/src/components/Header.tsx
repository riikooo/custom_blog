// import { Link } from "react-router-dom";
import React from 'react';
import 'bulma/css/bulma.css';
import '../index.css';

// import { Main } from "./Main";
// import { About } from "./About";

export function Header() {
  return (
    <>
      <section className="hero">
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
