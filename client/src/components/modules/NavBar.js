import React, { Component } from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-title">IRENE TERPSTRA</div>
        <div className="NavBar-linkContainer">
          <Link to="/" className="NavBar-link">
            research
          </Link>
          <Link to="/" className="NavBar-link">
            projects
          </Link>
          <Link to="/" className="NavBar-link">
            about
          </Link>
        </div>
      </nav>
      
    );
  }
}

export default NavBar;
