import React, { Component } from 'react'
import {link} from "react-router-dom";

export class navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <link className="navbar-brand" to="#">DNews</link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <link className="nav-link" aria-current="page" to="/">Home</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/Business">Business</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/Entertainment">Entertainment</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/General">General</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/Health">Health</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/Science">Science</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/Sport">Sport</link>
                </li>
                <li className="nav-item">
                  <link className="nav-link" to="/Technology">Technology</link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default navbar