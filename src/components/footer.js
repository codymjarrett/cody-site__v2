import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

// import Image from "../components/image"

const Footer = () => {
  return (
    <footer className="footer">
      <p class="footer__content">
        &copy; 2019 | Built using{" "}
        <a href="https://www.gatsbyjs.org/" target="_blank">
          Gatsby.js
        </a>
      </p>
    </footer>
  )
}

export default Footer
