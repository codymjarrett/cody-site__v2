import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

// import Image from "../components/image"

const About = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__title">About Me</h2>
      <p class="about-me__content">
        Hello, I'm Cody! I'm a Chicago based Front End Engineer. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ex blanditiis explicabo
        harum assumenda asperiores quaerat nihil voluptatum laboriosam modi
        iusto! taking care to deliver experiences that are usable, performant,
        and accessible
      </p>
      <p class="about-me__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum
        deleniti soluta, assumenda suscipit earum repudiandae quasi? Asperiores
        incidunt eligendi provident consequatur in eaque ex facere hic neque,
        voluptatum ut! 
      </p>
    </div>
  )
}

export default About
