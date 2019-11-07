import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">StillQuay</Link>
        <ul className="navbar-nav mr-auto margin-left">
          <li className="navbar-item px-2" >
          <Link to="/user/account" className="navbar-item">Account</Link>
          </li>
          <li className="navbar-item px-2">
          <Link to="/quays" className="navbar-item">Quays</Link>
          </li>
          <li className="navbar-item px-2">
          <Link to="/quays/add" className="navbar-item">Add a Quay</Link>
          </li>
        </ul>
      </nav>
      

    );
  }
}

export default Navbar;