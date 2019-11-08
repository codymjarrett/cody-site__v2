import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)


const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__content">
        &copy; 2019 | Built using{" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby.js
        </a>{" "}
        &{" "}
        <a
          href="https://www.contentful.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contentful CMS
        </a>
      </p>
      <div className="social">
        <a
          href="https://www.github.com/codymjcodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            size="2x"
            transform="shrink-4"
            color="#E9E9E9"
            icon={["fab", "github"]}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/codymjarrett"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            size="2x"
            transform="shrink-4"
            color="#E9E9E9"
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href="https://twitter.com/codymjarrett"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            size="2x"
            transform="shrink-4"
            color="#E9E9E9"
            icon={["fab", "twitter"]}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
