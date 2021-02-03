import React from "react"
import { Link } from "gatsby"

import "./NavBar.css";

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Layout({ children }) {
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
  )
}