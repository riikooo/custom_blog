import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import '../index.scss';


export function Blog() {
  return (
    <div  className="has-text-centered">
      <h1>*******Blog*******</h1>
      <p>$$$$$$$$</p>
      <div className="blog-contents is-flex is-justify-content-center is-spaced">
        <Link to={`/blogs/1`}>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </Link>
        <Link to={`/blogs/2`}>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </Link>
        <div>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </div>
        <div>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </div>
        <div>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </div>
        <div>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </div>
        <div>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </div>
        <div>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </div>
        <div>
          <button className="button is-light is-large">Light</button>
          <h2>komodmr</h2>
          <p>abcdefg</p>
        </div>
       
      </div>
    </div>
  )}