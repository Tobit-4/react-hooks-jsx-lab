import React from "react";
import { image, name } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hello, this is me, {name}</p>
    <img src={image} alt="I made this"/> 
  </div>;
}

export default About;
