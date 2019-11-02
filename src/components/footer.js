import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

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
      <div className="social">
        <a href="https://www.github.com/codymjcodes" target="_blank">
          <FontAwesomeIcon
            className="social-icon"
            size="2x"
            transform="shrink-4"
            color="#E9E9E9"
            icon={faGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/codymjarrett" target="_blank">
          <FontAwesomeIcon
            className="social-icon"
            size="2x"
            transform="shrink-4"
            color="#E9E9E9"
            icon={faLinkedinIn}
          />
        </a>
        <a href="https://twitter.com/codymjarrett" target="_blank">
          <FontAwesomeIcon
            className="social-icon"
            size="2x"
            transform="shrink-4"
            color="#E9E9E9"
            icon={faTwitter}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
