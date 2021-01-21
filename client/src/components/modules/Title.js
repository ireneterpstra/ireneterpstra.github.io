import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Title.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="Title-container">
        Irene Terpstra 
      </p>
      
    );
  }
}

export default NavBar;
