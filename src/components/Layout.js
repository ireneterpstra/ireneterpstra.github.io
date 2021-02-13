import React from "react"
import { Link } from "gatsby"

import "./Layout.css";
import NavBar from "../components/NavBar.js";



const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    
    <div>
      <section className="Layout-top">
        <NavBar />
      </section>

      {/* <header className="global-header">{header}</header> */}
      <main className="Layout-body">{children}</main>

    </div>
  )
}

export default Layout
