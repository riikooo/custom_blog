import React from 'react';
import 'bulma/css/bulma.css';

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
        </div>
      </section>

    </>
  );
}

export default Header;
