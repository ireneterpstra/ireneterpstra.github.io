import React from "react"
import Layout from "../components/Layout"

// import NavBar from "../components/NavBar.js";
import SEO from "../components/seo.js"



// import "../utils/utilities.css";
// import "./App.css";



export default function Home() {
  return (
    <Layout>
      <SEO title="Irene" />
      
      <div className="App-container">
        {/* <h1>Hello</h1> */}
        <h2>Wecome to my website</h2>
        <section>
        I am a sophomore at MIT studying Electrical Engineering 
        and Computer Science. I am interested in robotics and using 
        machine learning for autonomous vehicle control. I love making 
        fun personal projects and dancing, running, and doing digital art. <br/>
        <br/>
        I am learning how to develop websites using portfolio. Check back in 
        later to see how this develops. 
        <br/>
        <br/>
        Here are some other projects I have worked on:
        </section>
        <ul>
          <li>Heartrate Controlled Electric Skateboard</li>
          <li>Music Visualizer</li>
          <li>Robotic Fish</li>
          <li>Sign Language Translator</li>
          <li>Music Visualizer</li>
          <li>Led Butterfly Wings</li>
          <li>Broomstick Mounted Segway</li>
          <li>Virtual Object Simulation</li>
          <li>AI Ballet Teacher</li>
          <li>Haptic Remotely Operated Vehicle Controller</li>
        </ul>
      </div>
    </Layout>
  )
}