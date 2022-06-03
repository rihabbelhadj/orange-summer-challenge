import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Orange</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Users</Link>
          </li>
          <li className="navbar-item">
          <Link to="/item" className="nav-link">item</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}