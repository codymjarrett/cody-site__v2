import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

// import Image from "../components/image"

const Home = () => {
  return (
    <div className="home">
      <div className="home__heading">
        <h1 className="title">
          Cody Jarrett
          <span className="job-title">Front End Engineer</span>
          <span className="job-title">UI/UX</span>
        </h1>
      </div>
      <div className="home__main">
        <p class="home__content">
          I'm a Chicago based Front End Engineer. 
          
        </p>
      </div>
    </div>
  )
}

export default Home
