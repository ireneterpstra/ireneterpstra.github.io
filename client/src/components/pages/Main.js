import React, { Component } from "react";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import TensorflowExample from "../scripts/TensorflowExample.js";
import Data from "../scripts/data.js";

import "../../utilities.css";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        {/* <TensorflowExample/> */}
        <h1>Hello</h1>
        <h2>Wecome to my website</h2>
        <p1>
        I am a sophomore at MIT studying Electrical Engineering 
        and Computer Science. I am interested in robotics and using 
        machine learning for autonomous vehicle control. I love making 
        fun personal projects and dancing, running, and doing digital art. <br/>
        <br/>
        Here are some of the Projects I have worked on:
        </p1>
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


        
      </>
    );
  }
}

export default Main;
