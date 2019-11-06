import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user/create" className="navbar-item">Account</Link>
          </li>
          <li className="navbar-item">
          <Link to="/quays" className="navbar-item">All Quays</Link>
          </li>
          <li className="navbar-item">
          <Link to="/quays/add" className="navbar-item">Add a Quay</Link>
          </li>
        </ul>
      </nav>
      

    );
  }
}

export default Navbar;