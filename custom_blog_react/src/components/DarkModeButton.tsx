import React from 'react';
import 'bulma/css/bulma.css';

import noneDark from '../assets/17992.png'
import dark from '../assets/17943.png'

export function DarkModeButton() {
  return (
    <>
      <div className="dark-mode">
        <button className="button is-outlined" >
        <figure className="image noneDark">
            <img src={noneDark} />
          </figure>
        </button>
        <button className="button is-outlined">
          <figure className="image is-48x48 dark">
            <img src={dark} />
          </figure>
        </button>
      </div>
    </>
  )}