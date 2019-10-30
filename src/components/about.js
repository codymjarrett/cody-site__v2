import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

// import Image from "../components/image"

const About = () => {
  return (
    <div className="about-me">
      <div className="floating-emoji">
        <span className="emoji emoji-hand">👋</span>
      </div>
      <div className="about-me__main">
        <p class="about-me__content">
          Hello, I'm Cody! I'm a Chicago based Front End Engineer. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Ex blanditiis explicabo
          harum assumenda asperiores quaerat nihil voluptatum laboriosam modi
          iusto! taking care to deliver experiences that are usable, performant,
          and accessible
        </p>
      </div>
    </div>
  )
}

export default About
