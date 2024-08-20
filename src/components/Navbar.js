import React from "react";
import PropTypes from 'prop-types'
import './Nav.css'
import {Link} from 'react-router-dom'
const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
            <label className={`mx-3 text-${props.mode==='light'?'dark':'light'}`}>
              Enable Dark Mode
            </label> 
          <label className="switch">
              <input className='form form-check-input' type="checkbox" onClick={props.func}/>
              <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
    title : PropTypes.string,
}

Navbar.defaultProps = {
    title : "TextUtil"
}

export default Navbar;
