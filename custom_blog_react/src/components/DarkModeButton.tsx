import React from 'react';
import 'bulma/css/bulma.css';

import light from '../assets/17992.png'
import dark from '../assets/17943.png'

export function DarkModeButton({ onClick, onChange }) {

  return (
    <>
      <div className="dark-mode">
        <button className="button is-outlined" onClick={onClick}>
        <figure className="image dark-mode-button">
            <img src={onChange} />
          </figure>
        </button>
        {/* <button className="button is-outlined" onClick={onClick}>
          <figure className="image is-48x48 dark">
            <img src={dark} />
          </figure>
        </button> */}
      </div>
    </>
  )}