import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

const Header = () => {
  const [mobileNavOpened, setMobileNav] = useState(false)

  useEffect(() => {
    setBodyVisibility()
  })

  const setBodyVisibility = () => {
    if (!mobileNavOpened) {
      document.body.style.overflow = "visible"
    } else if (mobileNavOpened) {
      document.body.style.overflow = "hidden"
    }
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo header__title">
        CJ
      </Link>
      <button
        aria-label="open/close navigation"
        className={`mobile-nav-btn ${
          mobileNavOpened ? "nav-mobile--is-open" : ""
        }`}
        onClick={() => setMobileNav(!mobileNavOpened)}
      >
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      <nav className="nav--main-nav">
        <ul className="nav__group">
          <li className="nav__item">
            <Link
              to="/"
              className="link home-link"
              id="homeLink"
              activeClassName="is-active"
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/about"
              className="link about-link"
              activeClassName="is-active"
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/work"
              className="link work-link"
              activeClassName="is-active"
            >
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contact"
              className="link contact-link"
              activeClassName="is-active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`nav--mobile-nav ${mobileNavOpened ? "nav-is-open" : ""}`}
        aria-hidden="false"
      >
        <ul className="nav--mobile-nav__group nav__group">
          <li
            className="nav--mobile-nav__item nav__item"
            onClick={() => setMobileNav(!mobileNavOpened)}
          >
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li
            className="nav--mobile-nav__item nav__item"
            onClick={() => setMobileNav(!mobileNavOpened)}
          >
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li
            className="nav--mobile-nav__item nav__item"
            onClick={() => setMobileNav(!mobileNavOpened)}
          >
            <Link to="/work" className="link">
              Work
            </Link>
          </li>
          <li
            className="nav--mobile-nav__item nav__item"
            onClick={() => setMobileNav(!mobileNavOpened)}
          >
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
