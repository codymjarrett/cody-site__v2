import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = () => {
  const [mobileNavOpened, setMobileNav] = useState(false)

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <span className="header__title">Cody Jarrett</span>
        <div className="header__subtitles">
          <span className="job-title">Front End Engineer</span>
          <span className="job-title">UI/UX</span>
        </div>
      </Link>
      <button
        aria-label="open/close navigation"
        className={`mobile-nav-btn ${
          mobileNavOpened ? "nav-mobile--is-open" : ""
        }`}
        onClick={() => setMobileNav(!mobileNavOpened)}
      >
        <span class="burger"></span>
        <span class="burger-text">Menu</span>
      </button>
      <nav className="nav--main-nav">
        <ul className="nav__group">
          <li className="nav__item">
            <Link to="/" className="link home-link" id="homeLink" activeClassName="is-active">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="link blog-link" activeClassName="is-active">
              Blog
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/work" className="link work-link" activeClassName="is-active">
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="link contact-link" activeClassName="is-active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`nav--mobile-nav ${mobileNavOpened ? "nav-is-open" : ""}`}
      >
        <ul className="nav--mobile-nav__group nav__group">
          <li className="nav--mobile-nav__item nav__item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav--mobile-nav__item nav__item">
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
          <li className="nav--mobile-nav__item nav__item">
            <Link to="/work" className="link">
              Work
            </Link>
          </li>
          <li className="nav--mobile-nav__item nav__item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
