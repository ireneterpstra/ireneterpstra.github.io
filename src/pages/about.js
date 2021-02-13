import React from "react"
import styles from "./about-css-modules.module.css"
import Layout from "../components/Layout"

console.log(styles)


export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>The other stuff I do</p>

    </Layout>
  )
}